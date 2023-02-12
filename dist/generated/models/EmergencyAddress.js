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
exports.EmergencyAddressToJSON = exports.EmergencyAddressFromJSONTyped = exports.EmergencyAddressFromJSON = exports.EmergencyAddressPhoneCountryEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var EmergencyAddressPhoneCountryEnum;
(function (EmergencyAddressPhoneCountryEnum) {
    EmergencyAddressPhoneCountryEnum["US"] = "US";
    EmergencyAddressPhoneCountryEnum["GB"] = "GB";
    EmergencyAddressPhoneCountryEnum["AU"] = "AU";
    EmergencyAddressPhoneCountryEnum["DE"] = "DE";
    EmergencyAddressPhoneCountryEnum["CA"] = "CA";
    EmergencyAddressPhoneCountryEnum["HK"] = "HK";
    EmergencyAddressPhoneCountryEnum["IT"] = "IT";
    EmergencyAddressPhoneCountryEnum["SE"] = "SE";
    EmergencyAddressPhoneCountryEnum["NL"] = "NL";
    EmergencyAddressPhoneCountryEnum["CH"] = "CH";
    EmergencyAddressPhoneCountryEnum["EE"] = "EE";
    EmergencyAddressPhoneCountryEnum["PL"] = "PL";
    EmergencyAddressPhoneCountryEnum["BE"] = "BE";
})(EmergencyAddressPhoneCountryEnum = exports.EmergencyAddressPhoneCountryEnum || (exports.EmergencyAddressPhoneCountryEnum = {}));
function EmergencyAddressFromJSON(json) {
    return EmergencyAddressFromJSONTyped(json, false);
}
exports.EmergencyAddressFromJSON = EmergencyAddressFromJSON;
function EmergencyAddressFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        sid: json['sid'],
        userId: json['userId'],
        displayName: json['displayName'],
        customerName: json['customerName'],
        address1: json['address1'],
        city: json['city'],
        region: json['region'],
        postalCode: json['postalCode'],
        phoneCountry: json['phoneCountry'],
        accountSid: json['accountSid'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
    };
}
exports.EmergencyAddressFromJSONTyped = EmergencyAddressFromJSONTyped;
function EmergencyAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        sid: value.sid,
        userId: value.userId,
        displayName: value.displayName,
        customerName: value.customerName,
        address1: value.address1,
        city: value.city,
        region: value.region,
        postalCode: value.postalCode,
        phoneCountry: value.phoneCountry,
        accountSid: value.accountSid,
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
    };
}
exports.EmergencyAddressToJSON = EmergencyAddressToJSON;
