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
exports.InboxRulesetDtoToJSON = exports.InboxRulesetDtoFromJSONTyped = exports.InboxRulesetDtoFromJSON = exports.InboxRulesetDtoHandlerEnum = exports.InboxRulesetDtoActionEnum = exports.InboxRulesetDtoScopeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var InboxRulesetDtoScopeEnum;
(function (InboxRulesetDtoScopeEnum) {
    InboxRulesetDtoScopeEnum["RECEIVING_EMAILS"] = "RECEIVING_EMAILS";
    InboxRulesetDtoScopeEnum["SENDING_EMAILS"] = "SENDING_EMAILS";
})(InboxRulesetDtoScopeEnum = exports.InboxRulesetDtoScopeEnum || (exports.InboxRulesetDtoScopeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var InboxRulesetDtoActionEnum;
(function (InboxRulesetDtoActionEnum) {
    InboxRulesetDtoActionEnum["BLOCK"] = "BLOCK";
    InboxRulesetDtoActionEnum["ALLOW"] = "ALLOW";
    InboxRulesetDtoActionEnum["FILTER_REMOVE"] = "FILTER_REMOVE";
})(InboxRulesetDtoActionEnum = exports.InboxRulesetDtoActionEnum || (exports.InboxRulesetDtoActionEnum = {}));
/**
 * @export
 * @enum {string}
 */
var InboxRulesetDtoHandlerEnum;
(function (InboxRulesetDtoHandlerEnum) {
    InboxRulesetDtoHandlerEnum["EXCEPTION"] = "EXCEPTION";
})(InboxRulesetDtoHandlerEnum = exports.InboxRulesetDtoHandlerEnum || (exports.InboxRulesetDtoHandlerEnum = {}));
function InboxRulesetDtoFromJSON(json) {
    return InboxRulesetDtoFromJSONTyped(json, false);
}
exports.InboxRulesetDtoFromJSON = InboxRulesetDtoFromJSON;
function InboxRulesetDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        scope: json['scope'],
        action: json['action'],
        target: json['target'],
        handler: json['handler'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.InboxRulesetDtoFromJSONTyped = InboxRulesetDtoFromJSONTyped;
function InboxRulesetDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        inboxId: value.inboxId,
        scope: value.scope,
        action: value.action,
        target: value.target,
        handler: value.handler,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.InboxRulesetDtoToJSON = InboxRulesetDtoToJSON;
