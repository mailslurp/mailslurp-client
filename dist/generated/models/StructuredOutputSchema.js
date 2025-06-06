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
exports.StructuredOutputSchemaToJSON = exports.StructuredOutputSchemaFromJSONTyped = exports.StructuredOutputSchemaFromJSON = exports.StructuredOutputSchemaTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var StructuredOutputSchemaTypeEnum;
(function (StructuredOutputSchemaTypeEnum) {
    StructuredOutputSchemaTypeEnum["string"] = "string";
    StructuredOutputSchemaTypeEnum["number"] = "number";
    StructuredOutputSchemaTypeEnum["integer"] = "integer";
    StructuredOutputSchemaTypeEnum["boolean"] = "boolean";
    StructuredOutputSchemaTypeEnum["object"] = "object";
    StructuredOutputSchemaTypeEnum["array"] = "array";
    StructuredOutputSchemaTypeEnum["null"] = "null";
})(StructuredOutputSchemaTypeEnum = exports.StructuredOutputSchemaTypeEnum || (exports.StructuredOutputSchemaTypeEnum = {}));
function StructuredOutputSchemaFromJSON(json) {
    return StructuredOutputSchemaFromJSONTyped(json, false);
}
exports.StructuredOutputSchemaFromJSON = StructuredOutputSchemaFromJSON;
function StructuredOutputSchemaFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        anyOf: !(0, runtime_1.exists)(json, 'anyOf')
            ? undefined
            : json['anyOf'] === null
                ? null
                : json['anyOf'].map(StructuredOutputSchemaFromJSON),
        _default: !(0, runtime_1.exists)(json, 'default') ? undefined : json['default'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        _enum: !(0, runtime_1.exists)(json, 'enum') ? undefined : json['enum'],
        example: !(0, runtime_1.exists)(json, 'example') ? undefined : json['example'],
        format: !(0, runtime_1.exists)(json, 'format') ? undefined : json['format'],
        items: !(0, runtime_1.exists)(json, 'items')
            ? undefined
            : StructuredOutputSchemaFromJSON(json['items']),
        maxItems: !(0, runtime_1.exists)(json, 'maxItems') ? undefined : json['maxItems'],
        minItems: !(0, runtime_1.exists)(json, 'minItems') ? undefined : json['minItems'],
        maxLength: !(0, runtime_1.exists)(json, 'maxLength') ? undefined : json['maxLength'],
        minLength: !(0, runtime_1.exists)(json, 'minLength') ? undefined : json['minLength'],
        pattern: !(0, runtime_1.exists)(json, 'pattern') ? undefined : json['pattern'],
        properties: !(0, runtime_1.exists)(json, 'properties')
            ? undefined
            : json['properties'] === null
                ? null
                : (0, runtime_1.mapValues)(json['properties'], StructuredOutputSchemaFromJSON),
        propertyOrdering: !(0, runtime_1.exists)(json, 'propertyOrdering')
            ? undefined
            : json['propertyOrdering'],
        required: !(0, runtime_1.exists)(json, 'required') ? undefined : json['required'],
        maxProperties: !(0, runtime_1.exists)(json, 'maxProperties')
            ? undefined
            : json['maxProperties'],
        minProperties: !(0, runtime_1.exists)(json, 'minProperties')
            ? undefined
            : json['minProperties'],
        maximum: !(0, runtime_1.exists)(json, 'maximum') ? undefined : json['maximum'],
        minimum: !(0, runtime_1.exists)(json, 'minimum') ? undefined : json['minimum'],
        nullable: !(0, runtime_1.exists)(json, 'nullable') ? undefined : json['nullable'],
        title: !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        type: !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.StructuredOutputSchemaFromJSONTyped = StructuredOutputSchemaFromJSONTyped;
function StructuredOutputSchemaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        anyOf: value.anyOf === undefined
            ? undefined
            : value.anyOf === null
                ? null
                : value.anyOf.map(StructuredOutputSchemaToJSON),
        default: value._default,
        description: value.description,
        enum: value._enum,
        example: value.example,
        format: value.format,
        items: StructuredOutputSchemaToJSON(value.items),
        maxItems: value.maxItems,
        minItems: value.minItems,
        maxLength: value.maxLength,
        minLength: value.minLength,
        pattern: value.pattern,
        properties: value.properties === undefined
            ? undefined
            : value.properties === null
                ? null
                : (0, runtime_1.mapValues)(value.properties, StructuredOutputSchemaToJSON),
        propertyOrdering: value.propertyOrdering,
        required: value.required,
        maxProperties: value.maxProperties,
        minProperties: value.minProperties,
        maximum: value.maximum,
        minimum: value.minimum,
        nullable: value.nullable,
        title: value.title,
        type: value.type,
    };
}
exports.StructuredOutputSchemaToJSON = StructuredOutputSchemaToJSON;
