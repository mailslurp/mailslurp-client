"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationDtoToJSON = exports.ValidationDtoFromJSONTyped = exports.ValidationDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function ValidationDtoFromJSON(json) {
    return ValidationDtoFromJSONTyped(json, false);
}
exports.ValidationDtoFromJSON = ValidationDtoFromJSON;
function ValidationDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailId: !(0, runtime_1.exists)(json, 'emailId') ? undefined : json['emailId'],
        html: !(0, runtime_1.exists)(json, 'html')
            ? undefined
            : (0, _1.HTMLValidationResultFromJSON)(json['html']),
    };
}
exports.ValidationDtoFromJSONTyped = ValidationDtoFromJSONTyped;
function ValidationDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        emailId: value.emailId,
        html: (0, _1.HTMLValidationResultToJSON)(value.html),
    };
}
exports.ValidationDtoToJSON = ValidationDtoToJSON;
