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
exports.VerifyWebhookSignatureResultsToJSON = exports.VerifyWebhookSignatureResultsFromJSONTyped = exports.VerifyWebhookSignatureResultsFromJSON = void 0;
function VerifyWebhookSignatureResultsFromJSON(json) {
    return VerifyWebhookSignatureResultsFromJSONTyped(json, false);
}
exports.VerifyWebhookSignatureResultsFromJSON = VerifyWebhookSignatureResultsFromJSON;
function VerifyWebhookSignatureResultsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        isValid: json['isValid'],
    };
}
exports.VerifyWebhookSignatureResultsFromJSONTyped = VerifyWebhookSignatureResultsFromJSONTyped;
function VerifyWebhookSignatureResultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        isValid: value.isValid,
    };
}
exports.VerifyWebhookSignatureResultsToJSON = VerifyWebhookSignatureResultsToJSON;
