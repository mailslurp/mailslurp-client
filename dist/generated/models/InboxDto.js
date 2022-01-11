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
exports.InboxDtoToJSON = exports.InboxDtoFromJSONTyped = exports.InboxDtoFromJSON = exports.InboxDtoInboxTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var InboxDtoInboxTypeEnum;
(function (InboxDtoInboxTypeEnum) {
    InboxDtoInboxTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    InboxDtoInboxTypeEnum["SMTP_INBOX"] = "SMTP_INBOX";
})(InboxDtoInboxTypeEnum = exports.InboxDtoInboxTypeEnum || (exports.InboxDtoInboxTypeEnum = {}));
function InboxDtoFromJSON(json) {
    return InboxDtoFromJSONTyped(json, false);
}
exports.InboxDtoFromJSON = InboxDtoFromJSON;
function InboxDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        createdAt: new Date(json['createdAt']),
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        emailAddress: json['emailAddress'],
        expiresAt: !(0, runtime_1.exists)(json, 'expiresAt') ? undefined : json['expiresAt'],
        favourite: json['favourite'],
        tags: !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        inboxType: !(0, runtime_1.exists)(json, 'inboxType') ? undefined : json['inboxType'],
        readOnly: json['readOnly'],
    };
}
exports.InboxDtoFromJSONTyped = InboxDtoFromJSONTyped;
function InboxDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        userId: value.userId,
        createdAt: value.createdAt.toISOString(),
        name: value.name,
        description: value.description,
        emailAddress: value.emailAddress,
        expiresAt: value.expiresAt,
        favourite: value.favourite,
        tags: value.tags,
        inboxType: value.inboxType,
        readOnly: value.readOnly,
    };
}
exports.InboxDtoToJSON = InboxDtoToJSON;