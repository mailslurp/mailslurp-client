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
exports.CreateContactOptionsToJSON = exports.CreateContactOptionsFromJSONTyped = exports.CreateContactOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function CreateContactOptionsFromJSON(json) {
    return CreateContactOptionsFromJSONTyped(json, false);
}
exports.CreateContactOptionsFromJSON = CreateContactOptionsFromJSON;
function CreateContactOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        firstName: !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        lastName: !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        company: !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        emailAddresses: !(0, runtime_1.exists)(json, 'emailAddresses')
            ? undefined
            : json['emailAddresses'],
        tags: !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        metaData: !(0, runtime_1.exists)(json, 'metaData') ? undefined : json['metaData'],
        optOut: !(0, runtime_1.exists)(json, 'optOut') ? undefined : json['optOut'],
        groupId: !(0, runtime_1.exists)(json, 'groupId') ? undefined : json['groupId'],
        verifyEmailAddresses: !(0, runtime_1.exists)(json, 'verifyEmailAddresses')
            ? undefined
            : json['verifyEmailAddresses'],
    };
}
exports.CreateContactOptionsFromJSONTyped = CreateContactOptionsFromJSONTyped;
function CreateContactOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        firstName: value.firstName,
        lastName: value.lastName,
        company: value.company,
        emailAddresses: value.emailAddresses,
        tags: value.tags,
        metaData: value.metaData,
        optOut: value.optOut,
        groupId: value.groupId,
        verifyEmailAddresses: value.verifyEmailAddresses,
    };
}
exports.CreateContactOptionsToJSON = CreateContactOptionsToJSON;
