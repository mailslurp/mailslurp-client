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
exports.PageEmailProjectionToJSON = exports.PageEmailProjectionFromJSONTyped = exports.PageEmailProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function PageEmailProjectionFromJSON(json) {
    return PageEmailProjectionFromJSONTyped(json, false);
}
exports.PageEmailProjectionFromJSON = PageEmailProjectionFromJSON;
function PageEmailProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        content: !(0, runtime_1.exists)(json, 'content')
            ? undefined
            : json['content'].map(_1.EmailProjectionFromJSON),
        pageable: !(0, runtime_1.exists)(json, 'pageable')
            ? undefined
            : (0, _1.PageableObjectFromJSON)(json['pageable']),
        totalElements: json['totalElements'],
        totalPages: json['totalPages'],
        last: !(0, runtime_1.exists)(json, 'last') ? undefined : json['last'],
        first: !(0, runtime_1.exists)(json, 'first') ? undefined : json['first'],
        numberOfElements: !(0, runtime_1.exists)(json, 'numberOfElements')
            ? undefined
            : json['numberOfElements'],
        size: !(0, runtime_1.exists)(json, 'size') ? undefined : json['size'],
        number: !(0, runtime_1.exists)(json, 'number') ? undefined : json['number'],
        sort: !(0, runtime_1.exists)(json, 'sort') ? undefined : (0, _1.SortObjectFromJSON)(json['sort']),
        empty: !(0, runtime_1.exists)(json, 'empty') ? undefined : json['empty'],
    };
}
exports.PageEmailProjectionFromJSONTyped = PageEmailProjectionFromJSONTyped;
function PageEmailProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        content: value.content === undefined
            ? undefined
            : value.content.map(_1.EmailProjectionToJSON),
        pageable: (0, _1.PageableObjectToJSON)(value.pageable),
        totalElements: value.totalElements,
        totalPages: value.totalPages,
        last: value.last,
        first: value.first,
        numberOfElements: value.numberOfElements,
        size: value.size,
        number: value.number,
        sort: (0, _1.SortObjectToJSON)(value.sort),
        empty: value.empty,
    };
}
exports.PageEmailProjectionToJSON = PageEmailProjectionToJSON;
