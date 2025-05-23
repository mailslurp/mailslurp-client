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
exports.ConnectorEventDtoToJSON = exports.ConnectorEventDtoFromJSONTyped = exports.ConnectorEventDtoFromJSON = exports.ConnectorEventDtoEventTypeEnum = exports.ConnectorEventDtoStatusEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var ConnectorEventDtoStatusEnum;
(function (ConnectorEventDtoStatusEnum) {
    ConnectorEventDtoStatusEnum["SUCCESS"] = "SUCCESS";
    ConnectorEventDtoStatusEnum["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ConnectorEventDtoStatusEnum["SUBSCRIPTION_ERROR"] = "SUBSCRIPTION_ERROR";
    ConnectorEventDtoStatusEnum["CONNECTION_ERROR"] = "CONNECTION_ERROR";
    ConnectorEventDtoStatusEnum["NOT_FOUND"] = "NOT_FOUND";
})(ConnectorEventDtoStatusEnum = exports.ConnectorEventDtoStatusEnum || (exports.ConnectorEventDtoStatusEnum = {}));
/**
 * @export
 * @enum {string}
 */
var ConnectorEventDtoEventTypeEnum;
(function (ConnectorEventDtoEventTypeEnum) {
    ConnectorEventDtoEventTypeEnum["SEND"] = "SEND";
    ConnectorEventDtoEventTypeEnum["SYNC"] = "SYNC";
})(ConnectorEventDtoEventTypeEnum = exports.ConnectorEventDtoEventTypeEnum || (exports.ConnectorEventDtoEventTypeEnum = {}));
function ConnectorEventDtoFromJSON(json) {
    return ConnectorEventDtoFromJSONTyped(json, false);
}
exports.ConnectorEventDtoFromJSON = ConnectorEventDtoFromJSON;
function ConnectorEventDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        connectorId: json['connectorId'],
        status: json['status'],
        eventType: json['eventType'],
        size: json['size'],
        message: !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        logs: !(0, runtime_1.exists)(json, 'logs') ? undefined : json['logs'],
        seen: !(0, runtime_1.exists)(json, 'seen') ? undefined : json['seen'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.ConnectorEventDtoFromJSONTyped = ConnectorEventDtoFromJSONTyped;
function ConnectorEventDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        connectorId: value.connectorId,
        status: value.status,
        eventType: value.eventType,
        size: value.size,
        message: value.message,
        logs: value.logs,
        seen: value.seen,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.ConnectorEventDtoToJSON = ConnectorEventDtoToJSON;
