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
exports.instanceOfGuestPortalUserProjection = instanceOfGuestPortalUserProjection;
exports.GuestPortalUserProjectionFromJSON = GuestPortalUserProjectionFromJSON;
exports.GuestPortalUserProjectionFromJSONTyped = GuestPortalUserProjectionFromJSONTyped;
exports.GuestPortalUserProjectionToJSON = GuestPortalUserProjectionToJSON;
exports.GuestPortalUserProjectionToJSONTyped = GuestPortalUserProjectionToJSONTyped;
/**
 * Check if a given object implements the GuestPortalUserProjection interface.
 */
function instanceOfGuestPortalUserProjection(value) {
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    if (!('userId' in value) || value['userId'] === undefined)
        return false;
    if (!('portalId' in value) || value['portalId'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('username' in value) || value['username'] === undefined)
        return false;
    return true;
}
function GuestPortalUserProjectionFromJSON(json) {
    return GuestPortalUserProjectionFromJSONTyped(json, false);
}
function GuestPortalUserProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'inboxId': json['inboxId'] == null ? undefined : json['inboxId'],
        'userId': json['userId'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'portalId': json['portalId'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'],
        'username': json['username'],
    };
}
function GuestPortalUserProjectionToJSON(json) {
    return GuestPortalUserProjectionToJSONTyped(json, false);
}
function GuestPortalUserProjectionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'inboxId': value['inboxId'],
        'userId': value['userId'],
        'emailAddress': value['emailAddress'],
        'portalId': value['portalId'],
        'name': value['name'],
        'id': value['id'],
        'username': value['username'],
    };
}
