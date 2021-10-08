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
exports.WebhookEmailOpenedPayloadToJSON = exports.WebhookEmailOpenedPayloadFromJSONTyped = exports.WebhookEmailOpenedPayloadFromJSON = exports.WebhookEmailOpenedPayloadEventNameEnum = void 0;
var runtime_1 = require("../runtime");
/**
* @export
* @enum {string}
*/
var WebhookEmailOpenedPayloadEventNameEnum;
(function (WebhookEmailOpenedPayloadEventNameEnum) {
    WebhookEmailOpenedPayloadEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    WebhookEmailOpenedPayloadEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    WebhookEmailOpenedPayloadEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    WebhookEmailOpenedPayloadEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    WebhookEmailOpenedPayloadEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    WebhookEmailOpenedPayloadEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
})(WebhookEmailOpenedPayloadEventNameEnum = exports.WebhookEmailOpenedPayloadEventNameEnum || (exports.WebhookEmailOpenedPayloadEventNameEnum = {}));
function WebhookEmailOpenedPayloadFromJSON(json) {
    return WebhookEmailOpenedPayloadFromJSONTyped(json, false);
}
exports.WebhookEmailOpenedPayloadFromJSON = WebhookEmailOpenedPayloadFromJSON;
function WebhookEmailOpenedPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'eventName': !(0, runtime_1.exists)(json, 'eventName') ? undefined : json['eventName'],
        'inboxId': !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        'messageId': !(0, runtime_1.exists)(json, 'messageId') ? undefined : json['messageId'],
        'pixelId': !(0, runtime_1.exists)(json, 'pixelId') ? undefined : json['pixelId'],
        'recipient': !(0, runtime_1.exists)(json, 'recipient') ? undefined : json['recipient'],
        'sentEmailId': !(0, runtime_1.exists)(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        'webhookId': !(0, runtime_1.exists)(json, 'webhookId') ? undefined : json['webhookId'],
        'webhookName': !(0, runtime_1.exists)(json, 'webhookName') ? undefined : json['webhookName'],
    };
}
exports.WebhookEmailOpenedPayloadFromJSONTyped = WebhookEmailOpenedPayloadFromJSONTyped;
function WebhookEmailOpenedPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'eventName': value.eventName,
        'inboxId': value.inboxId,
        'messageId': value.messageId,
        'pixelId': value.pixelId,
        'recipient': value.recipient,
        'sentEmailId': value.sentEmailId,
        'webhookId': value.webhookId,
        'webhookName': value.webhookName,
    };
}
exports.WebhookEmailOpenedPayloadToJSON = WebhookEmailOpenedPayloadToJSON;
