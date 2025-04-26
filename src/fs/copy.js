import {existsSync} from "fs";
import fs from "node:fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceDirPath = path.resolve(__dirname, "files");
    const destinationDirPath = path.resolve(__dirname, "files_copy");

    if (!existsSync(sourceDirPath) || existsSync(destinationDirPath)) {
        throw new Error("FS operation failed");
    } else {
        await fs.cp(sourceDirPath, destinationDirPath, {recursive: true});
    }
};

await copy();
