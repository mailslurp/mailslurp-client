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
exports.instanceOfContactProjection = instanceOfContactProjection;
exports.ContactProjectionFromJSON = ContactProjectionFromJSON;
exports.ContactProjectionFromJSONTyped = ContactProjectionFromJSONTyped;
exports.ContactProjectionToJSON = ContactProjectionToJSON;
exports.ContactProjectionToJSONTyped = ContactProjectionToJSONTyped;
/**
 * Check if a given object implements the ContactProjection interface.
 */
function instanceOfContactProjection(value) {
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function ContactProjectionFromJSON(json) {
    return ContactProjectionFromJSONTyped(json, false);
}
function ContactProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': (new Date(json['createdAt'])),
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'emailAddresses': json['emailAddresses'] == null ? undefined : json['emailAddresses'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'company': json['company'] == null ? undefined : json['company'],
        'optOut': json['optOut'] == null ? undefined : json['optOut'],
        'id': json['id'],
        'groupId': json['groupId'] == null ? undefined : json['groupId'],
    };
}
function ContactProjectionToJSON(json) {
    return ContactProjectionToJSONTyped(json, false);
}
function ContactProjectionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'createdAt': ((value['createdAt']).toISOString()),
        'emailAddress': value['emailAddress'],
        'emailAddresses': value['emailAddresses'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'company': value['company'],
        'optOut': value['optOut'],
        'id': value['id'],
        'groupId': value['groupId'],
    };
}
