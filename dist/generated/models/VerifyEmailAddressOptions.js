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
exports.VerifyEmailAddressOptionsToJSON = exports.VerifyEmailAddressOptionsFromJSONTyped = exports.VerifyEmailAddressOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function VerifyEmailAddressOptionsFromJSON(json) {
    return VerifyEmailAddressOptionsFromJSONTyped(json, false);
}
exports.VerifyEmailAddressOptionsFromJSON = VerifyEmailAddressOptionsFromJSON;
function VerifyEmailAddressOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        mailServerDomain: !(0, runtime_1.exists)(json, 'mailServerDomain')
            ? undefined
            : json['mailServerDomain'],
        emailAddress: json['emailAddress'],
        senderEmailAddress: !(0, runtime_1.exists)(json, 'senderEmailAddress')
            ? undefined
            : json['senderEmailAddress'],
        port: !(0, runtime_1.exists)(json, 'port') ? undefined : json['port'],
    };
}
exports.VerifyEmailAddressOptionsFromJSONTyped = VerifyEmailAddressOptionsFromJSONTyped;
function VerifyEmailAddressOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        mailServerDomain: value.mailServerDomain,
        emailAddress: value.emailAddress,
        senderEmailAddress: value.senderEmailAddress,
        port: value.port,
    };
}
exports.VerifyEmailAddressOptionsToJSON = VerifyEmailAddressOptionsToJSON;
