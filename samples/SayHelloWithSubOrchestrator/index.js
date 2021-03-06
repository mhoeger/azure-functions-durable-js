const df = require("durable-functions");

module.exports = df.orchestrator(function*(context){
    const input = context.df.getInput();

    const output = yield context.df.callSubOrchestrator("SayHelloWithActivity", input);
    return output;
});