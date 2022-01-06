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
exports.InlineObjectToJSON = exports.InlineObjectFromJSONTyped = exports.InlineObjectFromJSON = void 0;
var runtime_1 = require("../runtime");
function InlineObjectFromJSON(json) {
    return InlineObjectFromJSONTyped(json, false);
}
exports.InlineObjectFromJSON = InlineObjectFromJSON;
function InlineObjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        contentTypeHeader: !(0, runtime_1.exists)(json, 'contentTypeHeader')
            ? undefined
            : json['contentTypeHeader'],
        file: json['file'],
    };
}
exports.InlineObjectFromJSONTyped = InlineObjectFromJSONTyped;
function InlineObjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        contentTypeHeader: value.contentTypeHeader,
        file: value.file,
    };
}
exports.InlineObjectToJSON = InlineObjectToJSON;
