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
exports.ValidateEmailAddressListResultToJSON = exports.ValidateEmailAddressListResultFromJSONTyped = exports.ValidateEmailAddressListResultFromJSON = void 0;
function ValidateEmailAddressListResultFromJSON(json) {
    return ValidateEmailAddressListResultFromJSONTyped(json, false);
}
exports.ValidateEmailAddressListResultFromJSON = ValidateEmailAddressListResultFromJSON;
function ValidateEmailAddressListResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        validEmailAddresses: json['validEmailAddresses'],
        invalidEmailAddresses: json['invalidEmailAddresses'],
        resultMapEmailAddressIsValid: json['resultMapEmailAddressIsValid'],
    };
}
exports.ValidateEmailAddressListResultFromJSONTyped = ValidateEmailAddressListResultFromJSONTyped;
function ValidateEmailAddressListResultToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        validEmailAddresses: value.validEmailAddresses,
        invalidEmailAddresses: value.invalidEmailAddresses,
        resultMapEmailAddressIsValid: value.resultMapEmailAddressIsValid,
    };
}
exports.ValidateEmailAddressListResultToJSON = ValidateEmailAddressListResultToJSON;
