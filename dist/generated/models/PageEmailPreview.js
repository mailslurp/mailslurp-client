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
exports.PageEmailPreviewToJSON = exports.PageEmailPreviewFromJSONTyped = exports.PageEmailPreviewFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function PageEmailPreviewFromJSON(json) {
    return PageEmailPreviewFromJSONTyped(json, false);
}
exports.PageEmailPreviewFromJSON = PageEmailPreviewFromJSON;
function PageEmailPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        content: !(0, runtime_1.exists)(json, 'content')
            ? undefined
            : json['content'].map(_1.EmailPreviewFromJSON),
        empty: !(0, runtime_1.exists)(json, 'empty') ? undefined : json['empty'],
        first: !(0, runtime_1.exists)(json, 'first') ? undefined : json['first'],
        last: !(0, runtime_1.exists)(json, 'last') ? undefined : json['last'],
        number: !(0, runtime_1.exists)(json, 'number') ? undefined : json['number'],
        numberOfElements: !(0, runtime_1.exists)(json, 'numberOfElements')
            ? undefined
            : json['numberOfElements'],
        pageable: !(0, runtime_1.exists)(json, 'pageable')
            ? undefined
            : (0, _1.PageableFromJSON)(json['pageable']),
        size: !(0, runtime_1.exists)(json, 'size') ? undefined : json['size'],
        sort: !(0, runtime_1.exists)(json, 'sort') ? undefined : (0, _1.SortFromJSON)(json['sort']),
        totalElements: !(0, runtime_1.exists)(json, 'totalElements')
            ? undefined
            : json['totalElements'],
        totalPages: !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
    };
}
exports.PageEmailPreviewFromJSONTyped = PageEmailPreviewFromJSONTyped;
function PageEmailPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        content: value.content === undefined
            ? undefined
            : value.content.map(_1.EmailPreviewToJSON),
        empty: value.empty,
        first: value.first,
        last: value.last,
        number: value.number,
        numberOfElements: value.numberOfElements,
        pageable: (0, _1.PageableToJSON)(value.pageable),
        size: value.size,
        sort: (0, _1.SortToJSON)(value.sort),
        totalElements: value.totalElements,
        totalPages: value.totalPages,
    };
}
exports.PageEmailPreviewToJSON = PageEmailPreviewToJSON;
