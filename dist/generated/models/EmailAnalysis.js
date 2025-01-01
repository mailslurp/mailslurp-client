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
exports.EmailAnalysisToJSON = exports.EmailAnalysisFromJSONTyped = exports.EmailAnalysisFromJSON = void 0;
var runtime_1 = require("../runtime");
function EmailAnalysisFromJSON(json) {
    return EmailAnalysisFromJSONTyped(json, false);
}
exports.EmailAnalysisFromJSON = EmailAnalysisFromJSON;
function EmailAnalysisFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        spamVerdict: !(0, runtime_1.exists)(json, 'spamVerdict') ? undefined : json['spamVerdict'],
        virusVerdict: !(0, runtime_1.exists)(json, 'virusVerdict')
            ? undefined
            : json['virusVerdict'],
        spfVerdict: !(0, runtime_1.exists)(json, 'spfVerdict') ? undefined : json['spfVerdict'],
        dkimVerdict: !(0, runtime_1.exists)(json, 'dkimVerdict') ? undefined : json['dkimVerdict'],
        dmarcVerdict: !(0, runtime_1.exists)(json, 'dmarcVerdict')
            ? undefined
            : json['dmarcVerdict'],
    };
}
exports.EmailAnalysisFromJSONTyped = EmailAnalysisFromJSONTyped;
function EmailAnalysisToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        spamVerdict: value.spamVerdict,
        virusVerdict: value.virusVerdict,
        spfVerdict: value.spfVerdict,
        dkimVerdict: value.dkimVerdict,
        dmarcVerdict: value.dmarcVerdict,
    };
}
exports.EmailAnalysisToJSON = EmailAnalysisToJSON;
