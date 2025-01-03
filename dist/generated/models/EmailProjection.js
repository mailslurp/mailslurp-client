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
exports.EmailProjectionToJSON = exports.EmailProjectionFromJSONTyped = exports.EmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function EmailProjectionFromJSON(json) {
    return EmailProjectionFromJSONTyped(json, false);
}
exports.EmailProjectionFromJSON = EmailProjectionFromJSON;
function EmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        createdAt: new Date(json['createdAt']),
        sender: !(0, runtime_1.exists)(json, 'sender')
            ? undefined
            : (0, _1.SenderFromJSON)(json['sender']),
        recipients: !(0, runtime_1.exists)(json, 'recipients')
            ? undefined
            : (0, _1.EmailRecipientsFromJSON)(json['recipients']),
        attachments: !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
        inboxId: json['inboxId'],
        to: json['to'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        messageId: !(0, runtime_1.exists)(json, 'messageId') ? undefined : json['messageId'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
        favourite: !(0, runtime_1.exists)(json, 'favourite') ? undefined : json['favourite'],
        plusAddress: !(0, runtime_1.exists)(json, 'plusAddress') ? undefined : json['plusAddress'],
        inReplyTo: !(0, runtime_1.exists)(json, 'inReplyTo') ? undefined : json['inReplyTo'],
        read: json['read'],
        bodyExcerpt: !(0, runtime_1.exists)(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
        textExcerpt: !(0, runtime_1.exists)(json, 'textExcerpt') ? undefined : json['textExcerpt'],
        bodyPartContentTypes: !(0, runtime_1.exists)(json, 'bodyPartContentTypes')
            ? undefined
            : json['bodyPartContentTypes'],
        bodyMD5Hash: !(0, runtime_1.exists)(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        teamAccess: json['teamAccess'],
        id: json['id'],
        threadId: !(0, runtime_1.exists)(json, 'threadId') ? undefined : json['threadId'],
        from: json['from'],
    };
}
exports.EmailProjectionFromJSONTyped = EmailProjectionFromJSONTyped;
function EmailProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        subject: value.subject,
        createdAt: value.createdAt.toISOString(),
        sender: (0, _1.SenderToJSON)(value.sender),
        recipients: (0, _1.EmailRecipientsToJSON)(value.recipients),
        attachments: value.attachments,
        inboxId: value.inboxId,
        to: value.to,
        cc: value.cc,
        bcc: value.bcc,
        messageId: value.messageId,
        domainId: value.domainId,
        favourite: value.favourite,
        plusAddress: value.plusAddress,
        inReplyTo: value.inReplyTo,
        read: value.read,
        bodyExcerpt: value.bodyExcerpt,
        textExcerpt: value.textExcerpt,
        bodyPartContentTypes: value.bodyPartContentTypes,
        bodyMD5Hash: value.bodyMD5Hash,
        teamAccess: value.teamAccess,
        id: value.id,
        threadId: value.threadId,
        from: value.from,
    };
}
exports.EmailProjectionToJSON = EmailProjectionToJSON;
