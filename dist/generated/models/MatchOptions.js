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
exports.instanceOfMatchOptions = instanceOfMatchOptions;
exports.MatchOptionsFromJSON = MatchOptionsFromJSON;
exports.MatchOptionsFromJSONTyped = MatchOptionsFromJSONTyped;
exports.MatchOptionsToJSON = MatchOptionsToJSON;
exports.MatchOptionsToJSONTyped = MatchOptionsToJSONTyped;
var MatchOption_1 = require("./MatchOption");
var ConditionOption_1 = require("./ConditionOption");
/**
 * Check if a given object implements the MatchOptions interface.
 */
function instanceOfMatchOptions(value) {
    return true;
}
function MatchOptionsFromJSON(json) {
    return MatchOptionsFromJSONTyped(json, false);
}
function MatchOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'matches': json['matches'] == null ? undefined : (json['matches'].map(MatchOption_1.MatchOptionFromJSON)),
        'conditions': json['conditions'] == null ? undefined : (json['conditions'].map(ConditionOption_1.ConditionOptionFromJSON)),
    };
}
function MatchOptionsToJSON(json) {
    return MatchOptionsToJSONTyped(json, false);
}
function MatchOptionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'matches': value['matches'] == null ? undefined : (value['matches'].map(MatchOption_1.MatchOptionToJSON)),
        'conditions': value['conditions'] == null ? undefined : (value['conditions'].map(ConditionOption_1.ConditionOptionToJSON)),
    };
}
