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
exports.instanceOfImapMailboxStatus = instanceOfImapMailboxStatus;
exports.ImapMailboxStatusFromJSON = ImapMailboxStatusFromJSON;
exports.ImapMailboxStatusFromJSONTyped = ImapMailboxStatusFromJSONTyped;
exports.ImapMailboxStatusToJSON = ImapMailboxStatusToJSON;
exports.ImapMailboxStatusToJSONTyped = ImapMailboxStatusToJSONTyped;
/**
 * Check if a given object implements the ImapMailboxStatus interface.
 */
function instanceOfImapMailboxStatus(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('readOnly' in value) || value['readOnly'] === undefined)
        return false;
    if (!('items' in value) || value['items'] === undefined)
        return false;
    if (!('flags' in value) || value['flags'] === undefined)
        return false;
    if (!('permanentFlags' in value) || value['permanentFlags'] === undefined)
        return false;
    if (!('unseenSeqNum' in value) || value['unseenSeqNum'] === undefined)
        return false;
    if (!('messages' in value) || value['messages'] === undefined)
        return false;
    if (!('recent' in value) || value['recent'] === undefined)
        return false;
    if (!('unseen' in value) || value['unseen'] === undefined)
        return false;
    if (!('uidNext' in value) || value['uidNext'] === undefined)
        return false;
    if (!('uidValidity' in value) || value['uidValidity'] === undefined)
        return false;
    return true;
}
function ImapMailboxStatusFromJSON(json) {
    return ImapMailboxStatusFromJSONTyped(json, false);
}
function ImapMailboxStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'readOnly': json['readOnly'],
        'items': json['items'],
        'flags': json['flags'] == null ? null : json['flags'],
        'permanentFlags': json['permanentFlags'] == null ? null : json['permanentFlags'],
        'unseenSeqNum': json['unseenSeqNum'],
        'messages': json['messages'],
        'recent': json['recent'],
        'unseen': json['unseen'],
        'uidNext': json['uidNext'],
        'uidValidity': json['uidValidity'],
        'appendLimit': json['appendLimit'] == null ? undefined : json['appendLimit'],
    };
}
function ImapMailboxStatusToJSON(json) {
    return ImapMailboxStatusToJSONTyped(json, false);
}
function ImapMailboxStatusToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'readOnly': value['readOnly'],
        'items': value['items'],
        'flags': value['flags'],
        'permanentFlags': value['permanentFlags'],
        'unseenSeqNum': value['unseenSeqNum'],
        'messages': value['messages'],
        'recent': value['recent'],
        'unseen': value['unseen'],
        'uidNext': value['uidNext'],
        'uidValidity': value['uidValidity'],
        'appendLimit': value['appendLimit'],
    };
}
