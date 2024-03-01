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
exports.SearchInboxesOptionsToJSON = exports.SearchInboxesOptionsFromJSONTyped = exports.SearchInboxesOptionsFromJSON = exports.SearchInboxesOptionsInboxFunctionEnum = exports.SearchInboxesOptionsInboxTypeEnum = exports.SearchInboxesOptionsSortDirectionEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var SearchInboxesOptionsSortDirectionEnum;
(function (SearchInboxesOptionsSortDirectionEnum) {
    SearchInboxesOptionsSortDirectionEnum["ASC"] = "ASC";
    SearchInboxesOptionsSortDirectionEnum["DESC"] = "DESC";
})(SearchInboxesOptionsSortDirectionEnum = exports.SearchInboxesOptionsSortDirectionEnum || (exports.SearchInboxesOptionsSortDirectionEnum = {}));
/**
 * @export
 * @enum {string}
 */
var SearchInboxesOptionsInboxTypeEnum;
(function (SearchInboxesOptionsInboxTypeEnum) {
    SearchInboxesOptionsInboxTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    SearchInboxesOptionsInboxTypeEnum["SMTP_INBOX"] = "SMTP_INBOX";
})(SearchInboxesOptionsInboxTypeEnum = exports.SearchInboxesOptionsInboxTypeEnum || (exports.SearchInboxesOptionsInboxTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var SearchInboxesOptionsInboxFunctionEnum;
(function (SearchInboxesOptionsInboxFunctionEnum) {
    SearchInboxesOptionsInboxFunctionEnum["ALIAS"] = "ALIAS";
    SearchInboxesOptionsInboxFunctionEnum["THREAD"] = "THREAD";
    SearchInboxesOptionsInboxFunctionEnum["CATCH_ALL"] = "CATCH_ALL";
    SearchInboxesOptionsInboxFunctionEnum["CONNECTOR"] = "CONNECTOR";
})(SearchInboxesOptionsInboxFunctionEnum = exports.SearchInboxesOptionsInboxFunctionEnum || (exports.SearchInboxesOptionsInboxFunctionEnum = {}));
function SearchInboxesOptionsFromJSON(json) {
    return SearchInboxesOptionsFromJSONTyped(json, false);
}
exports.SearchInboxesOptionsFromJSON = SearchInboxesOptionsFromJSON;
function SearchInboxesOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pageIndex: !(0, runtime_1.exists)(json, 'pageIndex') ? undefined : json['pageIndex'],
        pageSize: !(0, runtime_1.exists)(json, 'pageSize') ? undefined : json['pageSize'],
        sortDirection: !(0, runtime_1.exists)(json, 'sortDirection')
            ? undefined
            : json['sortDirection'],
        favourite: !(0, runtime_1.exists)(json, 'favourite') ? undefined : json['favourite'],
        search: !(0, runtime_1.exists)(json, 'search') ? undefined : json['search'],
        tag: !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
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
        inboxType: !(0, runtime_1.exists)(json, 'inboxType') ? undefined : json['inboxType'],
        inboxFunction: !(0, runtime_1.exists)(json, 'inboxFunction')
            ? undefined
            : json['inboxFunction'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
    };
}
exports.SearchInboxesOptionsFromJSONTyped = SearchInboxesOptionsFromJSONTyped;
function SearchInboxesOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pageIndex: value.pageIndex,
        pageSize: value.pageSize,
        sortDirection: value.sortDirection,
        favourite: value.favourite,
        search: value.search,
        tag: value.tag,
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
        inboxType: value.inboxType,
        inboxFunction: value.inboxFunction,
        domainId: value.domainId,
    };
}
exports.SearchInboxesOptionsToJSON = SearchInboxesOptionsToJSON;
