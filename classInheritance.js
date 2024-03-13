class BaseLogger {
    log(message) {
        console.log(message);
    }
}

class TableLogger extends BaseLogger {
    log(...args) {
        super.log(args.join(' | '));
    }
}

class TableTimeLogger extends TableLogger {
    log(...args) {
        const row = `${new Date().toLocaleString()} | ${args.join(' | ')}`;
        super.log(row);
    }
}

new BaseLogger().log("Hello World!");
new TableLogger().log("Hello", "World", "!");
new TableTimeLogger().log("Hello", "World", "!");