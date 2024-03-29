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
exports.CreateConnectorImapOptionsToJSON = exports.CreateConnectorImapOptionsFromJSONTyped = exports.CreateConnectorImapOptionsFromJSON = void 0;
function CreateConnectorImapOptionsFromJSON(json) {
    return CreateConnectorImapOptionsFromJSONTyped(json, false);
}
exports.CreateConnectorImapOptionsFromJSON = CreateConnectorImapOptionsFromJSON;
function CreateConnectorImapOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        host: json['host'],
        port: json['port'],
        username: json['username'],
        password: json['password'],
        useSSL: json['useSSL'],
    };
}
exports.CreateConnectorImapOptionsFromJSONTyped = CreateConnectorImapOptionsFromJSONTyped;
function CreateConnectorImapOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        host: value.host,
        port: value.port,
        username: value.username,
        password: value.password,
        useSSL: value.useSSL,
    };
}
exports.CreateConnectorImapOptionsToJSON = CreateConnectorImapOptionsToJSON;
