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
exports.WebhookNewEmailPayloadToJSON = exports.WebhookNewEmailPayloadFromJSONTyped = exports.WebhookNewEmailPayloadFromJSON = exports.WebhookNewEmailPayloadEventNameEnum = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
/**
 * @export
 * @enum {string}
 */
var WebhookNewEmailPayloadEventNameEnum;
(function (WebhookNewEmailPayloadEventNameEnum) {
    WebhookNewEmailPayloadEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    WebhookNewEmailPayloadEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    WebhookNewEmailPayloadEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    WebhookNewEmailPayloadEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    WebhookNewEmailPayloadEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    WebhookNewEmailPayloadEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
    WebhookNewEmailPayloadEventNameEnum["DELIVERY_STATUS"] = "DELIVERY_STATUS";
    WebhookNewEmailPayloadEventNameEnum["BOUNCE"] = "BOUNCE";
    WebhookNewEmailPayloadEventNameEnum["BOUNCE_RECIPIENT"] = "BOUNCE_RECIPIENT";
    WebhookNewEmailPayloadEventNameEnum["NEW_SMS"] = "NEW_SMS";
})(WebhookNewEmailPayloadEventNameEnum = exports.WebhookNewEmailPayloadEventNameEnum || (exports.WebhookNewEmailPayloadEventNameEnum = {}));
function WebhookNewEmailPayloadFromJSON(json) {
    return WebhookNewEmailPayloadFromJSONTyped(json, false);
}
exports.WebhookNewEmailPayloadFromJSON = WebhookNewEmailPayloadFromJSON;
function WebhookNewEmailPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        messageId: json['messageId'],
        webhookId: json['webhookId'],
        eventName: json['eventName'],
        webhookName: !(0, runtime_1.exists)(json, 'webhookName') ? undefined : json['webhookName'],
        inboxId: json['inboxId'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
        emailId: json['emailId'],
        createdAt: new Date(json['createdAt']),
        to: json['to'],
        from: json['from'],
        cc: json['cc'],
        bcc: json['bcc'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        attachmentMetaDatas: json['attachmentMetaDatas'].map(_1.AttachmentMetaDataFromJSON),
    };
}
exports.WebhookNewEmailPayloadFromJSONTyped = WebhookNewEmailPayloadFromJSONTyped;
function WebhookNewEmailPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        messageId: value.messageId,
        webhookId: value.webhookId,
        eventName: value.eventName,
        webhookName: value.webhookName,
        inboxId: value.inboxId,
        domainId: value.domainId,
        emailId: value.emailId,
        createdAt: value.createdAt.toISOString(),
        to: value.to,
        from: value.from,
        cc: value.cc,
        bcc: value.bcc,
        subject: value.subject,
        attachmentMetaDatas: value.attachmentMetaDatas.map(_1.AttachmentMetaDataToJSON),
    };
}
exports.WebhookNewEmailPayloadToJSON = WebhookNewEmailPayloadToJSON;
