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
exports.DomainGroupsDtoToJSON = exports.DomainGroupsDtoFromJSONTyped = exports.DomainGroupsDtoFromJSON = void 0;
var _1 = require("./");
function DomainGroupsDtoFromJSON(json) {
    return DomainGroupsDtoFromJSONTyped(json, false);
}
exports.DomainGroupsDtoFromJSON = DomainGroupsDtoFromJSON;
function DomainGroupsDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        domainGroups: json['domainGroups'].map(_1.DomainGroupFromJSON),
    };
}
exports.DomainGroupsDtoFromJSONTyped = DomainGroupsDtoFromJSONTyped;
function DomainGroupsDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        domainGroups: value.domainGroups.map(_1.DomainGroupToJSON),
    };
}
exports.DomainGroupsDtoToJSON = DomainGroupsDtoToJSON;
