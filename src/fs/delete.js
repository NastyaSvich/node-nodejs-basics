import {existsSync} from "fs";
import fs from "node:fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.resolve(__dirname, "files", "fileToRemove.txt");

    if (!existsSync(filePath)) {
        throw new Error("FS operation failed");
    } else {
        await fs.unlink(filePath);
    }
};

await remove();