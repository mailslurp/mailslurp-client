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
exports.SentEmailDtoToJSON = exports.SentEmailDtoFromJSONTyped = exports.SentEmailDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
function SentEmailDtoFromJSON(json) {
    return SentEmailDtoFromJSONTyped(json, false);
}
exports.SentEmailDtoFromJSON = SentEmailDtoFromJSON;
function SentEmailDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: json['userId'],
        inboxId: json['inboxId'],
        to: !(0, runtime_1.exists)(json, 'to') ? undefined : json['to'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        replyTo: !(0, runtime_1.exists)(json, 'replyTo') ? undefined : json['replyTo'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        attachments: !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        bodyMD5Hash: !(0, runtime_1.exists)(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        body: !(0, runtime_1.exists)(json, 'body') ? undefined : json['body'],
        charset: !(0, runtime_1.exists)(json, 'charset') ? undefined : json['charset'],
        isHTML: !(0, runtime_1.exists)(json, 'isHTML') ? undefined : json['isHTML'],
        sentAt: new Date(json['sentAt']),
        pixelIds: !(0, runtime_1.exists)(json, 'pixelIds') ? undefined : json['pixelIds'],
        messageId: !(0, runtime_1.exists)(json, 'messageId') ? undefined : json['messageId'],
        virtualSend: !(0, runtime_1.exists)(json, 'virtualSend') ? undefined : json['virtualSend'],
        html: !(0, runtime_1.exists)(json, 'html') ? undefined : json['html'],
    };
}
exports.SentEmailDtoFromJSONTyped = SentEmailDtoFromJSONTyped;
function SentEmailDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        inboxId: value.inboxId,
        to: value.to,
        from: value.from,
        replyTo: value.replyTo,
        cc: value.cc,
        bcc: value.bcc,
        attachments: value.attachments,
        subject: value.subject,
        bodyMD5Hash: value.bodyMD5Hash,
        body: value.body,
        charset: value.charset,
        isHTML: value.isHTML,
        sentAt: value.sentAt.toISOString(),
        pixelIds: value.pixelIds,
        messageId: value.messageId,
        virtualSend: value.virtualSend,
        html: value.html,
    };
}
exports.SentEmailDtoToJSON = SentEmailDtoToJSON;
