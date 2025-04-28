import {Worker} from "worker_threads";
import {fileURLToPath} from "url";
import path from "path";
import os from "os";

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.resolve(__dirname, "worker.js");

    const numberCPUCores = os.cpus().length;

    const workers = [];
    const workerPromises = [];
    for (let i = 0; i < numberCPUCores; i++) {
        const worker = new Worker(filePath);
        workers.push(worker);

        const workerPromise = new Promise((resolve) => {
            worker.once('message', (result) => {
                resolve({status: 'resolved', data: result});
            });

            worker.once('error', () => {
                resolve({ status: 'error', data: null });
            });
        });

        workerPromises.push(workerPromise);
        worker.postMessage(10 + i);
    }

    const results = await Promise.all(workerPromises);

    console.log(results);

    await Promise.all(workers.map(worker => worker.terminate()));
};

await performCalculations();