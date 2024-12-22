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
exports.instanceOfPageListUnsubscribeRecipients = instanceOfPageListUnsubscribeRecipients;
exports.PageListUnsubscribeRecipientsFromJSON = PageListUnsubscribeRecipientsFromJSON;
exports.PageListUnsubscribeRecipientsFromJSONTyped = PageListUnsubscribeRecipientsFromJSONTyped;
exports.PageListUnsubscribeRecipientsToJSON = PageListUnsubscribeRecipientsToJSON;
exports.PageListUnsubscribeRecipientsToJSONTyped = PageListUnsubscribeRecipientsToJSONTyped;
var PageableObject_1 = require("./PageableObject");
var SortObject_1 = require("./SortObject");
var ListUnsubscribeRecipientProjection_1 = require("./ListUnsubscribeRecipientProjection");
/**
 * Check if a given object implements the PageListUnsubscribeRecipients interface.
 */
function instanceOfPageListUnsubscribeRecipients(value) {
    if (!('totalPages' in value) || value['totalPages'] === undefined)
        return false;
    if (!('totalElements' in value) || value['totalElements'] === undefined)
        return false;
    return true;
}
function PageListUnsubscribeRecipientsFromJSON(json) {
    return PageListUnsubscribeRecipientsFromJSONTyped(json, false);
}
function PageListUnsubscribeRecipientsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'content': json['content'] == null ? undefined : (json['content'].map(ListUnsubscribeRecipientProjection_1.ListUnsubscribeRecipientProjectionFromJSON)),
        'pageable': json['pageable'] == null ? undefined : (0, PageableObject_1.PageableObjectFromJSON)(json['pageable']),
        'totalPages': json['totalPages'],
        'totalElements': json['totalElements'],
        'last': json['last'] == null ? undefined : json['last'],
        'numberOfElements': json['numberOfElements'] == null ? undefined : json['numberOfElements'],
        'first': json['first'] == null ? undefined : json['first'],
        'size': json['size'] == null ? undefined : json['size'],
        'number': json['number'] == null ? undefined : json['number'],
        'sort': json['sort'] == null ? undefined : (json['sort'].map(SortObject_1.SortObjectFromJSON)),
        'empty': json['empty'] == null ? undefined : json['empty'],
    };
}
function PageListUnsubscribeRecipientsToJSON(json) {
    return PageListUnsubscribeRecipientsToJSONTyped(json, false);
}
function PageListUnsubscribeRecipientsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'content': value['content'] == null ? undefined : (value['content'].map(ListUnsubscribeRecipientProjection_1.ListUnsubscribeRecipientProjectionToJSON)),
        'pageable': (0, PageableObject_1.PageableObjectToJSON)(value['pageable']),
        'totalPages': value['totalPages'],
        'totalElements': value['totalElements'],
        'last': value['last'],
        'numberOfElements': value['numberOfElements'],
        'first': value['first'],
        'size': value['size'],
        'number': value['number'],
        'sort': value['sort'] == null ? undefined : (value['sort'].map(SortObject_1.SortObjectToJSON)),
        'empty': value['empty'],
    };
}
