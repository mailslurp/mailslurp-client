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
exports.EmailValidationRequestDtoToJSON = exports.EmailValidationRequestDtoFromJSONTyped = exports.EmailValidationRequestDtoFromJSON = void 0;
function EmailValidationRequestDtoFromJSON(json) {
    return EmailValidationRequestDtoFromJSONTyped(json, false);
}
exports.EmailValidationRequestDtoFromJSON = EmailValidationRequestDtoFromJSON;
function EmailValidationRequestDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: json['userId'],
        emailAddress: json['emailAddress'],
        isValid: json['isValid'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
    };
}
exports.EmailValidationRequestDtoFromJSONTyped = EmailValidationRequestDtoFromJSONTyped;
function EmailValidationRequestDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        emailAddress: value.emailAddress,
        isValid: value.isValid,
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
    };
}
exports.EmailValidationRequestDtoToJSON = EmailValidationRequestDtoToJSON;
