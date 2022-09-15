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
exports.EmailProjectionToJSON = exports.EmailProjectionFromJSONTyped = exports.EmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function EmailProjectionFromJSON(json) {
    return EmailProjectionFromJSONTyped(json, false);
}
exports.EmailProjectionFromJSON = EmailProjectionFromJSON;
function EmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        inboxId: json['inboxId'],
        attachments: !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
        to: json['to'],
        createdAt: new Date(json['createdAt']),
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
        read: json['read'],
        teamAccess: json['teamAccess'],
        bodyMD5Hash: !(0, runtime_1.exists)(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        bodyExcerpt: !(0, runtime_1.exists)(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
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
        id: value.id,
        from: value.from,
        subject: value.subject,
        inboxId: value.inboxId,
        attachments: value.attachments,
        to: value.to,
        createdAt: value.createdAt.toISOString(),
        bcc: value.bcc,
        cc: value.cc,
        domainId: value.domainId,
        read: value.read,
        teamAccess: value.teamAccess,
        bodyMD5Hash: value.bodyMD5Hash,
        bodyExcerpt: value.bodyExcerpt,
    };
}
exports.EmailProjectionToJSON = EmailProjectionToJSON;
