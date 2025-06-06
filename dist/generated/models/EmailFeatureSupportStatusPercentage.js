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
exports.EmailFeatureSupportStatusPercentageToJSON = exports.EmailFeatureSupportStatusPercentageFromJSONTyped = exports.EmailFeatureSupportStatusPercentageFromJSON = exports.EmailFeatureSupportStatusPercentageStatusEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var EmailFeatureSupportStatusPercentageStatusEnum;
(function (EmailFeatureSupportStatusPercentageStatusEnum) {
    EmailFeatureSupportStatusPercentageStatusEnum["SUPPORTED"] = "SUPPORTED";
    EmailFeatureSupportStatusPercentageStatusEnum["PARTIAL"] = "PARTIAL";
    EmailFeatureSupportStatusPercentageStatusEnum["NOT_SUPPORTED"] = "NOT_SUPPORTED";
    EmailFeatureSupportStatusPercentageStatusEnum["UNKNOWN"] = "UNKNOWN";
})(EmailFeatureSupportStatusPercentageStatusEnum = exports.EmailFeatureSupportStatusPercentageStatusEnum || (exports.EmailFeatureSupportStatusPercentageStatusEnum = {}));
function EmailFeatureSupportStatusPercentageFromJSON(json) {
    return EmailFeatureSupportStatusPercentageFromJSONTyped(json, false);
}
exports.EmailFeatureSupportStatusPercentageFromJSON = EmailFeatureSupportStatusPercentageFromJSON;
function EmailFeatureSupportStatusPercentageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        status: json['status'],
        percentage: json['percentage'],
    };
}
exports.EmailFeatureSupportStatusPercentageFromJSONTyped = EmailFeatureSupportStatusPercentageFromJSONTyped;
function EmailFeatureSupportStatusPercentageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        status: value.status,
        percentage: value.percentage,
    };
}
exports.EmailFeatureSupportStatusPercentageToJSON = EmailFeatureSupportStatusPercentageToJSON;
