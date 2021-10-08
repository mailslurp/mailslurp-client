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
exports.WebhookDtoToJSON = exports.WebhookDtoFromJSONTyped = exports.WebhookDtoFromJSON = exports.WebhookDtoMethodEnum = exports.WebhookDtoEventNameEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var WebhookDtoEventNameEnum;
(function (WebhookDtoEventNameEnum) {
    WebhookDtoEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    WebhookDtoEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    WebhookDtoEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    WebhookDtoEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    WebhookDtoEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    WebhookDtoEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
})(WebhookDtoEventNameEnum = exports.WebhookDtoEventNameEnum || (exports.WebhookDtoEventNameEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WebhookDtoMethodEnum;
(function (WebhookDtoMethodEnum) {
    WebhookDtoMethodEnum["GET"] = "GET";
    WebhookDtoMethodEnum["HEAD"] = "HEAD";
    WebhookDtoMethodEnum["POST"] = "POST";
    WebhookDtoMethodEnum["PUT"] = "PUT";
    WebhookDtoMethodEnum["PATCH"] = "PATCH";
    WebhookDtoMethodEnum["DELETE"] = "DELETE";
    WebhookDtoMethodEnum["OPTIONS"] = "OPTIONS";
    WebhookDtoMethodEnum["TRACE"] = "TRACE";
})(WebhookDtoMethodEnum = exports.WebhookDtoMethodEnum || (exports.WebhookDtoMethodEnum = {}));
function WebhookDtoFromJSON(json) {
    return WebhookDtoFromJSONTyped(json, false);
}
exports.WebhookDtoFromJSON = WebhookDtoFromJSON;
function WebhookDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        basicAuth: !(0, runtime_1.exists)(json, 'basicAuth') ? undefined : json['basicAuth'],
        createdAt: !(0, runtime_1.exists)(json, 'createdAt')
            ? undefined
            : new Date(json['createdAt']),
        eventName: !(0, runtime_1.exists)(json, 'eventName') ? undefined : json['eventName'],
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        method: !(0, runtime_1.exists)(json, 'method') ? undefined : json['method'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        payloadJsonSchema: !(0, runtime_1.exists)(json, 'payloadJsonSchema')
            ? undefined
            : json['payloadJsonSchema'],
        updatedAt: new Date(json['updatedAt']),
        url: !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
    };
}
exports.WebhookDtoFromJSONTyped = WebhookDtoFromJSONTyped;
function WebhookDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        basicAuth: value.basicAuth,
        createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
        eventName: value.eventName,
        id: value.id,
        inboxId: value.inboxId,
        method: value.method,
        name: value.name,
        payloadJsonSchema: value.payloadJsonSchema,
        updatedAt: value.updatedAt.toISOString(),
        url: value.url,
        userId: value.userId,
    };
}
exports.WebhookDtoToJSON = WebhookDtoToJSON;