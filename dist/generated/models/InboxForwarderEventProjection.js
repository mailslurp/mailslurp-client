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
exports.InboxForwarderEventProjectionToJSON = exports.InboxForwarderEventProjectionFromJSONTyped = exports.InboxForwarderEventProjectionFromJSON = exports.InboxForwarderEventProjectionStatusEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var InboxForwarderEventProjectionStatusEnum;
(function (InboxForwarderEventProjectionStatusEnum) {
    InboxForwarderEventProjectionStatusEnum["SUCCESS"] = "SUCCESS";
    InboxForwarderEventProjectionStatusEnum["FAILURE"] = "FAILURE";
})(InboxForwarderEventProjectionStatusEnum = exports.InboxForwarderEventProjectionStatusEnum || (exports.InboxForwarderEventProjectionStatusEnum = {}));
function InboxForwarderEventProjectionFromJSON(json) {
    return InboxForwarderEventProjectionFromJSONTyped(json, false);
}
exports.InboxForwarderEventProjectionFromJSON = InboxForwarderEventProjectionFromJSON;
function InboxForwarderEventProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        message: !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        status: !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        emailId: !(0, runtime_1.exists)(json, 'emailId') ? undefined : json['emailId'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        createdAt: new Date(json['createdAt']),
        forwarderId: !(0, runtime_1.exists)(json, 'forwarderId') ? undefined : json['forwarderId'],
    };
}
exports.InboxForwarderEventProjectionFromJSONTyped = InboxForwarderEventProjectionFromJSONTyped;
function InboxForwarderEventProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        message: value.message,
        id: value.id,
        status: value.status,
        userId: value.userId,
        emailId: value.emailId,
        inboxId: value.inboxId,
        createdAt: value.createdAt.toISOString(),
        forwarderId: value.forwarderId,
    };
}
exports.InboxForwarderEventProjectionToJSON = InboxForwarderEventProjectionToJSON;
