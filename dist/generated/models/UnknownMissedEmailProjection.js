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
exports.UnknownMissedEmailProjectionToJSON = exports.UnknownMissedEmailProjectionFromJSONTyped = exports.UnknownMissedEmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function UnknownMissedEmailProjectionFromJSON(json) {
    return UnknownMissedEmailProjectionFromJSONTyped(json, false);
}
exports.UnknownMissedEmailProjectionFromJSON = UnknownMissedEmailProjectionFromJSON;
function UnknownMissedEmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        to: !(0, runtime_1.exists)(json, 'to') ? undefined : json['to'],
        createdAt: new Date(json['createdAt']),
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        id: json['id'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
    };
}
exports.UnknownMissedEmailProjectionFromJSONTyped = UnknownMissedEmailProjectionFromJSONTyped;
function UnknownMissedEmailProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        to: value.to,
        createdAt: value.createdAt.toISOString(),
        subject: value.subject,
        id: value.id,
        from: value.from,
    };
}
exports.UnknownMissedEmailProjectionToJSON = UnknownMissedEmailProjectionToJSON;
