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
exports.SearchEmailsOptionsToJSON = exports.SearchEmailsOptionsFromJSONTyped = exports.SearchEmailsOptionsFromJSON = exports.SearchEmailsOptionsSortDirectionEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var SearchEmailsOptionsSortDirectionEnum;
(function (SearchEmailsOptionsSortDirectionEnum) {
    SearchEmailsOptionsSortDirectionEnum["ASC"] = "ASC";
    SearchEmailsOptionsSortDirectionEnum["DESC"] = "DESC";
})(SearchEmailsOptionsSortDirectionEnum = exports.SearchEmailsOptionsSortDirectionEnum || (exports.SearchEmailsOptionsSortDirectionEnum = {}));
function SearchEmailsOptionsFromJSON(json) {
    return SearchEmailsOptionsFromJSONTyped(json, false);
}
exports.SearchEmailsOptionsFromJSON = SearchEmailsOptionsFromJSON;
function SearchEmailsOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        inboxIds: !(0, runtime_1.exists)(json, 'inboxIds') ? undefined : json['inboxIds'],
        pageIndex: !(0, runtime_1.exists)(json, 'pageIndex') ? undefined : json['pageIndex'],
        pageSize: !(0, runtime_1.exists)(json, 'pageSize') ? undefined : json['pageSize'],
        sortDirection: !(0, runtime_1.exists)(json, 'sortDirection')
            ? undefined
            : json['sortDirection'],
        unreadOnly: !(0, runtime_1.exists)(json, 'unreadOnly') ? undefined : json['unreadOnly'],
        searchFilter: !(0, runtime_1.exists)(json, 'searchFilter')
            ? undefined
            : json['searchFilter'],
        since: !(0, runtime_1.exists)(json, 'since') ? undefined : new Date(json['since']),
        before: !(0, runtime_1.exists)(json, 'before') ? undefined : new Date(json['before']),
    };
}
exports.SearchEmailsOptionsFromJSONTyped = SearchEmailsOptionsFromJSONTyped;
function SearchEmailsOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        inboxIds: value.inboxIds,
        pageIndex: value.pageIndex,
        pageSize: value.pageSize,
        sortDirection: value.sortDirection,
        unreadOnly: value.unreadOnly,
        searchFilter: value.searchFilter,
        since: value.since === undefined ? undefined : value.since.toISOString(),
        before: value.before === undefined ? undefined : value.before.toISOString(),
    };
}
exports.SearchEmailsOptionsToJSON = SearchEmailsOptionsToJSON;
