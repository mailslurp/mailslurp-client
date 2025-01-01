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
exports.SentEmailProjectionToJSON = exports.SentEmailProjectionFromJSONTyped = exports.SentEmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function SentEmailProjectionFromJSON(json) {
    return SentEmailProjectionFromJSONTyped(json, false);
}
exports.SentEmailProjectionFromJSON = SentEmailProjectionFromJSON;
function SentEmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        createdAt: new Date(json['createdAt']),
        id: json['id'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        sender: !(0, runtime_1.exists)(json, 'sender')
            ? undefined
            : (0, _1.SenderFromJSON)(json['sender']),
        recipients: !(0, runtime_1.exists)(json, 'recipients')
            ? undefined
            : (0, _1.EmailRecipientsFromJSON)(json['recipients']),
        userId: json['userId'],
        attachments: !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
        inboxId: json['inboxId'],
        to: json['to'],
        cc: json['cc'],
        bcc: json['bcc'],
        messageId: !(0, runtime_1.exists)(json, 'messageId') ? undefined : json['messageId'],
        inReplyTo: !(0, runtime_1.exists)(json, 'inReplyTo') ? undefined : json['inReplyTo'],
        bodyExcerpt: !(0, runtime_1.exists)(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
        textExcerpt: !(0, runtime_1.exists)(json, 'textExcerpt') ? undefined : json['textExcerpt'],
        bodyMD5Hash: !(0, runtime_1.exists)(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        virtualSend: json['virtualSend'],
        threadId: !(0, runtime_1.exists)(json, 'threadId') ? undefined : json['threadId'],
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
        subject: value.subject,
        createdAt: value.createdAt.toISOString(),
        id: value.id,
        from: value.from,
        sender: (0, _1.SenderToJSON)(value.sender),
        recipients: (0, _1.EmailRecipientsToJSON)(value.recipients),
        userId: value.userId,
        attachments: value.attachments,
        inboxId: value.inboxId,
        to: value.to,
        cc: value.cc,
        bcc: value.bcc,
        messageId: value.messageId,
        inReplyTo: value.inReplyTo,
        bodyExcerpt: value.bodyExcerpt,
        textExcerpt: value.textExcerpt,
        bodyMD5Hash: value.bodyMD5Hash,
        virtualSend: value.virtualSend,
        threadId: value.threadId,
    };
}
exports.SentEmailProjectionToJSON = SentEmailProjectionToJSON;
