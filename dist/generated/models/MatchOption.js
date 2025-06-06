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
exports.MatchOptionToJSON = exports.MatchOptionFromJSONTyped = exports.MatchOptionFromJSON = exports.MatchOptionShouldEnum = exports.MatchOptionFieldEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var MatchOptionFieldEnum;
(function (MatchOptionFieldEnum) {
    MatchOptionFieldEnum["SUBJECT"] = "SUBJECT";
    MatchOptionFieldEnum["TO"] = "TO";
    MatchOptionFieldEnum["BCC"] = "BCC";
    MatchOptionFieldEnum["CC"] = "CC";
    MatchOptionFieldEnum["FROM"] = "FROM";
    MatchOptionFieldEnum["HEADERS"] = "HEADERS";
})(MatchOptionFieldEnum = exports.MatchOptionFieldEnum || (exports.MatchOptionFieldEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MatchOptionShouldEnum;
(function (MatchOptionShouldEnum) {
    MatchOptionShouldEnum["MATCH"] = "MATCH";
    MatchOptionShouldEnum["CONTAIN"] = "CONTAIN";
    MatchOptionShouldEnum["EQUAL"] = "EQUAL";
})(MatchOptionShouldEnum = exports.MatchOptionShouldEnum || (exports.MatchOptionShouldEnum = {}));
function MatchOptionFromJSON(json) {
    return MatchOptionFromJSONTyped(json, false);
}
exports.MatchOptionFromJSON = MatchOptionFromJSON;
function MatchOptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        field: json['field'],
        should: json['should'],
        value: json['value'],
    };
}
exports.MatchOptionFromJSONTyped = MatchOptionFromJSONTyped;
function MatchOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        field: value.field,
        should: value.should,
        value: value.value,
    };
}
exports.MatchOptionToJSON = MatchOptionToJSON;
