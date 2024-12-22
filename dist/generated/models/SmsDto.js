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
exports.instanceOfSmsDto = instanceOfSmsDto;
exports.SmsDtoFromJSON = SmsDtoFromJSON;
exports.SmsDtoFromJSONTyped = SmsDtoFromJSONTyped;
exports.SmsDtoToJSON = SmsDtoToJSON;
exports.SmsDtoToJSONTyped = SmsDtoToJSONTyped;
/**
 * Check if a given object implements the SmsDto interface.
 */
function instanceOfSmsDto(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('userId' in value) || value['userId'] === undefined)
        return false;
    if (!('phoneNumber' in value) || value['phoneNumber'] === undefined)
        return false;
    if (!('fromNumber' in value) || value['fromNumber'] === undefined)
        return false;
    if (!('favourite' in value) || value['favourite'] === undefined)
        return false;
    if (!('body' in value) || value['body'] === undefined)
        return false;
    if (!('read' in value) || value['read'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function SmsDtoFromJSON(json) {
    return SmsDtoFromJSONTyped(json, false);
}
function SmsDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'userId': json['userId'],
        'phoneNumber': json['phoneNumber'],
        'fromNumber': json['fromNumber'],
        'toNumber': json['toNumber'] == null ? undefined : json['toNumber'],
        'favourite': json['favourite'],
        'body': json['body'],
        'read': json['read'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}
function SmsDtoToJSON(json) {
    return SmsDtoToJSONTyped(json, false);
}
function SmsDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'userId': value['userId'],
        'phoneNumber': value['phoneNumber'],
        'fromNumber': value['fromNumber'],
        'toNumber': value['toNumber'],
        'favourite': value['favourite'],
        'body': value['body'],
        'read': value['read'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}
