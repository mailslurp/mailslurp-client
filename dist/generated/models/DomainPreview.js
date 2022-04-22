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
exports.DomainPreviewToJSON = exports.DomainPreviewFromJSONTyped = exports.DomainPreviewFromJSON = exports.DomainPreviewDomainTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var DomainPreviewDomainTypeEnum;
(function (DomainPreviewDomainTypeEnum) {
    DomainPreviewDomainTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    DomainPreviewDomainTypeEnum["SMTP_DOMAIN"] = "SMTP_DOMAIN";
})(DomainPreviewDomainTypeEnum = exports.DomainPreviewDomainTypeEnum || (exports.DomainPreviewDomainTypeEnum = {}));
function DomainPreviewFromJSON(json) {
    return DomainPreviewFromJSONTyped(json, false);
}
exports.DomainPreviewFromJSON = DomainPreviewFromJSON;
function DomainPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        domain: json['domain'],
        catchAllInboxId: !(0, runtime_1.exists)(json, 'catchAllInboxId')
            ? undefined
            : json['catchAllInboxId'],
        createdAt: new Date(json['createdAt']),
        domainType: json['domainType'],
        isVerified: json['isVerified'],
    };
}
exports.DomainPreviewFromJSONTyped = DomainPreviewFromJSONTyped;
function DomainPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        domain: value.domain,
        catchAllInboxId: value.catchAllInboxId,
        createdAt: value.createdAt.toISOString(),
        domainType: value.domainType,
        isVerified: value.isVerified,
    };
}
exports.DomainPreviewToJSON = DomainPreviewToJSON;
