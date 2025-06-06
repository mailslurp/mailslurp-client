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
exports.ReputationItemProjectionToJSON = exports.ReputationItemProjectionFromJSONTyped = exports.ReputationItemProjectionFromJSON = exports.ReputationItemProjectionSeverityEnum = exports.ReputationItemProjectionReputationTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var ReputationItemProjectionReputationTypeEnum;
(function (ReputationItemProjectionReputationTypeEnum) {
    ReputationItemProjectionReputationTypeEnum["COMPLAINT"] = "COMPLAINT";
    ReputationItemProjectionReputationTypeEnum["BOUNCE"] = "BOUNCE";
})(ReputationItemProjectionReputationTypeEnum = exports.ReputationItemProjectionReputationTypeEnum || (exports.ReputationItemProjectionReputationTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var ReputationItemProjectionSeverityEnum;
(function (ReputationItemProjectionSeverityEnum) {
    ReputationItemProjectionSeverityEnum["INFO"] = "INFO";
    ReputationItemProjectionSeverityEnum["WARNING"] = "WARNING";
    ReputationItemProjectionSeverityEnum["DANGER"] = "DANGER";
})(ReputationItemProjectionSeverityEnum = exports.ReputationItemProjectionSeverityEnum || (exports.ReputationItemProjectionSeverityEnum = {}));
function ReputationItemProjectionFromJSON(json) {
    return ReputationItemProjectionFromJSONTyped(json, false);
}
exports.ReputationItemProjectionFromJSON = ReputationItemProjectionFromJSON;
function ReputationItemProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        recipient: !(0, runtime_1.exists)(json, 'recipient') ? undefined : json['recipient'],
        reputationType: json['reputationType'],
        id: json['id'],
        severity: json['severity'],
        source: !(0, runtime_1.exists)(json, 'source') ? undefined : json['source'],
    };
}
exports.ReputationItemProjectionFromJSONTyped = ReputationItemProjectionFromJSONTyped;
function ReputationItemProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        recipient: value.recipient,
        reputationType: value.reputationType,
        id: value.id,
        severity: value.severity,
        source: value.source,
    };
}
exports.ReputationItemProjectionToJSON = ReputationItemProjectionToJSON;
