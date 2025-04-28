import {existsSync} from "fs";
import fs from "node:fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const wrongFilePath = path.resolve(__dirname, "files", "wrongFilename.txt");
    const properFilePath = path.resolve(__dirname, "files", "properFilename.md");

    if (!existsSync(wrongFilePath) || existsSync(properFilePath)) {
        throw new Error("FS operation failed");
    } else {
        await fs.rename(wrongFilePath, properFilePath);
    }
};

await rename();