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
exports.CreateWebhookOptionsToJSON = exports.CreateWebhookOptionsFromJSONTyped = exports.CreateWebhookOptionsFromJSON = exports.CreateWebhookOptionsEventNameEnum = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
/**
* @export
* @enum {string}
*/
var CreateWebhookOptionsEventNameEnum;
(function (CreateWebhookOptionsEventNameEnum) {
    CreateWebhookOptionsEventNameEnum["EMAIL_RECEIVED"] = "EMAIL_RECEIVED";
    CreateWebhookOptionsEventNameEnum["NEW_EMAIL"] = "NEW_EMAIL";
    CreateWebhookOptionsEventNameEnum["NEW_CONTACT"] = "NEW_CONTACT";
    CreateWebhookOptionsEventNameEnum["NEW_ATTACHMENT"] = "NEW_ATTACHMENT";
    CreateWebhookOptionsEventNameEnum["EMAIL_OPENED"] = "EMAIL_OPENED";
    CreateWebhookOptionsEventNameEnum["EMAIL_READ"] = "EMAIL_READ";
})(CreateWebhookOptionsEventNameEnum = exports.CreateWebhookOptionsEventNameEnum || (exports.CreateWebhookOptionsEventNameEnum = {}));
function CreateWebhookOptionsFromJSON(json) {
    return CreateWebhookOptionsFromJSONTyped(json, false);
}
exports.CreateWebhookOptionsFromJSON = CreateWebhookOptionsFromJSON;
function CreateWebhookOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'basicAuth': !(0, runtime_1.exists)(json, 'basicAuth') ? undefined : (0, _1.BasicAuthOptionsFromJSON)(json['basicAuth']),
        'eventName': !(0, runtime_1.exists)(json, 'eventName') ? undefined : json['eventName'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.CreateWebhookOptionsFromJSONTyped = CreateWebhookOptionsFromJSONTyped;
function CreateWebhookOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'basicAuth': (0, _1.BasicAuthOptionsToJSON)(value.basicAuth),
        'eventName': value.eventName,
        'name': value.name,
        'url': value.url,
    };
}
exports.CreateWebhookOptionsToJSON = CreateWebhookOptionsToJSON;
