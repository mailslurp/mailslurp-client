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
exports.PageConnectorSyncEventsFromJSON = PageConnectorSyncEventsFromJSON;
exports.PageConnectorSyncEventsFromJSONTyped = PageConnectorSyncEventsFromJSONTyped;
exports.PageConnectorSyncEventsToJSON = PageConnectorSyncEventsToJSON;
var runtime_1 = require("../runtime");
var _1 = require("./");
function PageConnectorSyncEventsFromJSON(json) {
    return PageConnectorSyncEventsFromJSONTyped(json, false);
}
function PageConnectorSyncEventsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        content: !(0, runtime_1.exists)(json, 'content')
            ? undefined
            : json['content'].map(_1.ConnectorSyncEventProjectionFromJSON),
        pageable: !(0, runtime_1.exists)(json, 'pageable')
            ? undefined
            : (0, _1.PageableObjectFromJSON)(json['pageable']),
        totalPages: json['totalPages'],
        totalElements: json['totalElements'],
        last: !(0, runtime_1.exists)(json, 'last') ? undefined : json['last'],
        numberOfElements: !(0, runtime_1.exists)(json, 'numberOfElements')
            ? undefined
            : json['numberOfElements'],
        first: !(0, runtime_1.exists)(json, 'first') ? undefined : json['first'],
        size: !(0, runtime_1.exists)(json, 'size') ? undefined : json['size'],
        number: !(0, runtime_1.exists)(json, 'number') ? undefined : json['number'],
        sort: !(0, runtime_1.exists)(json, 'sort') ? undefined : (0, _1.SortObjectFromJSON)(json['sort']),
        empty: !(0, runtime_1.exists)(json, 'empty') ? undefined : json['empty'],
    };
}
function PageConnectorSyncEventsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        content: value.content === undefined
            ? undefined
            : value.content.map(_1.ConnectorSyncEventProjectionToJSON),
        pageable: (0, _1.PageableObjectToJSON)(value.pageable),
        totalPages: value.totalPages,
        totalElements: value.totalElements,
        last: value.last,
        numberOfElements: value.numberOfElements,
        first: value.first,
        size: value.size,
        number: value.number,
        sort: (0, _1.SortObjectToJSON)(value.sort),
        empty: value.empty,
    };
}
