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
exports.CreateAITransformerMappingOptionsToJSON = exports.CreateAITransformerMappingOptionsFromJSONTyped = exports.CreateAITransformerMappingOptionsFromJSON = exports.CreateAITransformerMappingOptionsTriggerSelectorEnum = exports.CreateAITransformerMappingOptionsContentSelectorEnum = exports.CreateAITransformerMappingOptionsEntityTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var CreateAITransformerMappingOptionsEntityTypeEnum;
(function (CreateAITransformerMappingOptionsEntityTypeEnum) {
    CreateAITransformerMappingOptionsEntityTypeEnum["INBOX"] = "INBOX";
    CreateAITransformerMappingOptionsEntityTypeEnum["PHONE"] = "PHONE";
})(CreateAITransformerMappingOptionsEntityTypeEnum = exports.CreateAITransformerMappingOptionsEntityTypeEnum || (exports.CreateAITransformerMappingOptionsEntityTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var CreateAITransformerMappingOptionsContentSelectorEnum;
(function (CreateAITransformerMappingOptionsContentSelectorEnum) {
    CreateAITransformerMappingOptionsContentSelectorEnum["RAW"] = "RAW";
    CreateAITransformerMappingOptionsContentSelectorEnum["BODY"] = "BODY";
    CreateAITransformerMappingOptionsContentSelectorEnum["BODY_ATTACHMENTS"] = "BODY_ATTACHMENTS";
})(CreateAITransformerMappingOptionsContentSelectorEnum = exports.CreateAITransformerMappingOptionsContentSelectorEnum || (exports.CreateAITransformerMappingOptionsContentSelectorEnum = {}));
/**
 * @export
 * @enum {string}
 */
var CreateAITransformerMappingOptionsTriggerSelectorEnum;
(function (CreateAITransformerMappingOptionsTriggerSelectorEnum) {
    CreateAITransformerMappingOptionsTriggerSelectorEnum["MESSAGE"] = "PER_MESSAGE";
    CreateAITransformerMappingOptionsTriggerSelectorEnum["ATTACHMENT"] = "PER_ATTACHMENT";
})(CreateAITransformerMappingOptionsTriggerSelectorEnum = exports.CreateAITransformerMappingOptionsTriggerSelectorEnum || (exports.CreateAITransformerMappingOptionsTriggerSelectorEnum = {}));
function CreateAITransformerMappingOptionsFromJSON(json) {
    return CreateAITransformerMappingOptionsFromJSONTyped(json, false);
}
exports.CreateAITransformerMappingOptionsFromJSON = CreateAITransformerMappingOptionsFromJSON;
function CreateAITransformerMappingOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json['name'],
        aiTransformId: json['aiTransformId'],
        entityId: json['entityId'],
        entityType: json['entityType'],
        contentSelector: !(0, runtime_1.exists)(json, 'contentSelector')
            ? undefined
            : json['contentSelector'],
        triggerSelector: !(0, runtime_1.exists)(json, 'triggerSelector')
            ? undefined
            : json['triggerSelector'],
        spreadRootArray: !(0, runtime_1.exists)(json, 'spreadRootArray')
            ? undefined
            : json['spreadRootArray'],
    };
}
exports.CreateAITransformerMappingOptionsFromJSONTyped = CreateAITransformerMappingOptionsFromJSONTyped;
function CreateAITransformerMappingOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        aiTransformId: value.aiTransformId,
        entityId: value.entityId,
        entityType: value.entityType,
        contentSelector: value.contentSelector,
        triggerSelector: value.triggerSelector,
        spreadRootArray: value.spreadRootArray,
    };
}
exports.CreateAITransformerMappingOptionsToJSON = CreateAITransformerMappingOptionsToJSON;
