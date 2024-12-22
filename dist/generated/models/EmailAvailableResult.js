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
exports.instanceOfEmailAvailableResult = instanceOfEmailAvailableResult;
exports.EmailAvailableResultFromJSON = EmailAvailableResultFromJSON;
exports.EmailAvailableResultFromJSONTyped = EmailAvailableResultFromJSONTyped;
exports.EmailAvailableResultToJSON = EmailAvailableResultToJSON;
exports.EmailAvailableResultToJSONTyped = EmailAvailableResultToJSONTyped;
/**
 * Check if a given object implements the EmailAvailableResult interface.
 */
function instanceOfEmailAvailableResult(value) {
    if (!('available' in value) || value['available'] === undefined)
        return false;
    return true;
}
function EmailAvailableResultFromJSON(json) {
    return EmailAvailableResultFromJSONTyped(json, false);
}
function EmailAvailableResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'available': json['available'],
    };
}
function EmailAvailableResultToJSON(json) {
    return EmailAvailableResultToJSONTyped(json, false);
}
function EmailAvailableResultToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'available': value['available'],
    };
}
