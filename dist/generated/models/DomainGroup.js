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
exports.DomainGroupLabelEnum = void 0;
exports.instanceOfDomainGroup = instanceOfDomainGroup;
exports.DomainGroupFromJSON = DomainGroupFromJSON;
exports.DomainGroupFromJSONTyped = DomainGroupFromJSONTyped;
exports.DomainGroupToJSON = DomainGroupToJSON;
exports.DomainGroupToJSONTyped = DomainGroupToJSONTyped;
var DomainInformation_1 = require("./DomainInformation");
/**
 * @export
 */
exports.DomainGroupLabelEnum = {
    DEFAULT: 'DEFAULT',
    DOMAIN_POOL: 'DOMAIN_POOL',
    CUSTOM: 'CUSTOM'
};
/**
 * Check if a given object implements the DomainGroup interface.
 */
function instanceOfDomainGroup(value) {
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('domains' in value) || value['domains'] === undefined)
        return false;
    return true;
}
function DomainGroupFromJSON(json) {
    return DomainGroupFromJSONTyped(json, false);
}
function DomainGroupFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'label': json['label'],
        'domains': (json['domains'].map(DomainInformation_1.DomainInformationFromJSON)),
    };
}
function DomainGroupToJSON(json) {
    return DomainGroupToJSONTyped(json, false);
}
function DomainGroupToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'label': value['label'],
        'domains': (value['domains'].map(DomainInformation_1.DomainInformationToJSON)),
    };
}
