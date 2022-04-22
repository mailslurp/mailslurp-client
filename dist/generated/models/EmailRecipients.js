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
exports.EmailRecipientsToJSON = exports.EmailRecipientsFromJSONTyped = exports.EmailRecipientsFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function EmailRecipientsFromJSON(json) {
    return EmailRecipientsFromJSONTyped(json, false);
}
exports.EmailRecipientsFromJSON = EmailRecipientsFromJSON;
function EmailRecipientsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        to: !(0, runtime_1.exists)(json, 'to')
            ? undefined
            : json['to'].map(_1.RecipientFromJSON),
        cc: !(0, runtime_1.exists)(json, 'cc')
            ? undefined
            : json['cc'].map(_1.RecipientFromJSON),
        bcc: !(0, runtime_1.exists)(json, 'bcc')
            ? undefined
            : json['bcc'].map(_1.RecipientFromJSON),
    };
}
exports.EmailRecipientsFromJSONTyped = EmailRecipientsFromJSONTyped;
function EmailRecipientsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        to: value.to === undefined
            ? undefined
            : value.to.map(_1.RecipientToJSON),
        cc: value.cc === undefined
            ? undefined
            : value.cc.map(_1.RecipientToJSON),
        bcc: value.bcc === undefined
            ? undefined
            : value.bcc.map(_1.RecipientToJSON),
    };
}
exports.EmailRecipientsToJSON = EmailRecipientsToJSON;
