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
exports.instanceOfListUnsubscribeRecipientProjection = instanceOfListUnsubscribeRecipientProjection;
exports.ListUnsubscribeRecipientProjectionFromJSON = ListUnsubscribeRecipientProjectionFromJSON;
exports.ListUnsubscribeRecipientProjectionFromJSONTyped = ListUnsubscribeRecipientProjectionFromJSONTyped;
exports.ListUnsubscribeRecipientProjectionToJSON = ListUnsubscribeRecipientProjectionToJSON;
exports.ListUnsubscribeRecipientProjectionToJSONTyped = ListUnsubscribeRecipientProjectionToJSONTyped;
/**
 * Check if a given object implements the ListUnsubscribeRecipientProjection interface.
 */
function instanceOfListUnsubscribeRecipientProjection(value) {
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('emailAddress' in value) || value['emailAddress'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function ListUnsubscribeRecipientProjectionFromJSON(json) {
    return ListUnsubscribeRecipientProjectionFromJSONTyped(json, false);
}
function ListUnsubscribeRecipientProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': (new Date(json['createdAt'])),
        'emailAddress': json['emailAddress'],
        'domainId': json['domainId'] == null ? undefined : json['domainId'],
        'id': json['id'],
    };
}
function ListUnsubscribeRecipientProjectionToJSON(json) {
    return ListUnsubscribeRecipientProjectionToJSONTyped(json, false);
}
function ListUnsubscribeRecipientProjectionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'createdAt': ((value['createdAt']).toISOString()),
        'emailAddress': value['emailAddress'],
        'domainId': value['domainId'],
        'id': value['id'],
    };
}
