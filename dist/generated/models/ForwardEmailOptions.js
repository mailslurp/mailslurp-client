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
exports.ForwardEmailOptionsToJSON = exports.ForwardEmailOptionsFromJSONTyped = exports.ForwardEmailOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function ForwardEmailOptionsFromJSON(json) {
    return ForwardEmailOptionsFromJSONTyped(json, false);
}
exports.ForwardEmailOptionsFromJSON = ForwardEmailOptionsFromJSON;
function ForwardEmailOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        to: json['to'],
        subject: !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        cc: !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        bcc: !(0, runtime_1.exists)(json, 'bcc') ? undefined : json['bcc'],
        from: !(0, runtime_1.exists)(json, 'from') ? undefined : json['from'],
        useInboxName: !(0, runtime_1.exists)(json, 'useInboxName')
            ? undefined
            : json['useInboxName'],
        filterBouncedRecipients: !(0, runtime_1.exists)(json, 'filterBouncedRecipients')
            ? undefined
            : json['filterBouncedRecipients'],
    };
}
exports.ForwardEmailOptionsFromJSONTyped = ForwardEmailOptionsFromJSONTyped;
function ForwardEmailOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        to: value.to,
        subject: value.subject,
        cc: value.cc,
        bcc: value.bcc,
        from: value.from,
        useInboxName: value.useInboxName,
        filterBouncedRecipients: value.filterBouncedRecipients,
    };
}
exports.ForwardEmailOptionsToJSON = ForwardEmailOptionsToJSON;
