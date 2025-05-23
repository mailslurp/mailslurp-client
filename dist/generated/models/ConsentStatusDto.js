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
exports.ConsentStatusDtoToJSON = exports.ConsentStatusDtoFromJSONTyped = exports.ConsentStatusDtoFromJSON = void 0;
function ConsentStatusDtoFromJSON(json) {
    return ConsentStatusDtoFromJSONTyped(json, false);
}
exports.ConsentStatusDtoFromJSON = ConsentStatusDtoFromJSON;
function ConsentStatusDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        consented: json['consented'],
    };
}
exports.ConsentStatusDtoFromJSONTyped = ConsentStatusDtoFromJSONTyped;
function ConsentStatusDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        consented: value.consented,
    };
}
exports.ConsentStatusDtoToJSON = ConsentStatusDtoToJSON;
