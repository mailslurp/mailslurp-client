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
exports.ConnectorImapConnectionTestResultToJSON = exports.ConnectorImapConnectionTestResultFromJSONTyped = exports.ConnectorImapConnectionTestResultFromJSON = void 0;
var runtime_1 = require("../runtime");
function ConnectorImapConnectionTestResultFromJSON(json) {
    return ConnectorImapConnectionTestResultFromJSONTyped(json, false);
}
exports.ConnectorImapConnectionTestResultFromJSON = ConnectorImapConnectionTestResultFromJSON;
function ConnectorImapConnectionTestResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        error: !(0, runtime_1.exists)(json, 'error') ? undefined : json['error'],
        success: json['success'],
        message: !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        logs: !(0, runtime_1.exists)(json, 'logs') ? undefined : json['logs'],
    };
}
exports.ConnectorImapConnectionTestResultFromJSONTyped = ConnectorImapConnectionTestResultFromJSONTyped;
function ConnectorImapConnectionTestResultToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        error: value.error,
        success: value.success,
        message: value.message,
        logs: value.logs,
    };
}
exports.ConnectorImapConnectionTestResultToJSON = ConnectorImapConnectionTestResultToJSON;
