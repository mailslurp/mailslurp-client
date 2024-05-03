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
exports.ImapAccessDetailsToJSON = exports.ImapAccessDetailsFromJSONTyped = exports.ImapAccessDetailsFromJSON = void 0;
function ImapAccessDetailsFromJSON(json) {
    return ImapAccessDetailsFromJSONTyped(json, false);
}
exports.ImapAccessDetailsFromJSON = ImapAccessDetailsFromJSON;
function ImapAccessDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        imapServerHost: json['imapServerHost'],
        imapServerPort: json['imapServerPort'],
        imapUsername: json['imapUsername'],
        imapPassword: json['imapPassword'],
        imapMailbox: json['imapMailbox'],
    };
}
exports.ImapAccessDetailsFromJSONTyped = ImapAccessDetailsFromJSONTyped;
function ImapAccessDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        imapServerHost: value.imapServerHost,
        imapServerPort: value.imapServerPort,
        imapUsername: value.imapUsername,
        imapPassword: value.imapPassword,
        imapMailbox: value.imapMailbox,
    };
}
exports.ImapAccessDetailsToJSON = ImapAccessDetailsToJSON;