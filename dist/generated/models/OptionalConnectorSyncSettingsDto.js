"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfOptionalConnectorSyncSettingsDto = instanceOfOptionalConnectorSyncSettingsDto;
exports.OptionalConnectorSyncSettingsDtoFromJSON = OptionalConnectorSyncSettingsDtoFromJSON;
exports.OptionalConnectorSyncSettingsDtoFromJSONTyped = OptionalConnectorSyncSettingsDtoFromJSONTyped;
exports.OptionalConnectorSyncSettingsDtoToJSON = OptionalConnectorSyncSettingsDtoToJSON;
exports.OptionalConnectorSyncSettingsDtoToJSONTyped = OptionalConnectorSyncSettingsDtoToJSONTyped;
var ConnectorSyncSettingsDto_1 = require("./ConnectorSyncSettingsDto");
/**
 * Check if a given object implements the OptionalConnectorSyncSettingsDto interface.
 */
function instanceOfOptionalConnectorSyncSettingsDto(value) {
    if (!('present' in value) || value['present'] === undefined)
        return false;
    return true;
}
function OptionalConnectorSyncSettingsDtoFromJSON(json) {
    return OptionalConnectorSyncSettingsDtoFromJSONTyped(json, false);
}
function OptionalConnectorSyncSettingsDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'present': json['present'],
        'result': json['result'] == null ? undefined : (0, ConnectorSyncSettingsDto_1.ConnectorSyncSettingsDtoFromJSON)(json['result']),
    };
}
function OptionalConnectorSyncSettingsDtoToJSON(json) {
    return OptionalConnectorSyncSettingsDtoToJSONTyped(json, false);
}
function OptionalConnectorSyncSettingsDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'present': value['present'],
        'result': (0, ConnectorSyncSettingsDto_1.ConnectorSyncSettingsDtoToJSON)(value['result']),
    };
}
