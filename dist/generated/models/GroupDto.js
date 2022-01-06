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
exports.GroupDtoToJSON = exports.GroupDtoFromJSONTyped = exports.GroupDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
function GroupDtoFromJSON(json) {
    return GroupDtoFromJSONTyped(json, false);
}
exports.GroupDtoFromJSON = GroupDtoFromJSON;
function GroupDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        name: json['name'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.GroupDtoFromJSONTyped = GroupDtoFromJSONTyped;
function GroupDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        name: value.name,
        description: value.description,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.GroupDtoToJSON = GroupDtoToJSON;
