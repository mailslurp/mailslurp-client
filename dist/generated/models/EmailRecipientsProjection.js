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
exports.instanceOfEmailRecipientsProjection = instanceOfEmailRecipientsProjection;
exports.EmailRecipientsProjectionFromJSON = EmailRecipientsProjectionFromJSON;
exports.EmailRecipientsProjectionFromJSONTyped = EmailRecipientsProjectionFromJSONTyped;
exports.EmailRecipientsProjectionToJSON = EmailRecipientsProjectionToJSON;
exports.EmailRecipientsProjectionToJSONTyped = EmailRecipientsProjectionToJSONTyped;
var RecipientProjection_1 = require("./RecipientProjection");
/**
 * Check if a given object implements the EmailRecipientsProjection interface.
 */
function instanceOfEmailRecipientsProjection(value) {
    return true;
}
function EmailRecipientsProjectionFromJSON(json) {
    return EmailRecipientsProjectionFromJSONTyped(json, false);
}
function EmailRecipientsProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'to': json['to'] == null ? undefined : (json['to'].map(RecipientProjection_1.RecipientProjectionFromJSON)),
        'cc': json['cc'] == null ? undefined : (json['cc'].map(RecipientProjection_1.RecipientProjectionFromJSON)),
        'bcc': json['bcc'] == null ? undefined : (json['bcc'].map(RecipientProjection_1.RecipientProjectionFromJSON)),
    };
}
function EmailRecipientsProjectionToJSON(json) {
    return EmailRecipientsProjectionToJSONTyped(json, false);
}
function EmailRecipientsProjectionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'to': value['to'] == null ? undefined : (value['to'].map(RecipientProjection_1.RecipientProjectionToJSON)),
        'cc': value['cc'] == null ? undefined : (value['cc'].map(RecipientProjection_1.RecipientProjectionToJSON)),
        'bcc': value['bcc'] == null ? undefined : (value['bcc'].map(RecipientProjection_1.RecipientProjectionToJSON)),
    };
}
