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
exports.instanceOfCreateConnectorOptions = instanceOfCreateConnectorOptions;
exports.CreateConnectorOptionsFromJSON = CreateConnectorOptionsFromJSON;
exports.CreateConnectorOptionsFromJSONTyped = CreateConnectorOptionsFromJSONTyped;
exports.CreateConnectorOptionsToJSON = CreateConnectorOptionsToJSON;
exports.CreateConnectorOptionsToJSONTyped = CreateConnectorOptionsToJSONTyped;
/**
 * Check if a given object implements the CreateConnectorOptions interface.
 */
function instanceOfCreateConnectorOptions(value) {
    return true;
}
function CreateConnectorOptionsFromJSON(json) {
    return CreateConnectorOptionsFromJSONTyped(json, false);
}
function CreateConnectorOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
    };
}
function CreateConnectorOptionsToJSON(json) {
    return CreateConnectorOptionsToJSONTyped(json, false);
}
function CreateConnectorOptionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'emailAddress': value['emailAddress'],
        'enabled': value['enabled'],
    };
}
