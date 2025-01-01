"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConnectorSyncSettingsOptionsToJSON = exports.CreateConnectorSyncSettingsOptionsFromJSONTyped = exports.CreateConnectorSyncSettingsOptionsFromJSON = exports.CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum;
(function (CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum) {
    CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum["INTERVAL"] = "INTERVAL";
})(CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum = exports.CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum || (exports.CreateConnectorSyncSettingsOptionsSyncScheduleTypeEnum = {}));
function CreateConnectorSyncSettingsOptionsFromJSON(json) {
    return CreateConnectorSyncSettingsOptionsFromJSONTyped(json, false);
}
exports.CreateConnectorSyncSettingsOptionsFromJSON = CreateConnectorSyncSettingsOptionsFromJSON;
function CreateConnectorSyncSettingsOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        syncEnabled: !(0, runtime_1.exists)(json, 'syncEnabled') ? undefined : json['syncEnabled'],
        syncScheduleType: !(0, runtime_1.exists)(json, 'syncScheduleType')
            ? undefined
            : json['syncScheduleType'],
        syncInterval: !(0, runtime_1.exists)(json, 'syncInterval')
            ? undefined
            : json['syncInterval'],
    };
}
exports.CreateConnectorSyncSettingsOptionsFromJSONTyped = CreateConnectorSyncSettingsOptionsFromJSONTyped;
function CreateConnectorSyncSettingsOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        syncEnabled: value.syncEnabled,
        syncScheduleType: value.syncScheduleType,
        syncInterval: value.syncInterval,
    };
}
exports.CreateConnectorSyncSettingsOptionsToJSON = CreateConnectorSyncSettingsOptionsToJSON;
