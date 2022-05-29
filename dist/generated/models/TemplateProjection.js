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
exports.TemplateProjectionToJSON = exports.TemplateProjectionFromJSONTyped = exports.TemplateProjectionFromJSON = void 0;
function TemplateProjectionFromJSON(json) {
    return TemplateProjectionFromJSONTyped(json, false);
}
exports.TemplateProjectionFromJSON = TemplateProjectionFromJSON;
function TemplateProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json['name'],
        id: json['id'],
        createdAt: new Date(json['createdAt']),
        variables: json['variables'],
        updatedAt: new Date(json['updatedAt']),
    };
}
exports.TemplateProjectionFromJSONTyped = TemplateProjectionFromJSONTyped;
function TemplateProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        id: value.id,
        createdAt: value.createdAt.toISOString(),
        variables: value.variables,
        updatedAt: value.updatedAt.toISOString(),
    };
}
exports.TemplateProjectionToJSON = TemplateProjectionToJSON;
