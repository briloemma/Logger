let baseLogger = {
    log: function (message) {
        console.log(message);
    }
}

let tableLogger = {
    __proto__: baseLogger,
    log(...args) {
        baseLogger.log(args.join(' | '));
    }
}

let tableTimeLog = {
    __proto__: tableLogger,
    log(...args) {
        tableLogger.log(`${new Date().toLocaleString()}`, args.join(' | '));
    }
}
baseLogger.log("Hello World!");
tableLogger.log("Hello", "World", "!");
tableTimeLog.log("Hello", "World", "!");