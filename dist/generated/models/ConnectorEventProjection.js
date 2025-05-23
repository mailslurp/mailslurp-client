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
exports.ConnectorEventProjectionToJSON = exports.ConnectorEventProjectionFromJSONTyped = exports.ConnectorEventProjectionFromJSON = exports.ConnectorEventProjectionStatusEnum = exports.ConnectorEventProjectionEventTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var ConnectorEventProjectionEventTypeEnum;
(function (ConnectorEventProjectionEventTypeEnum) {
    ConnectorEventProjectionEventTypeEnum["SEND"] = "SEND";
    ConnectorEventProjectionEventTypeEnum["SYNC"] = "SYNC";
})(ConnectorEventProjectionEventTypeEnum = exports.ConnectorEventProjectionEventTypeEnum || (exports.ConnectorEventProjectionEventTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var ConnectorEventProjectionStatusEnum;
(function (ConnectorEventProjectionStatusEnum) {
    ConnectorEventProjectionStatusEnum["SUCCESS"] = "SUCCESS";
    ConnectorEventProjectionStatusEnum["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ConnectorEventProjectionStatusEnum["SUBSCRIPTION_ERROR"] = "SUBSCRIPTION_ERROR";
    ConnectorEventProjectionStatusEnum["CONNECTION_ERROR"] = "CONNECTION_ERROR";
    ConnectorEventProjectionStatusEnum["NOT_FOUND"] = "NOT_FOUND";
})(ConnectorEventProjectionStatusEnum = exports.ConnectorEventProjectionStatusEnum || (exports.ConnectorEventProjectionStatusEnum = {}));
function ConnectorEventProjectionFromJSON(json) {
    return ConnectorEventProjectionFromJSONTyped(json, false);
}
exports.ConnectorEventProjectionFromJSON = ConnectorEventProjectionFromJSON;
function ConnectorEventProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        eventType: json['eventType'],
        createdAt: new Date(json['createdAt']),
        connectorId: json['connectorId'],
        seen: !(0, runtime_1.exists)(json, 'seen') ? undefined : json['seen'],
        message: !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        size: json['size'],
        status: json['status'],
    };
}
exports.ConnectorEventProjectionFromJSONTyped = ConnectorEventProjectionFromJSONTyped;
function ConnectorEventProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        eventType: value.eventType,
        createdAt: value.createdAt.toISOString(),
        connectorId: value.connectorId,
        seen: value.seen,
        message: value.message,
        id: value.id,
        size: value.size,
        status: value.status,
    };
}
exports.ConnectorEventProjectionToJSON = ConnectorEventProjectionToJSON;
