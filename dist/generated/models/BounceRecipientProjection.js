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
exports.BounceRecipientProjectionToJSON = exports.BounceRecipientProjectionFromJSONTyped = exports.BounceRecipientProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function BounceRecipientProjectionFromJSON(json) {
    return BounceRecipientProjectionFromJSONTyped(json, false);
}
exports.BounceRecipientProjectionFromJSON = BounceRecipientProjectionFromJSON;
function BounceRecipientProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        sentEmailId: !(0, runtime_1.exists)(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        createdAt: new Date(json['createdAt']),
        recipient: json['recipient'],
        bounceType: !(0, runtime_1.exists)(json, 'bounceType') ? undefined : json['bounceType'],
        action: !(0, runtime_1.exists)(json, 'action') ? undefined : json['action'],
        status: !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
    };
}
exports.BounceRecipientProjectionFromJSONTyped = BounceRecipientProjectionFromJSONTyped;
function BounceRecipientProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        sentEmailId: value.sentEmailId,
        createdAt: value.createdAt.toISOString(),
        recipient: value.recipient,
        bounceType: value.bounceType,
        action: value.action,
        status: value.status,
    };
}
exports.BounceRecipientProjectionToJSON = BounceRecipientProjectionToJSON;
