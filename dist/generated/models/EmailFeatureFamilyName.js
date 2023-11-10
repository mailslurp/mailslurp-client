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
exports.EmailFeatureFamilyNameToJSON = exports.EmailFeatureFamilyNameFromJSONTyped = exports.EmailFeatureFamilyNameFromJSON = exports.EmailFeatureFamilyNameSlugEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var EmailFeatureFamilyNameSlugEnum;
(function (EmailFeatureFamilyNameSlugEnum) {
    EmailFeatureFamilyNameSlugEnum["aol"] = "aol";
    EmailFeatureFamilyNameSlugEnum["apple_mail"] = "apple-mail";
    EmailFeatureFamilyNameSlugEnum["fastmail"] = "fastmail";
    EmailFeatureFamilyNameSlugEnum["free_fr"] = "free-fr";
    EmailFeatureFamilyNameSlugEnum["gmail"] = "gmail";
    EmailFeatureFamilyNameSlugEnum["gmx"] = "gmx";
    EmailFeatureFamilyNameSlugEnum["hey"] = "hey";
    EmailFeatureFamilyNameSlugEnum["ionos_1and1"] = "ionos-1and1";
    EmailFeatureFamilyNameSlugEnum["laposte"] = "laposte";
    EmailFeatureFamilyNameSlugEnum["mail_ru"] = "mail-ru";
    EmailFeatureFamilyNameSlugEnum["microsoft"] = "microsoft";
    EmailFeatureFamilyNameSlugEnum["orange"] = "orange";
    EmailFeatureFamilyNameSlugEnum["outlook"] = "outlook";
    EmailFeatureFamilyNameSlugEnum["protonmail"] = "protonmail";
    EmailFeatureFamilyNameSlugEnum["rainloop"] = "rainloop";
    EmailFeatureFamilyNameSlugEnum["samsung_email"] = "samsung-email";
    EmailFeatureFamilyNameSlugEnum["sfr"] = "sfr";
    EmailFeatureFamilyNameSlugEnum["t_online_de"] = "t-online-de";
    EmailFeatureFamilyNameSlugEnum["thunderbird"] = "thunderbird";
    EmailFeatureFamilyNameSlugEnum["web_de"] = "web-de";
    EmailFeatureFamilyNameSlugEnum["yahoo"] = "yahoo";
})(EmailFeatureFamilyNameSlugEnum = exports.EmailFeatureFamilyNameSlugEnum || (exports.EmailFeatureFamilyNameSlugEnum = {}));
function EmailFeatureFamilyNameFromJSON(json) {
    return EmailFeatureFamilyNameFromJSONTyped(json, false);
}
exports.EmailFeatureFamilyNameFromJSON = EmailFeatureFamilyNameFromJSON;
function EmailFeatureFamilyNameFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        slug: json['slug'],
        name: json['name'],
    };
}
exports.EmailFeatureFamilyNameFromJSONTyped = EmailFeatureFamilyNameFromJSONTyped;
function EmailFeatureFamilyNameToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        slug: value.slug,
        name: value.name,
    };
}
exports.EmailFeatureFamilyNameToJSON = EmailFeatureFamilyNameToJSON;