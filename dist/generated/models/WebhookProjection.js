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
exports.WebhookProjectionToJSON = exports.WebhookProjectionFromJSONTyped = exports.WebhookProjectionFromJSON = exports.WebhookProjectionEventNameEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var WebhookProjectionEventNameEnum;
(function (WebhookProjectionEventNameEnum) {
    WebhookProjectionEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    WebhookProjectionEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    WebhookProjectionEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    WebhookProjectionEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    WebhookProjectionEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    WebhookProjectionEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
    WebhookProjectionEventNameEnum["DELIVERY_STATUS"] = "DELIVERY_STATUS";
    WebhookProjectionEventNameEnum["BOUNCE"] = "BOUNCE";
    WebhookProjectionEventNameEnum["BOUNCE_RECIPIENT"] = "BOUNCE_RECIPIENT";
    WebhookProjectionEventNameEnum["NEW_SMS"] = "NEW_SMS";
})(WebhookProjectionEventNameEnum = exports.WebhookProjectionEventNameEnum || (exports.WebhookProjectionEventNameEnum = {}));
function WebhookProjectionFromJSON(json) {
    return WebhookProjectionFromJSONTyped(json, false);
}
exports.WebhookProjectionFromJSON = WebhookProjectionFromJSON;
function WebhookProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
        url: json['url'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        eventName: !(0, runtime_1.exists)(json, 'eventName') ? undefined : json['eventName'],
        phoneNumberId: !(0, runtime_1.exists)(json, 'phoneNumberId')
            ? undefined
            : json['phoneNumberId'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        id: json['id'],
    };
}
exports.WebhookProjectionFromJSONTyped = WebhookProjectionFromJSONTyped;
function WebhookProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
        url: value.url,
        inboxId: value.inboxId,
        eventName: value.eventName,
        phoneNumberId: value.phoneNumberId,
        name: value.name,
        id: value.id,
    };
}
exports.WebhookProjectionToJSON = WebhookProjectionToJSON;
