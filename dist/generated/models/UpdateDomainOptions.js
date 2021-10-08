"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDomainOptionsToJSON = exports.UpdateDomainOptionsFromJSONTyped = exports.UpdateDomainOptionsFromJSON = void 0;
var runtime_1 = require("../runtime");
function UpdateDomainOptionsFromJSON(json) {
    return UpdateDomainOptionsFromJSONTyped(json, false);
}
exports.UpdateDomainOptionsFromJSON = UpdateDomainOptionsFromJSON;
function UpdateDomainOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'catchAllInboxId': !(0, runtime_1.exists)(json, 'catchAllInboxId') ? undefined : json['catchAllInboxId'],
    };
}
exports.UpdateDomainOptionsFromJSONTyped = UpdateDomainOptionsFromJSONTyped;
function UpdateDomainOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'catchAllInboxId': value.catchAllInboxId,
    };
}
exports.UpdateDomainOptionsToJSON = UpdateDomainOptionsToJSON;
