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
exports.BouncedRecipientDtoToJSON = exports.BouncedRecipientDtoFromJSONTyped = exports.BouncedRecipientDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
function BouncedRecipientDtoFromJSON(json) {
    return BouncedRecipientDtoFromJSONTyped(json, false);
}
exports.BouncedRecipientDtoFromJSON = BouncedRecipientDtoFromJSON;
function BouncedRecipientDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        sentEmailId: !(0, runtime_1.exists)(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        recipient: json['recipient'],
        diagnosticCode: !(0, runtime_1.exists)(json, 'diagnosticCode')
            ? undefined
            : json['diagnosticCode'],
        action: !(0, runtime_1.exists)(json, 'action') ? undefined : json['action'],
        bounceType: !(0, runtime_1.exists)(json, 'bounceType') ? undefined : json['bounceType'],
        status: !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.BouncedRecipientDtoFromJSONTyped = BouncedRecipientDtoFromJSONTyped;
function BouncedRecipientDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        sentEmailId: value.sentEmailId,
        recipient: value.recipient,
        diagnosticCode: value.diagnosticCode,
        action: value.action,
        bounceType: value.bounceType,
        status: value.status,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.BouncedRecipientDtoToJSON = BouncedRecipientDtoToJSON;
