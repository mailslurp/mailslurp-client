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
exports.InboxReplierEventProjectionToJSON = exports.InboxReplierEventProjectionFromJSONTyped = exports.InboxReplierEventProjectionFromJSON = exports.InboxReplierEventProjectionStatusEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var InboxReplierEventProjectionStatusEnum;
(function (InboxReplierEventProjectionStatusEnum) {
    InboxReplierEventProjectionStatusEnum["SUCCESS"] = "SUCCESS";
    InboxReplierEventProjectionStatusEnum["FAILURE"] = "FAILURE";
})(InboxReplierEventProjectionStatusEnum = exports.InboxReplierEventProjectionStatusEnum || (exports.InboxReplierEventProjectionStatusEnum = {}));
function InboxReplierEventProjectionFromJSON(json) {
    return InboxReplierEventProjectionFromJSONTyped(json, false);
}
exports.InboxReplierEventProjectionFromJSON = InboxReplierEventProjectionFromJSON;
function InboxReplierEventProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailId: !(0, runtime_1.exists)(json, 'emailId') ? undefined : json['emailId'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        recipients: !(0, runtime_1.exists)(json, 'recipients') ? undefined : json['recipients'],
        userId: !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        createdAt: new Date(json['createdAt']),
        sentId: !(0, runtime_1.exists)(json, 'sentId') ? undefined : json['sentId'],
        replierId: !(0, runtime_1.exists)(json, 'replierId') ? undefined : json['replierId'],
        message: !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        id: !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        status: !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
    };
}
exports.InboxReplierEventProjectionFromJSONTyped = InboxReplierEventProjectionFromJSONTyped;
function InboxReplierEventProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        emailId: value.emailId,
        inboxId: value.inboxId,
        recipients: value.recipients,
        userId: value.userId,
        createdAt: value.createdAt.toISOString(),
        sentId: value.sentId,
        replierId: value.replierId,
        message: value.message,
        id: value.id,
        status: value.status,
    };
}
exports.InboxReplierEventProjectionToJSON = InboxReplierEventProjectionToJSON;
