"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactProjectionToJSON = exports.ContactProjectionFromJSONTyped = exports.ContactProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function ContactProjectionFromJSON(json) {
    return ContactProjectionFromJSONTyped(json, false);
}
exports.ContactProjectionFromJSON = ContactProjectionFromJSON;
function ContactProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        groupId: !(0, runtime_1.exists)(json, 'groupId') ? undefined : json['groupId'],
        firstName: !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        lastName: !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        company: !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        emailAddresses: !(0, runtime_1.exists)(json, 'emailAddresses')
            ? undefined
            : json['emailAddresses'],
        optOut: !(0, runtime_1.exists)(json, 'optOut') ? undefined : json['optOut'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.ContactProjectionFromJSONTyped = ContactProjectionFromJSONTyped;
function ContactProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        groupId: value.groupId,
        firstName: value.firstName,
        lastName: value.lastName,
        company: value.company,
        emailAddresses: value.emailAddresses,
        optOut: value.optOut,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.ContactProjectionToJSON = ContactProjectionToJSON;
