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
exports.PageDeliveryStatusToJSON = exports.PageDeliveryStatusFromJSONTyped = exports.PageDeliveryStatusFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function PageDeliveryStatusFromJSON(json) {
    return PageDeliveryStatusFromJSONTyped(json, false);
}
exports.PageDeliveryStatusFromJSON = PageDeliveryStatusFromJSON;
function PageDeliveryStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        content: !(0, runtime_1.exists)(json, 'content')
            ? undefined
            : json['content'].map(_1.DeliveryStatusDtoFromJSON),
        pageable: !(0, runtime_1.exists)(json, 'pageable')
            ? undefined
            : (0, _1.PageableObjectFromJSON)(json['pageable']),
        total: !(0, runtime_1.exists)(json, 'total') ? undefined : json['total'],
        totalElements: !(0, runtime_1.exists)(json, 'totalElements')
            ? undefined
            : json['totalElements'],
        totalPages: !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        last: !(0, runtime_1.exists)(json, 'last') ? undefined : json['last'],
        size: !(0, runtime_1.exists)(json, 'size') ? undefined : json['size'],
        number: !(0, runtime_1.exists)(json, 'number') ? undefined : json['number'],
        sort: !(0, runtime_1.exists)(json, 'sort') ? undefined : (0, _1.SortFromJSON)(json['sort']),
        numberOfElements: !(0, runtime_1.exists)(json, 'numberOfElements')
            ? undefined
            : json['numberOfElements'],
        first: !(0, runtime_1.exists)(json, 'first') ? undefined : json['first'],
        empty: !(0, runtime_1.exists)(json, 'empty') ? undefined : json['empty'],
    };
}
exports.PageDeliveryStatusFromJSONTyped = PageDeliveryStatusFromJSONTyped;
function PageDeliveryStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        content: value.content === undefined
            ? undefined
            : value.content.map(_1.DeliveryStatusDtoToJSON),
        pageable: (0, _1.PageableObjectToJSON)(value.pageable),
        total: value.total,
        totalElements: value.totalElements,
        totalPages: value.totalPages,
        last: value.last,
        size: value.size,
        number: value.number,
        sort: (0, _1.SortToJSON)(value.sort),
        numberOfElements: value.numberOfElements,
        first: value.first,
        empty: value.empty,
    };
}
exports.PageDeliveryStatusToJSON = PageDeliveryStatusToJSON;
