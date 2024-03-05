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
exports.ListUnsubscribeRecipientProjectionToJSON = exports.ListUnsubscribeRecipientProjectionFromJSONTyped = exports.ListUnsubscribeRecipientProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function ListUnsubscribeRecipientProjectionFromJSON(json) {
    return ListUnsubscribeRecipientProjectionFromJSONTyped(json, false);
}
exports.ListUnsubscribeRecipientProjectionFromJSON = ListUnsubscribeRecipientProjectionFromJSON;
function ListUnsubscribeRecipientProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        emailAddress: json['emailAddress'],
        domainId: !(0, runtime_1.exists)(json, 'domainId') ? undefined : json['domainId'],
        id: json['id'],
    };
}
exports.ListUnsubscribeRecipientProjectionFromJSONTyped = ListUnsubscribeRecipientProjectionFromJSONTyped;
function ListUnsubscribeRecipientProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        emailAddress: value.emailAddress,
        domainId: value.domainId,
        id: value.id,
    };
}
exports.ListUnsubscribeRecipientProjectionToJSON = ListUnsubscribeRecipientProjectionToJSON;
