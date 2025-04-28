import {pipeline} from "node:stream/promises";
import { Transform } from 'stream';

const transform = async () => {

    const reverseStream = new Transform({
        transform: function (chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            this.push(reversed);
            callback();
        },
    });

    await pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();