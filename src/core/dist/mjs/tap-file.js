import { createReadStream } from 'node:fs';
import { relative } from 'node:path';
import { Base } from './base.js';
import { cwd as procCwd } from './proc.js';
import { throwToParser } from './throw-to-parser.js';
/**
 * Class representing a file as a TAP stream
 *
 * @internal
 */
export class TapFile extends Base {
    caughtName = 'tapFileError';
    emitName = 'tapFile';
    cwd;
    filename;
    tapStream;
    constructor(options) {
        const { filename, tapStream, cwd = procCwd } = options;
        const name = options.name ||
            (filename
                ? relative(cwd, filename).replace(/\.tap$/, '')
                : 'file input');
        super({ ...options, name });
        this.filename = filename;
        this.cwd = cwd;
        this.tapStream = tapStream;
        this.tapStream?.pause();
    }
    main(cb) {
        const { tapStream, filename } = this;
        if (filename && !tapStream) {
            this.tapStream = createReadStream(filename);
        }
        else if (!this.tapStream) {
            throw new Error('either tapStream or filename must be provided');
        }
        this.tapStream.on('error', er => {
            er.tapCaught = this.caughtName;
            this.threw(er);
        });
        if (this.options.timeout) {
            this.setTimeout(this.options.timeout);
        }
        const s = this.tapStream;
        s.pipe(this.parser);
        if (this.parent) {
            this.parent.emit(this.emitName, this);
        }
        s.once('end', cb);
        s.once('error', cb);
        this.tapStream.resume();
    }
    threw(er, extra) {
        return throwToParser(this.parser, super.threw(er, extra));
    }
}
//# sourceMappingURL=tap-file.js.map