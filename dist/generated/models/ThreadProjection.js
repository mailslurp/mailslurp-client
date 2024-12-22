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
exports.ThreadProjectionFromJSON = ThreadProjectionFromJSON;
exports.ThreadProjectionFromJSONTyped = ThreadProjectionFromJSONTyped;
exports.ThreadProjectionToJSON = ThreadProjectionToJSON;
var runtime_1 = require("../runtime");
function ThreadProjectionFromJSON(json) {
    return ThreadProjectionFromJSONTyped(json, false);
}
function ThreadProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        userId: json['userId'],
        inboxId: json['inboxId'],
        to: json['to'],
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        aliasId: json['aliasId'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        id: json['id'],
    };
}
function ThreadProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        userId: value.userId,
        inboxId: value.inboxId,
        to: value.to,
        bcc: value.bcc,
        cc: value.cc,
        aliasId: value.aliasId,
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
        subject: value.subject,
        name: value.name,
        id: value.id,
    };
}
