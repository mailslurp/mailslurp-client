"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailToJSON = exports.EmailFromJSONTyped = exports.EmailFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function EmailFromJSON(json) {
    return EmailFromJSONTyped(json, false);
}
exports.EmailFromJSON = EmailFromJSON;
function EmailFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        analysis: !(0, runtime_1.exists)(json, 'analysis')
            ? undefined
            : (0, _1.EmailAnalysisFromJSON)(json['analysis']),
        attachments: !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        body: !(0, runtime_1.exists)(json, 'body') ? undefined : json['body'],
        bodyExcerpt: !(0, runtime_1.exists)(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
        bodyMD5Hash: !(0, runtime_1.exists)(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        charset: !(0, runtime_1.exists)(json, 'charset') ? undefined : json['charset'],
        createdAt: !(0, runtime_1.exists)(json, 'createdAt')
            ? undefined
            : new Date(json['createdAt']),
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        headers: !(0, runtime_1.exists)(json, 'headers') ? undefined : json['headers'],
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        isHTML: !(0, runtime_1.exists)(json, 'isHTML') ? undefined : json['isHTML'],
        read: !(0, runtime_1.exists)(json, 'read') ? undefined : json['read'],
        recipients: !(0, runtime_1.exists)(json, 'recipients')
            ? undefined
            : (0, _1.EmailRecipientsFromJSON)(json['recipients']),
        replyTo: !(0, runtime_1.exists)(json, 'replyTo') ? undefined : json['replyTo'],
        sender: !(0, runtime_1.exists)(json, 'sender')
            ? undefined
            : (0, _1.SenderFromJSON)(json['sender']),
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        teamAccess: !(0, runtime_1.exists)(json, 'teamAccess') ? undefined : json['teamAccess'],
        to: !(0, runtime_1.exists)(json, 'to') ? undefined : json['to'],
        updatedAt: !(0, runtime_1.exists)(json, 'updatedAt')
            ? undefined
            : new Date(json['updatedAt']),
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
    };
}
exports.EmailFromJSONTyped = EmailFromJSONTyped;
function EmailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        analysis: (0, _1.EmailAnalysisToJSON)(value.analysis),
        attachments: value.attachments,
        bcc: value.bcc,
        body: value.body,
        bodyExcerpt: value.bodyExcerpt,
        bodyMD5Hash: value.bodyMD5Hash,
        cc: value.cc,
        charset: value.charset,
        createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
        from: value.from,
        headers: value.headers,
        id: value.id,
        inboxId: value.inboxId,
        isHTML: value.isHTML,
        read: value.read,
        recipients: (0, _1.EmailRecipientsToJSON)(value.recipients),
        replyTo: value.replyTo,
        sender: (0, _1.SenderToJSON)(value.sender),
        subject: value.subject,
        teamAccess: value.teamAccess,
        to: value.to,
        updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
        userId: value.userId,
    };
}
exports.EmailToJSON = EmailToJSON;
