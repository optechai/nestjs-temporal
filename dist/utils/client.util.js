"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignOnAppShutdownHook = assignOnAppShutdownHook;
exports.getWorkflowClient = getWorkflowClient;
const client_1 = require("@temporalio/client");
function assignOnAppShutdownHook(client) {
    client.onApplicationShutdown =
        () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = client.connection) === null || _a === void 0 ? void 0 : _a.close().catch((reason) => console.error(`Temporal client connection was not cleanly closed: ${reason}`));
        });
    return client;
}
function getWorkflowClient(options) {
    const client = new client_1.WorkflowClient(options);
    return assignOnAppShutdownHook(client);
}
