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
exports.ImapServerSearchOptionsToJSON = exports.ImapServerSearchOptionsFromJSONTyped = exports.ImapServerSearchOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function ImapServerSearchOptionsFromJSON(json) {
    return ImapServerSearchOptionsFromJSONTyped(json, false);
}
exports.ImapServerSearchOptionsFromJSON = ImapServerSearchOptionsFromJSON;
function ImapServerSearchOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        seqNum: !(0, runtime_1.exists)(json, 'seqNum') ? undefined : json['seqNum'],
        uid: !(0, runtime_1.exists)(json, 'uid') ? undefined : json['uid'],
        since: !(0, runtime_1.exists)(json, 'since')
            ? undefined
            : json['since'] === null
                ? null
                : new Date(json['since']),
        before: !(0, runtime_1.exists)(json, 'before')
            ? undefined
            : json['before'] === null
                ? null
                : new Date(json['before']),
        sentSince: !(0, runtime_1.exists)(json, 'sentSince')
            ? undefined
            : json['sentSince'] === null
                ? null
                : new Date(json['sentSince']),
        sentBefore: !(0, runtime_1.exists)(json, 'sentBefore')
            ? undefined
            : json['sentBefore'] === null
                ? null
                : new Date(json['sentBefore']),
        header: !(0, runtime_1.exists)(json, 'header') ? undefined : json['header'],
        body: !(0, runtime_1.exists)(json, 'body') ? undefined : json['body'],
        text: !(0, runtime_1.exists)(json, 'text') ? undefined : json['text'],
        withFlags: !(0, runtime_1.exists)(json, 'withFlags') ? undefined : json['withFlags'],
        withoutFlags: !(0, runtime_1.exists)(json, 'withoutFlags')
            ? undefined
            : json['withoutFlags'],
    };
}
exports.ImapServerSearchOptionsFromJSONTyped = ImapServerSearchOptionsFromJSONTyped;
function ImapServerSearchOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        seqNum: value.seqNum,
        uid: value.uid,
        since: value.since === undefined
            ? undefined
            : value.since === null
                ? null
                : value.since.toISOString(),
        before: value.before === undefined
            ? undefined
            : value.before === null
                ? null
                : value.before.toISOString(),
        sentSince: value.sentSince === undefined
            ? undefined
            : value.sentSince === null
                ? null
                : value.sentSince.toISOString(),
        sentBefore: value.sentBefore === undefined
            ? undefined
            : value.sentBefore === null
                ? null
                : value.sentBefore.toISOString(),
        header: value.header,
        body: value.body,
        text: value.text,
        withFlags: value.withFlags,
        withoutFlags: value.withoutFlags,
    };
}
exports.ImapServerSearchOptionsToJSON = ImapServerSearchOptionsToJSON;
