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
exports.CreateDomainOptionsToJSON = exports.CreateDomainOptionsFromJSONTyped = exports.CreateDomainOptionsFromJSON = exports.CreateDomainOptionsDomainTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var CreateDomainOptionsDomainTypeEnum;
(function (CreateDomainOptionsDomainTypeEnum) {
    CreateDomainOptionsDomainTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    CreateDomainOptionsDomainTypeEnum["SMTP_DOMAIN"] = "SMTP_DOMAIN";
})(CreateDomainOptionsDomainTypeEnum = exports.CreateDomainOptionsDomainTypeEnum || (exports.CreateDomainOptionsDomainTypeEnum = {}));
function CreateDomainOptionsFromJSON(json) {
    return CreateDomainOptionsFromJSONTyped(json, false);
}
exports.CreateDomainOptionsFromJSON = CreateDomainOptionsFromJSON;
function CreateDomainOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        domain: json['domain'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        createdCatchAllInbox: !(0, runtime_1.exists)(json, 'createdCatchAllInbox')
            ? undefined
            : json['createdCatchAllInbox'],
        domainType: !(0, runtime_1.exists)(json, 'domainType') ? undefined : json['domainType'],
    };
}
exports.CreateDomainOptionsFromJSONTyped = CreateDomainOptionsFromJSONTyped;
function CreateDomainOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        domain: value.domain,
        description: value.description,
        createdCatchAllInbox: value.createdCatchAllInbox,
        domainType: value.domainType,
    };
}
exports.CreateDomainOptionsToJSON = CreateDomainOptionsToJSON;
