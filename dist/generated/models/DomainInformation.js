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
exports.DomainInformationToJSON = exports.DomainInformationFromJSONTyped = exports.DomainInformationFromJSON = exports.DomainInformationDomainTypeEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var DomainInformationDomainTypeEnum;
(function (DomainInformationDomainTypeEnum) {
    DomainInformationDomainTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    DomainInformationDomainTypeEnum["SMTP_DOMAIN"] = "SMTP_DOMAIN";
})(DomainInformationDomainTypeEnum = exports.DomainInformationDomainTypeEnum || (exports.DomainInformationDomainTypeEnum = {}));
function DomainInformationFromJSON(json) {
    return DomainInformationFromJSONTyped(json, false);
}
exports.DomainInformationFromJSON = DomainInformationFromJSON;
function DomainInformationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        domainName: json['domainName'],
        verified: json['verified'],
        domainType: json['domainType'],
    };
}
exports.DomainInformationFromJSONTyped = DomainInformationFromJSONTyped;
function DomainInformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        domainName: value.domainName,
        verified: value.verified,
        domainType: value.domainType,
    };
}
exports.DomainInformationToJSON = DomainInformationToJSON;
