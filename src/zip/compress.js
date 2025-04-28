import {pipeline} from "node:stream/promises";
import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import zlib from "zlib";

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFilePath = path.resolve(__dirname, "files", "fileToCompress.txt");
    const compressedFilePath = path.resolve(__dirname, "files", "archive.gz");

    await pipeline(
        fs.createReadStream(sourceFilePath),
        zlib.createGzip(),
        fs.createWriteStream(compressedFilePath),
    );
};

await compress();