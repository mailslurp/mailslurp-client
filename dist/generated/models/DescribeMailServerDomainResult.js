"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeMailServerDomainResultToJSON = exports.DescribeMailServerDomainResultFromJSONTyped = exports.DescribeMailServerDomainResultFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function DescribeMailServerDomainResultFromJSON(json) {
    return DescribeMailServerDomainResultFromJSONTyped(json, false);
}
exports.DescribeMailServerDomainResultFromJSON = DescribeMailServerDomainResultFromJSON;
function DescribeMailServerDomainResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        mxRecords: json['mxRecords'].map(_1.NameServerRecordFromJSON),
        domain: json['domain'],
        message: !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.DescribeMailServerDomainResultFromJSONTyped = DescribeMailServerDomainResultFromJSONTyped;
function DescribeMailServerDomainResultToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        mxRecords: value.mxRecords.map(_1.NameServerRecordToJSON),
        domain: value.domain,
        message: value.message,
    };
}
exports.DescribeMailServerDomainResultToJSON = DescribeMailServerDomainResultToJSON;
