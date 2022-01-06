"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookResultDtoToJSON = exports.WebhookResultDtoFromJSONTyped = exports.WebhookResultDtoFromJSON = exports.WebhookResultDtoResultTypeEnum = exports.WebhookResultDtoWebhookEventEnum = exports.WebhookResultDtoHttpMethodEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var WebhookResultDtoHttpMethodEnum;
(function (WebhookResultDtoHttpMethodEnum) {
    WebhookResultDtoHttpMethodEnum["GET"] = "GET";
    WebhookResultDtoHttpMethodEnum["HEAD"] = "HEAD";
    WebhookResultDtoHttpMethodEnum["POST"] = "POST";
    WebhookResultDtoHttpMethodEnum["PUT"] = "PUT";
    WebhookResultDtoHttpMethodEnum["PATCH"] = "PATCH";
    WebhookResultDtoHttpMethodEnum["DELETE"] = "DELETE";
    WebhookResultDtoHttpMethodEnum["OPTIONS"] = "OPTIONS";
    WebhookResultDtoHttpMethodEnum["TRACE"] = "TRACE";
})(WebhookResultDtoHttpMethodEnum = exports.WebhookResultDtoHttpMethodEnum || (exports.WebhookResultDtoHttpMethodEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WebhookResultDtoWebhookEventEnum;
(function (WebhookResultDtoWebhookEventEnum) {
    WebhookResultDtoWebhookEventEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    WebhookResultDtoWebhookEventEnum["NEW_EMAIL"] = "NEW_EMAIL";
    WebhookResultDtoWebhookEventEnum["NEW_CONTACT"] = "NEW_CONTACT";
    WebhookResultDtoWebhookEventEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    WebhookResultDtoWebhookEventEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    WebhookResultDtoWebhookEventEnum["EMAIL_READ"] = "EMAIL_READ";
})(WebhookResultDtoWebhookEventEnum = exports.WebhookResultDtoWebhookEventEnum || (exports.WebhookResultDtoWebhookEventEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WebhookResultDtoResultTypeEnum;
(function (WebhookResultDtoResultTypeEnum) {
    WebhookResultDtoResultTypeEnum["BAD_RESPONSE"] = "BAD_RESPONSE";
    WebhookResultDtoResultTypeEnum["EXCEPTION"] = "EXCEPTION";
    WebhookResultDtoResultTypeEnum["SUCCESS"] = "SUCCESS";
})(WebhookResultDtoResultTypeEnum = exports.WebhookResultDtoResultTypeEnum || (exports.WebhookResultDtoResultTypeEnum = {}));
function WebhookResultDtoFromJSON(json) {
    return WebhookResultDtoFromJSONTyped(json, false);
}
exports.WebhookResultDtoFromJSON = WebhookResultDtoFromJSON;
function WebhookResultDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        userId: json['userId'],
        inboxId: json['inboxId'],
        webhookId: json['webhookId'],
        webhookUrl: json['webhookUrl'],
        messageId: json['messageId'],
        redriveId: !(0, runtime_1.exists)(json, 'redriveId') ? undefined : json['redriveId'],
        httpMethod: json['httpMethod'],
        webhookEvent: json['webhookEvent'],
        responseStatus: !(0, runtime_1.exists)(json, 'responseStatus')
            ? undefined
            : json['responseStatus'],
        responseTimeMillis: json['responseTimeMillis'],
        responseBodyExtract: !(0, runtime_1.exists)(json, 'responseBodyExtract')
            ? undefined
            : json['responseBodyExtract'],
        resultType: !(0, runtime_1.exists)(json, 'resultType') ? undefined : json['resultType'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
        seen: !(0, runtime_1.exists)(json, 'seen') ? undefined : json['seen'],
    };
}
exports.WebhookResultDtoFromJSONTyped = WebhookResultDtoFromJSONTyped;
function WebhookResultDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        inboxId: value.inboxId,
        webhookId: value.webhookId,
        webhookUrl: value.webhookUrl,
        messageId: value.messageId,
        redriveId: value.redriveId,
        httpMethod: value.httpMethod,
        webhookEvent: value.webhookEvent,
        responseStatus: value.responseStatus,
        responseTimeMillis: value.responseTimeMillis,
        responseBodyExtract: value.responseBodyExtract,
        resultType: value.resultType,
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
        seen: value.seen,
    };
}
exports.WebhookResultDtoToJSON = WebhookResultDtoToJSON;
