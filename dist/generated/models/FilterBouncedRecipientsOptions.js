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
exports.FilterBouncedRecipientsOptionsToJSON = exports.FilterBouncedRecipientsOptionsFromJSONTyped = exports.FilterBouncedRecipientsOptionsFromJSON = void 0;
function FilterBouncedRecipientsOptionsFromJSON(json) {
    return FilterBouncedRecipientsOptionsFromJSONTyped(json, false);
}
exports.FilterBouncedRecipientsOptionsFromJSON = FilterBouncedRecipientsOptionsFromJSON;
function FilterBouncedRecipientsOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailRecipients: json['emailRecipients'],
    };
}
exports.FilterBouncedRecipientsOptionsFromJSONTyped = FilterBouncedRecipientsOptionsFromJSONTyped;
function FilterBouncedRecipientsOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        emailRecipients: value.emailRecipients,
    };
}
exports.FilterBouncedRecipientsOptionsToJSON = FilterBouncedRecipientsOptionsToJSON;
