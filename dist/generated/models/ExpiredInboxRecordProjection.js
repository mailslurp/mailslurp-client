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
exports.ExpiredInboxRecordProjectionToJSON = exports.ExpiredInboxRecordProjectionFromJSONTyped = exports.ExpiredInboxRecordProjectionFromJSON = void 0;
function ExpiredInboxRecordProjectionFromJSON(json) {
    return ExpiredInboxRecordProjectionFromJSONTyped(json, false);
}
exports.ExpiredInboxRecordProjectionFromJSON = ExpiredInboxRecordProjectionFromJSON;
function ExpiredInboxRecordProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        userId: json['userId'],
        emailAddress: json['emailAddress'],
        createdAt: new Date(json['createdAt']),
        id: json['id'],
    };
}
exports.ExpiredInboxRecordProjectionFromJSONTyped = ExpiredInboxRecordProjectionFromJSONTyped;
function ExpiredInboxRecordProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        userId: value.userId,
        emailAddress: value.emailAddress,
        createdAt: value.createdAt.toISOString(),
        id: value.id,
    };
}
exports.ExpiredInboxRecordProjectionToJSON = ExpiredInboxRecordProjectionToJSON;
