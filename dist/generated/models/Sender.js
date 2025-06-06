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
exports.SenderToJSON = exports.SenderFromJSONTyped = exports.SenderFromJSON = void 0;
var runtime_1 = require("../runtime");
function SenderFromJSON(json) {
    return SenderFromJSONTyped(json, false);
}
exports.SenderFromJSON = SenderFromJSON;
function SenderFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        rawValue: json['rawValue'],
        emailAddress: json['emailAddress'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.SenderFromJSONTyped = SenderFromJSONTyped;
function SenderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        rawValue: value.rawValue,
        emailAddress: value.emailAddress,
        name: value.name,
    };
}
exports.SenderToJSON = SenderToJSON;
