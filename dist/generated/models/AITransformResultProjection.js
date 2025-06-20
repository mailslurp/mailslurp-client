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
exports.AITransformResultProjectionToJSON = exports.AITransformResultProjectionFromJSONTyped = exports.AITransformResultProjectionFromJSON = exports.AITransformResultProjectionEntityTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var AITransformResultProjectionEntityTypeEnum;
(function (AITransformResultProjectionEntityTypeEnum) {
    AITransformResultProjectionEntityTypeEnum["INBOX"] = "INBOX";
    AITransformResultProjectionEntityTypeEnum["PHONE"] = "PHONE";
})(AITransformResultProjectionEntityTypeEnum = exports.AITransformResultProjectionEntityTypeEnum || (exports.AITransformResultProjectionEntityTypeEnum = {}));
function AITransformResultProjectionFromJSON(json) {
    return AITransformResultProjectionFromJSONTyped(json, false);
}
exports.AITransformResultProjectionFromJSON = AITransformResultProjectionFromJSON;
function AITransformResultProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        userId: json['userId'],
        aiTransformId: json['aiTransformId'],
        entityId: json['entityId'],
        entityType: json['entityType'],
        aiTransformMappingId: json['aiTransformMappingId'],
        value: !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
        id: json['id'],
    };
}
exports.AITransformResultProjectionFromJSONTyped = AITransformResultProjectionFromJSONTyped;
function AITransformResultProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        userId: value.userId,
        aiTransformId: value.aiTransformId,
        entityId: value.entityId,
        entityType: value.entityType,
        aiTransformMappingId: value.aiTransformMappingId,
        value: value.value,
        id: value.id,
    };
}
exports.AITransformResultProjectionToJSON = AITransformResultProjectionToJSON;
