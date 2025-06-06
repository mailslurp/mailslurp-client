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
exports.EmergencyAddressDtoToJSON = exports.EmergencyAddressDtoFromJSONTyped = exports.EmergencyAddressDtoFromJSON = exports.EmergencyAddressDtoPhoneCountryEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var EmergencyAddressDtoPhoneCountryEnum;
(function (EmergencyAddressDtoPhoneCountryEnum) {
    EmergencyAddressDtoPhoneCountryEnum["US"] = "US";
    EmergencyAddressDtoPhoneCountryEnum["GB"] = "GB";
    EmergencyAddressDtoPhoneCountryEnum["AU"] = "AU";
    EmergencyAddressDtoPhoneCountryEnum["CA"] = "CA";
    EmergencyAddressDtoPhoneCountryEnum["EE"] = "EE";
    EmergencyAddressDtoPhoneCountryEnum["HK"] = "HK";
    EmergencyAddressDtoPhoneCountryEnum["PL"] = "PL";
    EmergencyAddressDtoPhoneCountryEnum["CH"] = "CH";
    EmergencyAddressDtoPhoneCountryEnum["PT"] = "PT";
    EmergencyAddressDtoPhoneCountryEnum["NL"] = "NL";
    EmergencyAddressDtoPhoneCountryEnum["IL"] = "IL";
    EmergencyAddressDtoPhoneCountryEnum["SE"] = "SE";
})(EmergencyAddressDtoPhoneCountryEnum = exports.EmergencyAddressDtoPhoneCountryEnum || (exports.EmergencyAddressDtoPhoneCountryEnum = {}));
function EmergencyAddressDtoFromJSON(json) {
    return EmergencyAddressDtoFromJSONTyped(json, false);
}
exports.EmergencyAddressDtoFromJSON = EmergencyAddressDtoFromJSON;
function EmergencyAddressDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        address1: json['address1'],
        phoneCountry: json['phoneCountry'],
    };
}
exports.EmergencyAddressDtoFromJSONTyped = EmergencyAddressDtoFromJSONTyped;
function EmergencyAddressDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        address1: value.address1,
        phoneCountry: value.phoneCountry,
    };
}
exports.EmergencyAddressDtoToJSON = EmergencyAddressDtoToJSON;
