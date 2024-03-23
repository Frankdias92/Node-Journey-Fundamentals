

import { Readable, Transform } from 'node:stream'

class StreamExample extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)
    }
}

class InverseNumberStream extends Transform {
    _transform(chuck, encoding, callback) {
        const transformed = Number(chuck.toString()) * 1

        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplyByTenStream extends WritableStream {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new StreamExample()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())

    
// new StreamExample()
//     .pipe(process.stdout)