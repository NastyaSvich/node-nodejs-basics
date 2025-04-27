import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {fileURLToPath, pathToFileURL } from "url";
import './files/c.cjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unknownObject = Math.random() > 0.5
    ? await getObjFromJsonFile("a.json")
    : await getObjFromJsonFile("b.json");

async function getObjFromJsonFile(fileName) {
    const module = await import(pathToFileURL(path.resolve(__dirname, "files", fileName)), {with: {type: 'json'}});
    return module.default;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer};

