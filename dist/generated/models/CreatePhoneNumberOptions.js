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
exports.CreatePhoneNumberOptionsToJSON = exports.CreatePhoneNumberOptionsFromJSONTyped = exports.CreatePhoneNumberOptionsFromJSON = exports.CreatePhoneNumberOptionsScheduleEnum = exports.CreatePhoneNumberOptionsPhoneCountryEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var CreatePhoneNumberOptionsPhoneCountryEnum;
(function (CreatePhoneNumberOptionsPhoneCountryEnum) {
    CreatePhoneNumberOptionsPhoneCountryEnum["US"] = "US";
    CreatePhoneNumberOptionsPhoneCountryEnum["GB"] = "GB";
    CreatePhoneNumberOptionsPhoneCountryEnum["AU"] = "AU";
    CreatePhoneNumberOptionsPhoneCountryEnum["CA"] = "CA";
    CreatePhoneNumberOptionsPhoneCountryEnum["EE"] = "EE";
    CreatePhoneNumberOptionsPhoneCountryEnum["HK"] = "HK";
    CreatePhoneNumberOptionsPhoneCountryEnum["PL"] = "PL";
    CreatePhoneNumberOptionsPhoneCountryEnum["CH"] = "CH";
    CreatePhoneNumberOptionsPhoneCountryEnum["PT"] = "PT";
    CreatePhoneNumberOptionsPhoneCountryEnum["NL"] = "NL";
    CreatePhoneNumberOptionsPhoneCountryEnum["IL"] = "IL";
    CreatePhoneNumberOptionsPhoneCountryEnum["SE"] = "SE";
})(CreatePhoneNumberOptionsPhoneCountryEnum = exports.CreatePhoneNumberOptionsPhoneCountryEnum || (exports.CreatePhoneNumberOptionsPhoneCountryEnum = {}));
/**
 * @export
 * @enum {string}
 */
var CreatePhoneNumberOptionsScheduleEnum;
(function (CreatePhoneNumberOptionsScheduleEnum) {
    CreatePhoneNumberOptionsScheduleEnum["MONTHLY"] = "MONTHLY";
    CreatePhoneNumberOptionsScheduleEnum["YEARLY"] = "YEARLY";
})(CreatePhoneNumberOptionsScheduleEnum = exports.CreatePhoneNumberOptionsScheduleEnum || (exports.CreatePhoneNumberOptionsScheduleEnum = {}));
function CreatePhoneNumberOptionsFromJSON(json) {
    return CreatePhoneNumberOptionsFromJSONTyped(json, false);
}
exports.CreatePhoneNumberOptionsFromJSON = CreatePhoneNumberOptionsFromJSON;
function CreatePhoneNumberOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        phoneCountry: json['phoneCountry'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        schedule: !(0, runtime_1.exists)(json, 'schedule') ? undefined : json['schedule'],
    };
}
exports.CreatePhoneNumberOptionsFromJSONTyped = CreatePhoneNumberOptionsFromJSONTyped;
function CreatePhoneNumberOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        phoneCountry: value.phoneCountry,
        name: value.name,
        description: value.description,
        schedule: value.schedule,
    };
}
exports.CreatePhoneNumberOptionsToJSON = CreatePhoneNumberOptionsToJSON;
