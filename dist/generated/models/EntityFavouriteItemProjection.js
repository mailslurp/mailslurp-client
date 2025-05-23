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
exports.EntityFavouriteItemProjectionToJSON = exports.EntityFavouriteItemProjectionFromJSONTyped = exports.EntityFavouriteItemProjectionFromJSON = exports.EntityFavouriteItemProjectionEntityTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var EntityFavouriteItemProjectionEntityTypeEnum;
(function (EntityFavouriteItemProjectionEntityTypeEnum) {
    EntityFavouriteItemProjectionEntityTypeEnum["INBOX"] = "INBOX";
    EntityFavouriteItemProjectionEntityTypeEnum["EMAIL"] = "EMAIL";
    EntityFavouriteItemProjectionEntityTypeEnum["ATTACHMENT"] = "ATTACHMENT";
    EntityFavouriteItemProjectionEntityTypeEnum["PHONE"] = "PHONE";
    EntityFavouriteItemProjectionEntityTypeEnum["SMS"] = "SMS";
})(EntityFavouriteItemProjectionEntityTypeEnum = exports.EntityFavouriteItemProjectionEntityTypeEnum || (exports.EntityFavouriteItemProjectionEntityTypeEnum = {}));
function EntityFavouriteItemProjectionFromJSON(json) {
    return EntityFavouriteItemProjectionFromJSONTyped(json, false);
}
exports.EntityFavouriteItemProjectionFromJSON = EntityFavouriteItemProjectionFromJSON;
function EntityFavouriteItemProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        entityType: json['entityType'],
        name: json['name'],
        id: json['id'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.EntityFavouriteItemProjectionFromJSONTyped = EntityFavouriteItemProjectionFromJSONTyped;
function EntityFavouriteItemProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        entityType: value.entityType,
        name: value.name,
        id: value.id,
        description: value.description,
    };
}
exports.EntityFavouriteItemProjectionToJSON = EntityFavouriteItemProjectionToJSON;
