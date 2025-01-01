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
exports.UpdateInboxOptionsToJSON = exports.UpdateInboxOptionsFromJSONTyped = exports.UpdateInboxOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function UpdateInboxOptionsFromJSON(json) {
    return UpdateInboxOptionsFromJSONTyped(json, false);
}
exports.UpdateInboxOptionsFromJSON = UpdateInboxOptionsFromJSON;
function UpdateInboxOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        tags: !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        expiresAt: !(0, runtime_1.exists)(json, 'expiresAt')
            ? undefined
            : json['expiresAt'] === null
                ? null
                : new Date(json['expiresAt']),
        favourite: !(0, runtime_1.exists)(json, 'favourite') ? undefined : json['favourite'],
    };
}
exports.UpdateInboxOptionsFromJSONTyped = UpdateInboxOptionsFromJSONTyped;
function UpdateInboxOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        description: value.description,
        tags: value.tags,
        expiresAt: value.expiresAt === undefined
            ? undefined
            : value.expiresAt === null
                ? null
                : value.expiresAt.toISOString(),
        favourite: value.favourite,
    };
}
exports.UpdateInboxOptionsToJSON = UpdateInboxOptionsToJSON;
