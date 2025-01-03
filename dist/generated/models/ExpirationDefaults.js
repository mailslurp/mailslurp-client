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
exports.ExpirationDefaultsToJSON = exports.ExpirationDefaultsFromJSONTyped = exports.ExpirationDefaultsFromJSON = void 0;
var runtime_1 = require("../runtime");
function ExpirationDefaultsFromJSON(json) {
    return ExpirationDefaultsFromJSONTyped(json, false);
}
exports.ExpirationDefaultsFromJSON = ExpirationDefaultsFromJSON;
function ExpirationDefaultsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        defaultExpirationMillis: !(0, runtime_1.exists)(json, 'defaultExpirationMillis')
            ? undefined
            : json['defaultExpirationMillis'],
        maxExpirationMillis: !(0, runtime_1.exists)(json, 'maxExpirationMillis')
            ? undefined
            : json['maxExpirationMillis'],
        defaultExpiresAt: !(0, runtime_1.exists)(json, 'defaultExpiresAt')
            ? undefined
            : json['defaultExpiresAt'] === null
                ? null
                : new Date(json['defaultExpiresAt']),
        canPermanentInbox: json['canPermanentInbox'],
        nextInboxAllowsPermanent: json['nextInboxAllowsPermanent'],
    };
}
exports.ExpirationDefaultsFromJSONTyped = ExpirationDefaultsFromJSONTyped;
function ExpirationDefaultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        defaultExpirationMillis: value.defaultExpirationMillis,
        maxExpirationMillis: value.maxExpirationMillis,
        defaultExpiresAt: value.defaultExpiresAt === undefined
            ? undefined
            : value.defaultExpiresAt === null
                ? null
                : value.defaultExpiresAt.toISOString(),
        canPermanentInbox: value.canPermanentInbox,
        nextInboxAllowsPermanent: value.nextInboxAllowsPermanent,
    };
}
exports.ExpirationDefaultsToJSON = ExpirationDefaultsToJSON;
