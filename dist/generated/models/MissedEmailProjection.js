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
exports.MissedEmailProjectionToJSON = exports.MissedEmailProjectionFromJSONTyped = exports.MissedEmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function MissedEmailProjectionFromJSON(json) {
    return MissedEmailProjectionFromJSONTyped(json, false);
}
exports.MissedEmailProjectionFromJSON = MissedEmailProjectionFromJSON;
function MissedEmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.MissedEmailProjectionFromJSONTyped = MissedEmailProjectionFromJSONTyped;
function MissedEmailProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        from: value.from,
        subject: value.subject,
        userId: value.userId,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.MissedEmailProjectionToJSON = MissedEmailProjectionToJSON;
