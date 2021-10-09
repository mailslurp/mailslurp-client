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
exports.CreateInboxForwarderOptionsToJSON = exports.CreateInboxForwarderOptionsFromJSONTyped = exports.CreateInboxForwarderOptionsFromJSON = exports.CreateInboxForwarderOptionsFieldEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var CreateInboxForwarderOptionsFieldEnum;
(function (CreateInboxForwarderOptionsFieldEnum) {
    CreateInboxForwarderOptionsFieldEnum["RECIPIENTS"] = "RECIPIENTS";
    CreateInboxForwarderOptionsFieldEnum["SENDER"] = "SENDER";
    CreateInboxForwarderOptionsFieldEnum["SUBJECT"] = "SUBJECT";
    CreateInboxForwarderOptionsFieldEnum["ATTACHMENTS"] = "ATTACHMENTS";
})(CreateInboxForwarderOptionsFieldEnum = exports.CreateInboxForwarderOptionsFieldEnum || (exports.CreateInboxForwarderOptionsFieldEnum = {}));
function CreateInboxForwarderOptionsFromJSON(json) {
    return CreateInboxForwarderOptionsFromJSONTyped(json, false);
}
exports.CreateInboxForwarderOptionsFromJSON = CreateInboxForwarderOptionsFromJSON;
function CreateInboxForwarderOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        field: !(0, runtime_1.exists)(json, 'field') ? undefined : json['field'],
        forwardToRecipients: !(0, runtime_1.exists)(json, 'forwardToRecipients')
            ? undefined
            : json['forwardToRecipients'],
        match: !(0, runtime_1.exists)(json, 'match') ? undefined : json['match'],
    };
}
exports.CreateInboxForwarderOptionsFromJSONTyped = CreateInboxForwarderOptionsFromJSONTyped;
function CreateInboxForwarderOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        field: value.field,
        forwardToRecipients: value.forwardToRecipients,
        match: value.match,
    };
}
exports.CreateInboxForwarderOptionsToJSON = CreateInboxForwarderOptionsToJSON;
