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
exports.instanceOfSendEmailBodyPart = instanceOfSendEmailBodyPart;
exports.SendEmailBodyPartFromJSON = SendEmailBodyPartFromJSON;
exports.SendEmailBodyPartFromJSONTyped = SendEmailBodyPartFromJSONTyped;
exports.SendEmailBodyPartToJSON = SendEmailBodyPartToJSON;
exports.SendEmailBodyPartToJSONTyped = SendEmailBodyPartToJSONTyped;
/**
 * Check if a given object implements the SendEmailBodyPart interface.
 */
function instanceOfSendEmailBodyPart(value) {
    if (!('contentType' in value) || value['contentType'] === undefined)
        return false;
    if (!('contentBody' in value) || value['contentBody'] === undefined)
        return false;
    return true;
}
function SendEmailBodyPartFromJSON(json) {
    return SendEmailBodyPartFromJSONTyped(json, false);
}
function SendEmailBodyPartFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'contentType': json['contentType'],
        'contentBody': json['contentBody'],
    };
}
function SendEmailBodyPartToJSON(json) {
    return SendEmailBodyPartToJSONTyped(json, false);
}
function SendEmailBodyPartToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'contentType': value['contentType'],
        'contentBody': value['contentBody'],
    };
}
