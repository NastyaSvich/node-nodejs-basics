import {existsSync} from "fs";
import fs from "node:fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

    if (!existsSync(filePath)) {
        throw new Error("FS operation failed");
    } else {
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    }
};

await read();