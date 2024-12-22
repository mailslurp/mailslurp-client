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
exports.instanceOfRecipientProjection = instanceOfRecipientProjection;
exports.RecipientProjectionFromJSON = RecipientProjectionFromJSON;
exports.RecipientProjectionFromJSONTyped = RecipientProjectionFromJSONTyped;
exports.RecipientProjectionToJSON = RecipientProjectionToJSON;
exports.RecipientProjectionToJSONTyped = RecipientProjectionToJSONTyped;
/**
 * Check if a given object implements the RecipientProjection interface.
 */
function instanceOfRecipientProjection(value) {
    if (!('emailAddress' in value) || value['emailAddress'] === undefined)
        return false;
    if (!('rawValue' in value) || value['rawValue'] === undefined)
        return false;
    return true;
}
function RecipientProjectionFromJSON(json) {
    return RecipientProjectionFromJSONTyped(json, false);
}
function RecipientProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'emailAddress': json['emailAddress'],
        'rawValue': json['rawValue'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function RecipientProjectionToJSON(json) {
    return RecipientProjectionToJSONTyped(json, false);
}
function RecipientProjectionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'emailAddress': value['emailAddress'],
        'rawValue': value['rawValue'],
        'name': value['name'],
    };
}
