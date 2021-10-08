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
exports.CreateAliasOptionsToJSON = exports.CreateAliasOptionsFromJSONTyped = exports.CreateAliasOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function CreateAliasOptionsFromJSON(json) {
    return CreateAliasOptionsFromJSONTyped(json, false);
}
exports.CreateAliasOptionsFromJSON = CreateAliasOptionsFromJSON;
function CreateAliasOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailAddress: !(0, runtime_1.exists)(json, 'emailAddress')
            ? undefined
            : json['emailAddress'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        useThreads: !(0, runtime_1.exists)(json, 'useThreads') ? undefined : json['useThreads'],
    };
}
exports.CreateAliasOptionsFromJSONTyped = CreateAliasOptionsFromJSONTyped;
function CreateAliasOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        emailAddress: value.emailAddress,
        inboxId: value.inboxId,
        name: value.name,
        useThreads: value.useThreads,
    };
}
exports.CreateAliasOptionsToJSON = CreateAliasOptionsToJSON;