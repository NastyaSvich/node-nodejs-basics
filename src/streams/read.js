import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

    const readableStream  = fs.createReadStream(filePath);
    readableStream.pipe(process.stdout);

    readableStream.on('end', () => {
        console.log('\n');
    });
};

await read();