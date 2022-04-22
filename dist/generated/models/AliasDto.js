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
exports.AliasDtoToJSON = exports.AliasDtoFromJSONTyped = exports.AliasDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
function AliasDtoFromJSON(json) {
    return AliasDtoFromJSONTyped(json, false);
}
exports.AliasDtoFromJSON = AliasDtoFromJSON;
function AliasDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        emailAddress: json['emailAddress'],
        maskedEmailAddress: !(0, runtime_1.exists)(json, 'maskedEmailAddress')
            ? undefined
            : json['maskedEmailAddress'],
        userId: json['userId'],
        inboxId: json['inboxId'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        useThreads: !(0, runtime_1.exists)(json, 'useThreads') ? undefined : json['useThreads'],
        isVerified: json['isVerified'],
        createdAt: !(0, runtime_1.exists)(json, 'createdAt')
            ? undefined
            : new Date(json['createdAt']),
        updatedAt: !(0, runtime_1.exists)(json, 'updatedAt')
            ? undefined
            : new Date(json['updatedAt']),
    };
}
exports.AliasDtoFromJSONTyped = AliasDtoFromJSONTyped;
function AliasDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        emailAddress: value.emailAddress,
        maskedEmailAddress: value.maskedEmailAddress,
        userId: value.userId,
        inboxId: value.inboxId,
        name: value.name,
        useThreads: value.useThreads,
        isVerified: value.isVerified,
        createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
        updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    };
}
exports.AliasDtoToJSON = AliasDtoToJSON;
