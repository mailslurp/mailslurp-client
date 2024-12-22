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
exports.instanceOfInboxRulesetTestOptions = instanceOfInboxRulesetTestOptions;
exports.InboxRulesetTestOptionsFromJSON = InboxRulesetTestOptionsFromJSON;
exports.InboxRulesetTestOptionsFromJSONTyped = InboxRulesetTestOptionsFromJSONTyped;
exports.InboxRulesetTestOptionsToJSON = InboxRulesetTestOptionsToJSON;
exports.InboxRulesetTestOptionsToJSONTyped = InboxRulesetTestOptionsToJSONTyped;
/**
 * Check if a given object implements the InboxRulesetTestOptions interface.
 */
function instanceOfInboxRulesetTestOptions(value) {
    if (!('testTarget' in value) || value['testTarget'] === undefined)
        return false;
    return true;
}
function InboxRulesetTestOptionsFromJSON(json) {
    return InboxRulesetTestOptionsFromJSONTyped(json, false);
}
function InboxRulesetTestOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'testTarget': json['testTarget'],
    };
}
function InboxRulesetTestOptionsToJSON(json) {
    return InboxRulesetTestOptionsToJSONTyped(json, false);
}
function InboxRulesetTestOptionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'testTarget': value['testTarget'],
    };
}
