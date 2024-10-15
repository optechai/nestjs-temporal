"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPORAL_CONFIG_DEFAULT_TOKEN = void 0;
exports.getSharedConfigToken = getSharedConfigToken;
exports.TEMPORAL_CONFIG_DEFAULT_TOKEN = 'TEMPORAL_CONFIG(default)';
function getSharedConfigToken(configKey) {
    return configKey
        ? `TEMPORAL_CONFIG(${configKey})`
        : exports.TEMPORAL_CONFIG_DEFAULT_TOKEN;
}
