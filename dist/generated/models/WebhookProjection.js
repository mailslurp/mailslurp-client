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
exports.WebhookProjectionToJSON = exports.WebhookProjectionFromJSONTyped = exports.WebhookProjectionFromJSON = exports.WebhookProjectionHealthStatusEnum = exports.WebhookProjectionEventNameEnum = void 0;
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
    WebhookProjectionEventNameEnum["NEW_GUEST_USER"] = "NEW_GUEST_USER";
})(WebhookProjectionEventNameEnum = exports.WebhookProjectionEventNameEnum || (exports.WebhookProjectionEventNameEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WebhookProjectionHealthStatusEnum;
(function (WebhookProjectionHealthStatusEnum) {
    WebhookProjectionHealthStatusEnum["HEALTHY"] = "HEALTHY";
    WebhookProjectionHealthStatusEnum["UNHEALTHY"] = "UNHEALTHY";
})(WebhookProjectionHealthStatusEnum = exports.WebhookProjectionHealthStatusEnum || (exports.WebhookProjectionHealthStatusEnum = {}));
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
        userId: json['userId'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        eventName: !(0, runtime_1.exists)(json, 'eventName') ? undefined : json['eventName'],
        healthStatus: !(0, runtime_1.exists)(json, 'healthStatus')
            ? undefined
            : json['healthStatus'],
        phoneNumberId: !(0, runtime_1.exists)(json, 'phoneNumberId')
            ? undefined
            : json['phoneNumberId'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        id: json['id'],
        username: !(0, runtime_1.exists)(json, 'username') ? undefined : json['username'],
        password: !(0, runtime_1.exists)(json, 'password') ? undefined : json['password'],
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
        userId: value.userId,
        inboxId: value.inboxId,
        eventName: value.eventName,
        healthStatus: value.healthStatus,
        phoneNumberId: value.phoneNumberId,
        name: value.name,
        id: value.id,
        username: value.username,
        password: value.password,
    };
}
exports.WebhookProjectionToJSON = WebhookProjectionToJSON;
