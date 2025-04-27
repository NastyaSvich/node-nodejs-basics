import {pipeline} from "node:stream/promises";
import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFilePath = path.resolve(__dirname, "files", "archive.gz");
    const decompressedFilePath = path.resolve(__dirname, "files", "fileToCompress.txt");

    await pipeline(
        fs.createReadStream(sourceFilePath),
        zlib.createGunzip(),
        fs.createWriteStream(decompressedFilePath),
    );
};

await decompress();