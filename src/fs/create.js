import {existsSync} from "fs";
import fs from "node:fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const content = 'I am fresh and young';
    const filePath = path.resolve(__dirname, "files", "fresh.txt");

    if (existsSync(filePath)) {
        throw new Error("FS operation failed");
    } else {
        await fs.writeFile(filePath, content);
    }
};

await create();