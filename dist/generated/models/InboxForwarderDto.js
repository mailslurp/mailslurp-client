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
exports.InboxForwarderDtoToJSON = exports.InboxForwarderDtoFromJSONTyped = exports.InboxForwarderDtoFromJSON = exports.InboxForwarderDtoFieldEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var InboxForwarderDtoFieldEnum;
(function (InboxForwarderDtoFieldEnum) {
    InboxForwarderDtoFieldEnum["RECIPIENTS"] = "RECIPIENTS";
    InboxForwarderDtoFieldEnum["SENDER"] = "SENDER";
    InboxForwarderDtoFieldEnum["SUBJECT"] = "SUBJECT";
    InboxForwarderDtoFieldEnum["ATTACHMENTS"] = "ATTACHMENTS";
})(InboxForwarderDtoFieldEnum = exports.InboxForwarderDtoFieldEnum || (exports.InboxForwarderDtoFieldEnum = {}));
function InboxForwarderDtoFromJSON(json) {
    return InboxForwarderDtoFromJSONTyped(json, false);
}
exports.InboxForwarderDtoFromJSON = InboxForwarderDtoFromJSON;
function InboxForwarderDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        field: json['field'],
        forwardToRecipients: json['forwardToRecipients'],
        id: json['id'],
        inboxId: json['inboxId'],
        match: json['match'],
    };
}
exports.InboxForwarderDtoFromJSONTyped = InboxForwarderDtoFromJSONTyped;
function InboxForwarderDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        field: value.field,
        forwardToRecipients: value.forwardToRecipients,
        id: value.id,
        inboxId: value.inboxId,
        match: value.match,
    };
}
exports.InboxForwarderDtoToJSON = InboxForwarderDtoToJSON;
