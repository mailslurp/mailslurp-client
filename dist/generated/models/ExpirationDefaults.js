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
exports.instanceOfExpirationDefaults = instanceOfExpirationDefaults;
exports.ExpirationDefaultsFromJSON = ExpirationDefaultsFromJSON;
exports.ExpirationDefaultsFromJSONTyped = ExpirationDefaultsFromJSONTyped;
exports.ExpirationDefaultsToJSON = ExpirationDefaultsToJSON;
exports.ExpirationDefaultsToJSONTyped = ExpirationDefaultsToJSONTyped;
/**
 * Check if a given object implements the ExpirationDefaults interface.
 */
function instanceOfExpirationDefaults(value) {
    if (!('canPermanentInbox' in value) || value['canPermanentInbox'] === undefined)
        return false;
    if (!('nextInboxAllowsPermanent' in value) || value['nextInboxAllowsPermanent'] === undefined)
        return false;
    return true;
}
function ExpirationDefaultsFromJSON(json) {
    return ExpirationDefaultsFromJSONTyped(json, false);
}
function ExpirationDefaultsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'defaultExpirationMillis': json['defaultExpirationMillis'] == null ? undefined : json['defaultExpirationMillis'],
        'maxExpirationMillis': json['maxExpirationMillis'] == null ? undefined : json['maxExpirationMillis'],
        'defaultExpiresAt': json['defaultExpiresAt'] == null ? undefined : (new Date(json['defaultExpiresAt'])),
        'canPermanentInbox': json['canPermanentInbox'],
        'nextInboxAllowsPermanent': json['nextInboxAllowsPermanent'],
    };
}
function ExpirationDefaultsToJSON(json) {
    return ExpirationDefaultsToJSONTyped(json, false);
}
function ExpirationDefaultsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'defaultExpirationMillis': value['defaultExpirationMillis'],
        'maxExpirationMillis': value['maxExpirationMillis'],
        'defaultExpiresAt': value['defaultExpiresAt'] == null ? undefined : (value['defaultExpiresAt'].toISOString()),
        'canPermanentInbox': value['canPermanentInbox'],
        'nextInboxAllowsPermanent': value['nextInboxAllowsPermanent'],
    };
}
