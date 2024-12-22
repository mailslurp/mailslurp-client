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
exports.instanceOfCreatePortalUserOptions = instanceOfCreatePortalUserOptions;
exports.CreatePortalUserOptionsFromJSON = CreatePortalUserOptionsFromJSON;
exports.CreatePortalUserOptionsFromJSONTyped = CreatePortalUserOptionsFromJSONTyped;
exports.CreatePortalUserOptionsToJSON = CreatePortalUserOptionsToJSON;
exports.CreatePortalUserOptionsToJSONTyped = CreatePortalUserOptionsToJSONTyped;
var CreateInboxDto_1 = require("./CreateInboxDto");
/**
 * Check if a given object implements the CreatePortalUserOptions interface.
 */
function instanceOfCreatePortalUserOptions(value) {
    return true;
}
function CreatePortalUserOptionsFromJSON(json) {
    return CreatePortalUserOptionsFromJSONTyped(json, false);
}
function CreatePortalUserOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'password': json['password'] == null ? undefined : json['password'],
        'name': json['name'] == null ? undefined : json['name'],
        'username': json['username'] == null ? undefined : json['username'],
        'skipInboxCreation': json['skipInboxCreation'] == null ? undefined : json['skipInboxCreation'],
        'inboxId': json['inboxId'] == null ? undefined : json['inboxId'],
        'createInboxOptions': json['createInboxOptions'] == null ? undefined : (0, CreateInboxDto_1.CreateInboxDtoFromJSON)(json['createInboxOptions']),
    };
}
function CreatePortalUserOptionsToJSON(json) {
    return CreatePortalUserOptionsToJSONTyped(json, false);
}
function CreatePortalUserOptionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'password': value['password'],
        'name': value['name'],
        'username': value['username'],
        'skipInboxCreation': value['skipInboxCreation'],
        'inboxId': value['inboxId'],
        'createInboxOptions': (0, CreateInboxDto_1.CreateInboxDtoToJSON)(value['createInboxOptions']),
    };
}
