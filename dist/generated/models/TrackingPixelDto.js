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
exports.TrackingPixelDtoToJSON = exports.TrackingPixelDtoFromJSONTyped = exports.TrackingPixelDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
function TrackingPixelDtoFromJSON(json) {
    return TrackingPixelDtoFromJSONTyped(json, false);
}
exports.TrackingPixelDtoFromJSON = TrackingPixelDtoFromJSON;
function TrackingPixelDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        html: json['html'],
        id: json['id'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        recipient: !(0, runtime_1.exists)(json, 'recipient') ? undefined : json['recipient'],
        seen: json['seen'],
        seenAt: !(0, runtime_1.exists)(json, 'seenAt') ? undefined : new Date(json['seenAt']),
        sentEmailId: !(0, runtime_1.exists)(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        url: json['url'],
    };
}
exports.TrackingPixelDtoFromJSONTyped = TrackingPixelDtoFromJSONTyped;
function TrackingPixelDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        html: value.html,
        id: value.id,
        inboxId: value.inboxId,
        recipient: value.recipient,
        seen: value.seen,
        seenAt: value.seenAt === undefined ? undefined : value.seenAt.toISOString(),
        sentEmailId: value.sentEmailId,
        url: value.url,
    };
}
exports.TrackingPixelDtoToJSON = TrackingPixelDtoToJSON;
