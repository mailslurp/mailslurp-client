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
exports.EmailPreviewToJSON = exports.EmailPreviewFromJSONTyped = exports.EmailPreviewFromJSON = void 0;
var runtime_1 = require("../runtime");
function EmailPreviewFromJSON(json) {
    return EmailPreviewFromJSONTyped(json, false);
}
exports.EmailPreviewFromJSON = EmailPreviewFromJSON;
function EmailPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        to: json['to'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        createdAt: new Date(json['createdAt']),
        read: json['read'],
        attachments: !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
    };
}
exports.EmailPreviewFromJSONTyped = EmailPreviewFromJSONTyped;
function EmailPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        domainId: value.domainId,
        subject: value.subject,
        to: value.to,
        from: value.from,
        bcc: value.bcc,
        cc: value.cc,
        createdAt: value.createdAt.toISOString(),
        read: value.read,
        attachments: value.attachments,
    };
}
exports.EmailPreviewToJSON = EmailPreviewToJSON;
