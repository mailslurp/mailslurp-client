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
exports.ComplaintToJSON = exports.ComplaintFromJSONTyped = exports.ComplaintFromJSON = void 0;
var runtime_1 = require("../runtime");
function ComplaintFromJSON(json) {
    return ComplaintFromJSONTyped(json, false);
}
exports.ComplaintFromJSON = ComplaintFromJSON;
function ComplaintFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        eventType: !(0, runtime_1.exists)(json, 'eventType') ? undefined : json['eventType'],
        mailSource: !(0, runtime_1.exists)(json, 'mailSource') ? undefined : json['mailSource'],
        mailMessageId: !(0, runtime_1.exists)(json, 'mailMessageId')
            ? undefined
            : json['mailMessageId'],
        complaintRecipient: json['complaintRecipient'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
    };
}
exports.ComplaintFromJSONTyped = ComplaintFromJSONTyped;
function ComplaintToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        eventType: value.eventType,
        mailSource: value.mailSource,
        mailMessageId: value.mailMessageId,
        complaintRecipient: value.complaintRecipient,
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
    };
}
exports.ComplaintToJSON = ComplaintToJSON;
