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
exports.TrackingPixelProjectionToJSON = exports.TrackingPixelProjectionFromJSONTyped = exports.TrackingPixelProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function TrackingPixelProjectionFromJSON(json) {
    return TrackingPixelProjectionFromJSONTyped(json, false);
}
exports.TrackingPixelProjectionFromJSON = TrackingPixelProjectionFromJSON;
function TrackingPixelProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        id: json['id'],
        userId: json['userId'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        sentEmailId: !(0, runtime_1.exists)(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        createdAt: new Date(json['createdAt']),
        seen: json['seen'],
        recipient: !(0, runtime_1.exists)(json, 'recipient') ? undefined : json['recipient'],
        seenAt: !(0, runtime_1.exists)(json, 'seenAt') ? undefined : new Date(json['seenAt']),
    };
}
exports.TrackingPixelProjectionFromJSONTyped = TrackingPixelProjectionFromJSONTyped;
function TrackingPixelProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        id: value.id,
        userId: value.userId,
        inboxId: value.inboxId,
        sentEmailId: value.sentEmailId,
        createdAt: value.createdAt.toISOString(),
        seen: value.seen,
        recipient: value.recipient,
        seenAt: value.seenAt === undefined ? undefined : value.seenAt.toISOString(),
    };
}
exports.TrackingPixelProjectionToJSON = TrackingPixelProjectionToJSON;
