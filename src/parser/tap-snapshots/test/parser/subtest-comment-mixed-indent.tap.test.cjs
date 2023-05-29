/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP subtest-comment-mixed-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Plan {
                  "comment": "",
                  "end": 2,
                  "start": 1,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting first",
                  "id": 1,
                  "name": "true is ok",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting first",
                  "id": 2,
                  "name": "doag is also okay",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 2,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 2,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 8.987,
                  "todo": 0,
                  "todos": Array [],
                },
              ],
              Array [
                "close",
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "../tap/test/test/ok.js nesting",
              "id": 1,
              "name": "first",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 8.987,
              "todo": false,
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting second",
                  "id": 1,
                  "name": "but that is ok",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting second",
                  "id": 2,
                  "name": "this passes",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting second",
                  "id": 3,
                  "name": "nested ok",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Plan {
                  "comment": "",
                  "end": 3,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 3,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 3,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 5.988,
                  "todo": 0,
                  "todos": Array [],
                },
              ],
              Array [
                "close",
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "../tap/test/test/ok.js nesting",
              "id": 2,
              "name": "second",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 5.988,
              "todo": false,
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 28.647,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "../tap/test/test/ok.js",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 28.647,
          "todo": false,
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "../tap/test/test/ok.js",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 205.826,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 223.468,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts TAP subtest-comment-mixed-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Plan {
                  "comment": "",
                  "end": 2,
                  "start": 1,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting first",
                  "id": 1,
                  "name": "true is ok",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting first",
                  "id": 2,
                  "name": "doag is also okay",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 2,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 2,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 8.987,
                  "todo": 0,
                  "todos": Array [],
                },
              ],
              Array [
                "close",
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "../tap/test/test/ok.js nesting",
              "id": 1,
              "name": "first",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 8.987,
              "todo": false,
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting second",
                  "id": 1,
                  "name": "but that is ok",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting second",
                  "id": 2,
                  "name": "this passes",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "diag": null,
                  "fullname": "../tap/test/test/ok.js nesting second",
                  "id": 3,
                  "name": "nested ok",
                  "ok": true,
                  "plan": null,
                  "previous": null,
                  "skip": false,
                  "tapError": null,
                  "time": null,
                  "todo": false,
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Plan {
                  "comment": "",
                  "end": 3,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 3,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 3,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 5.988,
                  "todo": 0,
                  "todos": Array [],
                },
              ],
              Array [
                "close",
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "../tap/test/test/ok.js nesting",
              "id": 2,
              "name": "second",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 5.988,
              "todo": false,
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 28.647,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "../tap/test/test/ok.js",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 28.647,
          "todo": false,
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "../tap/test/test/ok.js",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 205.826,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 1,
      "name": "but that is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js nesting second",
      "id": 3,
      "name": "nested ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 223.468,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`
