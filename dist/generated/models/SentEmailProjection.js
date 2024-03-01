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
exports.SentEmailProjectionToJSON = exports.SentEmailProjectionFromJSONTyped = exports.SentEmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function SentEmailProjectionFromJSON(json) {
    return SentEmailProjectionFromJSONTyped(json, false);
}
exports.SentEmailProjectionFromJSON = SentEmailProjectionFromJSON;
function SentEmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: json['userId'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        attachments: json['attachments'],
        inboxId: json['inboxId'],
        to: json['to'],
        bcc: json['bcc'],
        cc: json['cc'],
        createdAt: new Date(json['createdAt']),
        bodyMD5Hash: !(0, runtime_1.exists)(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        virtualSend: json['virtualSend'],
    };
}
exports.SentEmailProjectionFromJSONTyped = SentEmailProjectionFromJSONTyped;
function SentEmailProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        from: value.from,
        subject: value.subject,
        attachments: value.attachments,
        inboxId: value.inboxId,
        to: value.to,
        bcc: value.bcc,
        cc: value.cc,
        createdAt: value.createdAt.toISOString(),
        bodyMD5Hash: value.bodyMD5Hash,
        virtualSend: value.virtualSend,
    };
}
exports.SentEmailProjectionToJSON = SentEmailProjectionToJSON;
