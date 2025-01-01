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
exports.DNSLookupResultsToJSON = exports.DNSLookupResultsFromJSONTyped = exports.DNSLookupResultsFromJSON = void 0;
var _1 = require("./");
function DNSLookupResultsFromJSON(json) {
    return DNSLookupResultsFromJSONTyped(json, false);
}
exports.DNSLookupResultsFromJSON = DNSLookupResultsFromJSON;
function DNSLookupResultsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        results: json['results'].map(_1.DNSLookupResultFromJSON),
    };
}
exports.DNSLookupResultsFromJSONTyped = DNSLookupResultsFromJSONTyped;
function DNSLookupResultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        results: value.results.map(_1.DNSLookupResultToJSON),
    };
}
exports.DNSLookupResultsToJSON = DNSLookupResultsToJSON;
