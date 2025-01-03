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
exports.GuestPortalUserProjectionToJSON = exports.GuestPortalUserProjectionFromJSONTyped = exports.GuestPortalUserProjectionFromJSON = void 0;
var runtime_1 = require("../runtime");
function GuestPortalUserProjectionFromJSON(json) {
    return GuestPortalUserProjectionFromJSONTyped(json, false);
}
exports.GuestPortalUserProjectionFromJSON = GuestPortalUserProjectionFromJSON;
function GuestPortalUserProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
        userId: json['userId'],
        emailAddress: !(0, runtime_1.exists)(json, 'emailAddress')
            ? undefined
            : json['emailAddress'],
        inboxId: !(0, runtime_1.exists)(json, 'inboxId') ? undefined : json['inboxId'],
        portalId: json['portalId'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        id: json['id'],
        username: json['username'],
    };
}
exports.GuestPortalUserProjectionFromJSONTyped = GuestPortalUserProjectionFromJSONTyped;
function GuestPortalUserProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
        userId: value.userId,
        emailAddress: value.emailAddress,
        inboxId: value.inboxId,
        portalId: value.portalId,
        name: value.name,
        id: value.id,
        username: value.username,
    };
}
exports.GuestPortalUserProjectionToJSON = GuestPortalUserProjectionToJSON;
