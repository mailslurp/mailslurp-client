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
exports.AliasProjectionToJSON = exports.AliasProjectionFromJSONTyped = exports.AliasProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function AliasProjectionFromJSON(json) {
    return AliasProjectionFromJSONTyped(json, false);
}
exports.AliasProjectionFromJSON = AliasProjectionFromJSON;
function AliasProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
        inboxId: json['inboxId'],
        userId: json['userId'],
        emailAddress: json['emailAddress'],
        useThreads: !(0, runtime_1.exists)(json, 'useThreads') ? undefined : json['useThreads'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        id: json['id'],
    };
}
exports.AliasProjectionFromJSONTyped = AliasProjectionFromJSONTyped;
function AliasProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
        inboxId: value.inboxId,
        userId: value.userId,
        emailAddress: value.emailAddress,
        useThreads: value.useThreads,
        name: value.name,
        id: value.id,
    };
}
exports.AliasProjectionToJSON = AliasProjectionToJSON;
