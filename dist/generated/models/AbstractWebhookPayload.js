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
exports.AbstractWebhookPayloadToJSON = exports.AbstractWebhookPayloadFromJSONTyped = exports.AbstractWebhookPayloadFromJSON = exports.AbstractWebhookPayloadEventNameEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var AbstractWebhookPayloadEventNameEnum;
(function (AbstractWebhookPayloadEventNameEnum) {
    AbstractWebhookPayloadEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    AbstractWebhookPayloadEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    AbstractWebhookPayloadEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    AbstractWebhookPayloadEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    AbstractWebhookPayloadEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    AbstractWebhookPayloadEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
    AbstractWebhookPayloadEventNameEnum["BOUNCE"] = "BOUNCE";
    AbstractWebhookPayloadEventNameEnum["BOUNCE_RECIPIENT"] = "BOUNCE_RECIPIENT";
})(AbstractWebhookPayloadEventNameEnum = exports.AbstractWebhookPayloadEventNameEnum || (exports.AbstractWebhookPayloadEventNameEnum = {}));
function AbstractWebhookPayloadFromJSON(json) {
    return AbstractWebhookPayloadFromJSONTyped(json, false);
}
exports.AbstractWebhookPayloadFromJSON = AbstractWebhookPayloadFromJSON;
function AbstractWebhookPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        eventName: json['eventName'],
        messageId: json['messageId'],
        webhookId: json['webhookId'],
        webhookName: !(0, runtime_1.exists)(json, 'webhookName') ? undefined : json['webhookName'],
    };
}
exports.AbstractWebhookPayloadFromJSONTyped = AbstractWebhookPayloadFromJSONTyped;
function AbstractWebhookPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        eventName: value.eventName,
        messageId: value.messageId,
        webhookId: value.webhookId,
        webhookName: value.webhookName,
    };
}
exports.AbstractWebhookPayloadToJSON = AbstractWebhookPayloadToJSON;
