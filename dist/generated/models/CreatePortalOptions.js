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
exports.CreatePortalOptionsToJSON = exports.CreatePortalOptionsFromJSONTyped = exports.CreatePortalOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function CreatePortalOptionsFromJSON(json) {
    return CreatePortalOptionsFromJSONTyped(json, false);
}
exports.CreatePortalOptionsFromJSON = CreatePortalOptionsFromJSON;
function CreatePortalOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        linkHelp: !(0, runtime_1.exists)(json, 'linkHelp') ? undefined : json['linkHelp'],
    };
}
exports.CreatePortalOptionsFromJSONTyped = CreatePortalOptionsFromJSONTyped;
function CreatePortalOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        domainId: value.domainId,
        description: value.description,
        linkHelp: value.linkHelp,
    };
}
exports.CreatePortalOptionsToJSON = CreatePortalOptionsToJSON;
