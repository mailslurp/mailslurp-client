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
exports.PhoneNumberProjectionToJSON = exports.PhoneNumberProjectionFromJSONTyped = exports.PhoneNumberProjectionFromJSON = exports.PhoneNumberProjectionPhoneCountryEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var PhoneNumberProjectionPhoneCountryEnum;
(function (PhoneNumberProjectionPhoneCountryEnum) {
    PhoneNumberProjectionPhoneCountryEnum["US"] = "US";
    PhoneNumberProjectionPhoneCountryEnum["GB"] = "GB";
})(PhoneNumberProjectionPhoneCountryEnum = exports.PhoneNumberProjectionPhoneCountryEnum || (exports.PhoneNumberProjectionPhoneCountryEnum = {}));
function PhoneNumberProjectionFromJSON(json) {
    return PhoneNumberProjectionFromJSONTyped(json, false);
}
exports.PhoneNumberProjectionFromJSON = PhoneNumberProjectionFromJSON;
function PhoneNumberProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: json['userId'],
        phoneCountry: json['phoneCountry'],
        phoneNumber: json['phoneNumber'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.PhoneNumberProjectionFromJSONTyped = PhoneNumberProjectionFromJSONTyped;
function PhoneNumberProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        phoneCountry: value.phoneCountry,
        phoneNumber: value.phoneNumber,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.PhoneNumberProjectionToJSON = PhoneNumberProjectionToJSON;
