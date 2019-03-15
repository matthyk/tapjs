const t = require('tap')
const bin = require.resolve('../bin/cmd.js')
const {execFile} = require('child_process')
const node = process.execPath

// This is kind of hacky and clever, but SOOOOO
// much faster than running real child procs.
const Minipass = require('minipass')
const {runInThisContext} = require('vm')
const code = require('fs').readFileSync(bin, 'utf8').replace(/^#!.*/, '')
const EE = require('events')
const run = (input, args, cb) => {
  let exitCode = 0
  let stdout = ''
  let stderr = ''

  const proc = new EE()
  let exited = false
  proc.exit = code => {
    exitCode = code || 0
    if (!exited) {
      exited = true
      cb(code, stdout, stderr)
    }
  }
  proc.stdin = new Minipass()
  proc.stdout = new Minipass()
  proc.stderr = new Minipass()
  proc.argv = [node, bin].concat(args)
  proc.stdout.on('data', c => stdout += c)
  proc.stderr.on('data', c => stderr += c)
  proc.stdin.pause()
  proc.stdin.end(input)

  const cons = {
    log: c => proc.stdout.write(c + '\n'),
    error: c => proc.stderr.write(c + '\n'),
  }

  const fn = runInThisContext(
    '(function (process, console, require) {' +
    code +
    '\n})', bin
  )
  fn(proc, cons, require)
  proc.emit('exit')

  if (!exited) {
    exited = true
    cb(exitCode, stdout, stderr)
  }
}

t.test('basic', t => {
  const taps = [
    // one that passes, at least, mostly
    `TAP version 13
ok 1 - this is fine
ok 2 - child {
    ok 1 - this is fine
    blearajn9aefnzxrfoas
               
    pragma +strict
    ok 2 - also fine
    ok
    # some comment
    1..3
}
1..2
`,
    // one that doesn't pass
    `TAP version 13
ok 1 - this is fine
# Subtest: child
    not ok 1 - this is fine
      ---
      not: ok
      this: is fine
      ...
    blearajn9aefnzxrfoas
               
    pragma +strict
    pragma -blerg
    ok 2 - also fine # TODO
    ok 3 - do later # TODO later is never
    ok 4 - rope # SKIP
    ok 4 - piks # SKIP is piks backward
    # some comment
    1..4 # plan comment
not ok 2 - child # time=420ms
1..2
`,
    // one that bails out
    `TAP version 13
ok 1 - i'm sure this will be fine
Bail out!
`,
    // bail out with reason
    `TAP version 13
Bail out! # i have my reasons
`,
  ]

  const runTest = tap => (t, args) => {
    run(tap, args, (er, o, e) => {
      t.matchSnapshot(er, 'error')
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.end()
    })
  }

  taps.forEach(tap => {
    const test = runTest(tap)
    t.test('no args', t => test(t, []))
    t.test('b w', t => test(t, ['-b', '-w', '--ignore-all-whitespace']))
    t.test('t', t => test(t, ['-t', '--tap', '-f', '--no-flat']))
    t.test('flat', t => test(t, ['-B', '-f', '--flat', '-o']))
    t.test('flat tap', t => test(t, ['-t', '--flat']))
    t.test('lines', t => test(t, ['--no-strict', '-l', '--lines']))
    t.test('strict', t => test(t, ['--strict']))
    t.test('silent', t => test(t, ['-s', '--silent']))
    t.test('silent strict', t => test(t, ['-s', '--strict']))
  })

  t.end()
})

t.test('json output formatting', t => {
  const tap = `TAP version 13
# Subtest: child
    ok 1 - this is fine
    1..1
ok 1 - child
1..1
`
  const test = (t, args) => {
    run(tap, args, (er, o, e) => {
      t.matchSnapshot(er, 'error')
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.end()
    })
  }
  t.test('-j', t => test(t, ['-j']))
  t.test('-j 1', t => test(t, ['-j', '1']))
  t.test('--json=1', t => test(t, ['--json=1']))
  t.test('--json 1', t => test(t, ['--json', '1']))
  t.test('--json -f', t => test(t, ['--json', '-f']))
  t.end()
})

t.test('unrecognized arg', t => run('', ['--blarg'], (er, o, e) => {
  t.matchSnapshot(er, 'error')
  t.matchSnapshot(o, 'output')
  t.matchSnapshot(e, 'stderr')
  t.end()
}))

t.test('help', t => run('', ['--help'], (er, o, e) => {
  t.matchSnapshot(er, 'error')
  t.matchSnapshot(o, 'output')
  t.matchSnapshot(e, 'stderr')
  t.end()
}))

t.test('version', t => run('', ['-v'], (er, o, e) => {
  t.notOk(er)
  t.equal(o.trim(), require('../package.json').version)
  t.equal(e, '')
  t.end()
}))
