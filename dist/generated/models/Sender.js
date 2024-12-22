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
exports.instanceOfSender = instanceOfSender;
exports.SenderFromJSON = SenderFromJSON;
exports.SenderFromJSONTyped = SenderFromJSONTyped;
exports.SenderToJSON = SenderToJSON;
exports.SenderToJSONTyped = SenderToJSONTyped;
/**
 * Check if a given object implements the Sender interface.
 */
function instanceOfSender(value) {
    if (!('rawValue' in value) || value['rawValue'] === undefined)
        return false;
    if (!('emailAddress' in value) || value['emailAddress'] === undefined)
        return false;
    return true;
}
function SenderFromJSON(json) {
    return SenderFromJSONTyped(json, false);
}
function SenderFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'rawValue': json['rawValue'],
        'emailAddress': json['emailAddress'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function SenderToJSON(json) {
    return SenderToJSONTyped(json, false);
}
function SenderToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'rawValue': value['rawValue'],
        'emailAddress': value['emailAddress'],
        'name': value['name'],
    };
}
