import {spawn} from "child_process";
import {fileURLToPath} from "url";
import path from "path";

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

   const filePath = path.resolve(__dirname, "files", "script.js");

   spawn('node', [filePath, ...args], {
        stdio: [process.stdin, process.stdout, 'inherit']
   });
};

spawnChildProcess(['10', '20', '30']);
