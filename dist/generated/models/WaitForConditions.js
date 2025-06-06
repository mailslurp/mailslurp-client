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
exports.WaitForConditionsToJSON = exports.WaitForConditionsFromJSONTyped = exports.WaitForConditionsFromJSON = exports.WaitForConditionsSortDirectionEnum = exports.WaitForConditionsCountTypeEnum = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
/**
 * @export
 * @enum {string}
 */
var WaitForConditionsCountTypeEnum;
(function (WaitForConditionsCountTypeEnum) {
    WaitForConditionsCountTypeEnum["EXACTLY"] = "EXACTLY";
    WaitForConditionsCountTypeEnum["ATLEAST"] = "ATLEAST";
})(WaitForConditionsCountTypeEnum = exports.WaitForConditionsCountTypeEnum || (exports.WaitForConditionsCountTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WaitForConditionsSortDirectionEnum;
(function (WaitForConditionsSortDirectionEnum) {
    WaitForConditionsSortDirectionEnum["ASC"] = "ASC";
    WaitForConditionsSortDirectionEnum["DESC"] = "DESC";
})(WaitForConditionsSortDirectionEnum = exports.WaitForConditionsSortDirectionEnum || (exports.WaitForConditionsSortDirectionEnum = {}));
function WaitForConditionsFromJSON(json) {
    return WaitForConditionsFromJSONTyped(json, false);
}
exports.WaitForConditionsFromJSON = WaitForConditionsFromJSON;
function WaitForConditionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        inboxId: json['inboxId'],
        count: !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        delayTimeout: !(0, runtime_1.exists)(json, 'delayTimeout')
            ? undefined
            : json['delayTimeout'],
        timeout: json['timeout'],
        unreadOnly: !(0, runtime_1.exists)(json, 'unreadOnly') ? undefined : json['unreadOnly'],
        countType: !(0, runtime_1.exists)(json, 'countType') ? undefined : json['countType'],
        matches: !(0, runtime_1.exists)(json, 'matches')
            ? undefined
            : json['matches'] === null
                ? null
                : json['matches'].map(_1.MatchOptionFromJSON),
        sortDirection: !(0, runtime_1.exists)(json, 'sortDirection')
            ? undefined
            : json['sortDirection'],
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
    };
}
exports.WaitForConditionsFromJSONTyped = WaitForConditionsFromJSONTyped;
function WaitForConditionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        inboxId: value.inboxId,
        count: value.count,
        delayTimeout: value.delayTimeout,
        timeout: value.timeout,
        unreadOnly: value.unreadOnly,
        countType: value.countType,
        matches: value.matches === undefined
            ? undefined
            : value.matches === null
                ? null
                : value.matches.map(_1.MatchOptionToJSON),
        sortDirection: value.sortDirection,
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
    };
}
exports.WaitForConditionsToJSON = WaitForConditionsToJSON;
