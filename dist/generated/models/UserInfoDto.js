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
exports.UserInfoDtoToJSON = exports.UserInfoDtoFromJSONTyped = exports.UserInfoDtoFromJSON = exports.UserInfoDtoAccountTypeEnum = exports.UserInfoDtoSubscriptionTypeEnum = exports.UserInfoDtoAccountStateEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var UserInfoDtoAccountStateEnum;
(function (UserInfoDtoAccountStateEnum) {
    UserInfoDtoAccountStateEnum["FROZEN"] = "FROZEN";
    UserInfoDtoAccountStateEnum["ACTIVE"] = "ACTIVE";
})(UserInfoDtoAccountStateEnum = exports.UserInfoDtoAccountStateEnum || (exports.UserInfoDtoAccountStateEnum = {}));
/**
 * @export
 * @enum {string}
 */
var UserInfoDtoSubscriptionTypeEnum;
(function (UserInfoDtoSubscriptionTypeEnum) {
    UserInfoDtoSubscriptionTypeEnum["PRO_MONTHLY"] = "PRO_MONTHLY";
    UserInfoDtoSubscriptionTypeEnum["STARTER"] = "STARTER";
    UserInfoDtoSubscriptionTypeEnum["PRO"] = "PRO";
    UserInfoDtoSubscriptionTypeEnum["TEAM"] = "TEAM";
    UserInfoDtoSubscriptionTypeEnum["ENTERPRISE"] = "ENTERPRISE";
})(UserInfoDtoSubscriptionTypeEnum = exports.UserInfoDtoSubscriptionTypeEnum || (exports.UserInfoDtoSubscriptionTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var UserInfoDtoAccountTypeEnum;
(function (UserInfoDtoAccountTypeEnum) {
    UserInfoDtoAccountTypeEnum["SOLO"] = "SOLO";
    UserInfoDtoAccountTypeEnum["CHILD_SOLO"] = "CHILD_SOLO";
    UserInfoDtoAccountTypeEnum["CHILD_TEAM"] = "CHILD_TEAM";
    UserInfoDtoAccountTypeEnum["CHILD_ADMIN"] = "CHILD_ADMIN";
})(UserInfoDtoAccountTypeEnum = exports.UserInfoDtoAccountTypeEnum || (exports.UserInfoDtoAccountTypeEnum = {}));
function UserInfoDtoFromJSON(json) {
    return UserInfoDtoFromJSONTyped(json, false);
}
exports.UserInfoDtoFromJSON = UserInfoDtoFromJSON;
function UserInfoDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        emailAddress: json['emailAddress'],
        accountState: json['accountState'],
        subscriptionType: !(0, runtime_1.exists)(json, 'subscriptionType')
            ? undefined
            : json['subscriptionType'],
        accountType: json['accountType'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.UserInfoDtoFromJSONTyped = UserInfoDtoFromJSONTyped;
function UserInfoDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        emailAddress: value.emailAddress,
        accountState: value.accountState,
        subscriptionType: value.subscriptionType,
        accountType: value.accountType,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.UserInfoDtoToJSON = UserInfoDtoToJSON;
