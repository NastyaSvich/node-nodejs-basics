const parseArgs = () => {
    const argvList = process.argv.slice(2);

    let result = [];
    for(let i = 0; i < argvList.length; i += 2) {
        result.push(`${argvList[i].slice(2)} is ${argvList[i + 1]}`)
    }

    console.log(result.join(", "))
};

parseArgs();