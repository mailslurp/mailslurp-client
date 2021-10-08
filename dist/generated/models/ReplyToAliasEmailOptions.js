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
exports.ReplyToAliasEmailOptionsToJSON = exports.ReplyToAliasEmailOptionsFromJSONTyped = exports.ReplyToAliasEmailOptionsFromJSON = exports.ReplyToAliasEmailOptionsSendStrategyEnum = void 0;
var runtime_1 = require("../runtime");
/**
* @export
* @enum {string}
*/
var ReplyToAliasEmailOptionsSendStrategyEnum;
(function (ReplyToAliasEmailOptionsSendStrategyEnum) {
    ReplyToAliasEmailOptionsSendStrategyEnum["SINGLE_MESSAGE"] = "SINGLE_MESSAGE";
})(ReplyToAliasEmailOptionsSendStrategyEnum = exports.ReplyToAliasEmailOptionsSendStrategyEnum || (exports.ReplyToAliasEmailOptionsSendStrategyEnum = {}));
function ReplyToAliasEmailOptionsFromJSON(json) {
    return ReplyToAliasEmailOptionsFromJSONTyped(json, false);
}
exports.ReplyToAliasEmailOptionsFromJSON = ReplyToAliasEmailOptionsFromJSON;
function ReplyToAliasEmailOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attachments': !(0, runtime_1.exists)(json, 'attachments') ? undefined : json['attachments'],
        'body': !(0, runtime_1.exists)(json, 'body') ? undefined : json['body'],
        'charset': !(0, runtime_1.exists)(json, 'charset') ? undefined : json['charset'],
        'isHTML': !(0, runtime_1.exists)(json, 'isHTML') ? undefined : json['isHTML'],
        'sendStrategy': !(0, runtime_1.exists)(json, 'sendStrategy') ? undefined : json['sendStrategy'],
        'template': !(0, runtime_1.exists)(json, 'template') ? undefined : json['template'],
        'templateVariables': !(0, runtime_1.exists)(json, 'templateVariables') ? undefined : json['templateVariables'],
        'useInboxName': !(0, runtime_1.exists)(json, 'useInboxName') ? undefined : json['useInboxName'],
    };
}
exports.ReplyToAliasEmailOptionsFromJSONTyped = ReplyToAliasEmailOptionsFromJSONTyped;
function ReplyToAliasEmailOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attachments': value.attachments,
        'body': value.body,
        'charset': value.charset,
        'isHTML': value.isHTML,
        'sendStrategy': value.sendStrategy,
        'template': value.template,
        'templateVariables': value.templateVariables,
        'useInboxName': value.useInboxName,
    };
}
exports.ReplyToAliasEmailOptionsToJSON = ReplyToAliasEmailOptionsToJSON;
