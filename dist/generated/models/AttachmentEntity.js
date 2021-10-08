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
exports.AttachmentEntityToJSON = exports.AttachmentEntityFromJSONTyped = exports.AttachmentEntityFromJSON = void 0;
var runtime_1 = require("../runtime");
function AttachmentEntityFromJSON(json) {
    return AttachmentEntityFromJSONTyped(json, false);
}
exports.AttachmentEntityFromJSON = AttachmentEntityFromJSON;
function AttachmentEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attachmentId': json['attachmentId'],
        'contentLength': !(0, runtime_1.exists)(json, 'contentLength') ? undefined : json['contentLength'],
        'contentType': !(0, runtime_1.exists)(json, 'contentType') ? undefined : json['contentType'],
        'createdAt': (new Date(json['createdAt'])),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'updatedAt': (new Date(json['updatedAt'])),
        'userId': json['userId'],
    };
}
exports.AttachmentEntityFromJSONTyped = AttachmentEntityFromJSONTyped;
function AttachmentEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attachmentId': value.attachmentId,
        'contentLength': value.contentLength,
        'contentType': value.contentType,
        'createdAt': (value.createdAt.toISOString()),
        'id': value.id,
        'name': value.name,
        'updatedAt': (value.updatedAt.toISOString()),
        'userId': value.userId,
    };
}
exports.AttachmentEntityToJSON = AttachmentEntityToJSON;
