function BaseLog() {
    BaseLog.prototype.log = function (message) {
        console.log(message);
    }
}

function TableLog() {
    TableLog.prototype.log = function (...args) {
        BaseLog.prototype.log.call(this, args.join(' | '));
    }
}

function TableTimeLog() {
    TableTimeLog.prototype.log = function (...args) {
        const row = `${new Date().toLocaleString()} | ${args.join(' | ')}`;
        BaseLog.prototype.log.call(this, row);
    }
}

new BaseLog().log("Hello World");
new TableLog().log("Hello", "World", "!");
new TableTimeLog().log("Hello", "World", "!");