import {existsSync} from "fs";
import fs from "node:fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesDirPath = path.resolve(__dirname, "files");

    if (!existsSync(filesDirPath)) {
        throw new Error("FS operation failed");
    } else {
        const filenames = await fs.readdir(filesDirPath);
        return console.log(filenames);
    }
};

await list();