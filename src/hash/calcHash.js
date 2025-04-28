import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";
import { createHash } from 'crypto';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt");
    const hash = createHash('sha256');

    const readableStream  = fs.createReadStream(filePath);

    readableStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readableStream.on('end', () => {
        const hexHash = hash.digest('hex')
        console.log(hexHash);
    });
};

await calculateHash();