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
exports.BounceRecipientToJSON = exports.BounceRecipientFromJSONTyped = exports.BounceRecipientFromJSON = void 0;
var runtime_1 = require("../runtime");
function BounceRecipientFromJSON(json) {
    return BounceRecipientFromJSONTyped(json, false);
}
exports.BounceRecipientFromJSON = BounceRecipientFromJSON;
function BounceRecipientFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        recipient: json['recipient'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
    };
}
exports.BounceRecipientFromJSONTyped = BounceRecipientFromJSONTyped;
function BounceRecipientToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        recipient: value.recipient,
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
    };
}
exports.BounceRecipientToJSON = BounceRecipientToJSON;
