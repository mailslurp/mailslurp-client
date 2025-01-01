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
exports.WebhookEmailReadPayloadToJSON = exports.WebhookEmailReadPayloadFromJSONTyped = exports.WebhookEmailReadPayloadFromJSON = exports.WebhookEmailReadPayloadEventNameEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var WebhookEmailReadPayloadEventNameEnum;
(function (WebhookEmailReadPayloadEventNameEnum) {
    WebhookEmailReadPayloadEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    WebhookEmailReadPayloadEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    WebhookEmailReadPayloadEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    WebhookEmailReadPayloadEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    WebhookEmailReadPayloadEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    WebhookEmailReadPayloadEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
    WebhookEmailReadPayloadEventNameEnum["DELIVERY_STATUS"] = "DELIVERY_STATUS";
    WebhookEmailReadPayloadEventNameEnum["BOUNCE"] = "BOUNCE";
    WebhookEmailReadPayloadEventNameEnum["BOUNCE_RECIPIENT"] = "BOUNCE_RECIPIENT";
    WebhookEmailReadPayloadEventNameEnum["NEW_SMS"] = "NEW_SMS";
    WebhookEmailReadPayloadEventNameEnum["NEW_GUEST_USER"] = "NEW_GUEST_USER";
})(WebhookEmailReadPayloadEventNameEnum = exports.WebhookEmailReadPayloadEventNameEnum || (exports.WebhookEmailReadPayloadEventNameEnum = {}));
function WebhookEmailReadPayloadFromJSON(json) {
    return WebhookEmailReadPayloadFromJSONTyped(json, false);
}
exports.WebhookEmailReadPayloadFromJSON = WebhookEmailReadPayloadFromJSON;
function WebhookEmailReadPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        messageId: json['messageId'],
        webhookId: json['webhookId'],
        eventName: json['eventName'],
        webhookName: !(0, runtime_1.exists)(json, 'webhookName') ? undefined : json['webhookName'],
        emailId: json['emailId'],
        inboxId: json['inboxId'],
        emailIsRead: json['emailIsRead'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.WebhookEmailReadPayloadFromJSONTyped = WebhookEmailReadPayloadFromJSONTyped;
function WebhookEmailReadPayloadToJSON(value) {
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
        emailId: value.emailId,
        inboxId: value.inboxId,
        emailIsRead: value.emailIsRead,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.WebhookEmailReadPayloadToJSON = WebhookEmailReadPayloadToJSON;
