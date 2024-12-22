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
exports.instanceOfCreateTemplateOptions = instanceOfCreateTemplateOptions;
exports.CreateTemplateOptionsFromJSON = CreateTemplateOptionsFromJSON;
exports.CreateTemplateOptionsFromJSONTyped = CreateTemplateOptionsFromJSONTyped;
exports.CreateTemplateOptionsToJSON = CreateTemplateOptionsToJSON;
exports.CreateTemplateOptionsToJSONTyped = CreateTemplateOptionsToJSONTyped;
/**
 * Check if a given object implements the CreateTemplateOptions interface.
 */
function instanceOfCreateTemplateOptions(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('content' in value) || value['content'] === undefined)
        return false;
    return true;
}
function CreateTemplateOptionsFromJSON(json) {
    return CreateTemplateOptionsFromJSONTyped(json, false);
}
function CreateTemplateOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'content': json['content'],
    };
}
function CreateTemplateOptionsToJSON(json) {
    return CreateTemplateOptionsToJSONTyped(json, false);
}
function CreateTemplateOptionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'content': value['content'],
    };
}
