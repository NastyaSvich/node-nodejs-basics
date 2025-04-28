import {fileURLToPath} from "url";
import {pipeline} from "node:stream/promises"
import path from "path";
import fs from "fs";

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.resolve(__dirname, "files", "fileToWrite.txt");

    const writableStream  = fs.createWriteStream(filePath);
    await pipeline(process.stdin, writableStream);
};

await write();