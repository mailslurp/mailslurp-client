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
exports.OptInIdentityProjectionToJSON = exports.OptInIdentityProjectionFromJSONTyped = exports.OptInIdentityProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function OptInIdentityProjectionFromJSON(json) {
    return OptInIdentityProjectionFromJSONTyped(json, false);
}
exports.OptInIdentityProjectionFromJSON = OptInIdentityProjectionFromJSON;
function OptInIdentityProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        emailAddress: json['emailAddress'],
        updatedAt: new Date(json['updatedAt']),
        createdAt: new Date(json['createdAt']),
        verified: !(0, runtime_1.exists)(json, 'verified') ? undefined : json['verified'],
    };
}
exports.OptInIdentityProjectionFromJSONTyped = OptInIdentityProjectionFromJSONTyped;
function OptInIdentityProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        emailAddress: value.emailAddress,
        updatedAt: value.updatedAt.toISOString(),
        createdAt: value.createdAt.toISOString(),
        verified: value.verified,
    };
}
exports.OptInIdentityProjectionToJSON = OptInIdentityProjectionToJSON;
