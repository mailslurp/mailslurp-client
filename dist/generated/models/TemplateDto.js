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
exports.TemplateDtoToJSON = exports.TemplateDtoFromJSONTyped = exports.TemplateDtoFromJSON = void 0;
var _1 = require("./");
function TemplateDtoFromJSON(json) {
    return TemplateDtoFromJSONTyped(json, false);
}
exports.TemplateDtoFromJSON = TemplateDtoFromJSON;
function TemplateDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        name: json['name'],
        variables: json['variables'].map(_1.TemplateVariableFromJSON),
        content: json['content'],
        createdAt: new Date(json['createdAt']),
    };
}
exports.TemplateDtoFromJSONTyped = TemplateDtoFromJSONTyped;
function TemplateDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        name: value.name,
        variables: value.variables.map(_1.TemplateVariableToJSON),
        content: value.content,
        createdAt: value.createdAt.toISOString(),
    };
}
exports.TemplateDtoToJSON = TemplateDtoToJSON;
