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
exports.TestNewInboxRulesetOptionsToJSON = exports.TestNewInboxRulesetOptionsFromJSONTyped = exports.TestNewInboxRulesetOptionsFromJSON = void 0;
var _1 = require("./");
function TestNewInboxRulesetOptionsFromJSON(json) {
    return TestNewInboxRulesetOptionsFromJSONTyped(json, false);
}
exports.TestNewInboxRulesetOptionsFromJSON = TestNewInboxRulesetOptionsFromJSON;
function TestNewInboxRulesetOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'inboxRulesetTestOptions': (0, _1.InboxRulesetTestOptionsFromJSON)(json['inboxRulesetTestOptions']),
        'createInboxRulesetOptions': (0, _1.CreateInboxRulesetOptionsFromJSON)(json['createInboxRulesetOptions']),
    };
}
exports.TestNewInboxRulesetOptionsFromJSONTyped = TestNewInboxRulesetOptionsFromJSONTyped;
function TestNewInboxRulesetOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'inboxRulesetTestOptions': (0, _1.InboxRulesetTestOptionsToJSON)(value.inboxRulesetTestOptions),
        'createInboxRulesetOptions': (0, _1.CreateInboxRulesetOptionsToJSON)(value.createInboxRulesetOptions),
    };
}
exports.TestNewInboxRulesetOptionsToJSON = TestNewInboxRulesetOptionsToJSON;
