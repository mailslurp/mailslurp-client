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
exports.ConnectorSyncRequestResultExceptionCauseStackTraceToJSON = exports.ConnectorSyncRequestResultExceptionCauseStackTraceFromJSONTyped = exports.ConnectorSyncRequestResultExceptionCauseStackTraceFromJSON = void 0;
var runtime_1 = require("../runtime");
function ConnectorSyncRequestResultExceptionCauseStackTraceFromJSON(json) {
    return ConnectorSyncRequestResultExceptionCauseStackTraceFromJSONTyped(json, false);
}
exports.ConnectorSyncRequestResultExceptionCauseStackTraceFromJSON = ConnectorSyncRequestResultExceptionCauseStackTraceFromJSON;
function ConnectorSyncRequestResultExceptionCauseStackTraceFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        classLoaderName: !(0, runtime_1.exists)(json, 'classLoaderName')
            ? undefined
            : json['classLoaderName'],
        moduleName: !(0, runtime_1.exists)(json, 'moduleName') ? undefined : json['moduleName'],
        moduleVersion: !(0, runtime_1.exists)(json, 'moduleVersion')
            ? undefined
            : json['moduleVersion'],
        methodName: !(0, runtime_1.exists)(json, 'methodName') ? undefined : json['methodName'],
        fileName: !(0, runtime_1.exists)(json, 'fileName') ? undefined : json['fileName'],
        lineNumber: !(0, runtime_1.exists)(json, 'lineNumber') ? undefined : json['lineNumber'],
        nativeMethod: !(0, runtime_1.exists)(json, 'nativeMethod')
            ? undefined
            : json['nativeMethod'],
        className: !(0, runtime_1.exists)(json, 'className') ? undefined : json['className'],
    };
}
exports.ConnectorSyncRequestResultExceptionCauseStackTraceFromJSONTyped = ConnectorSyncRequestResultExceptionCauseStackTraceFromJSONTyped;
function ConnectorSyncRequestResultExceptionCauseStackTraceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        classLoaderName: value.classLoaderName,
        moduleName: value.moduleName,
        moduleVersion: value.moduleVersion,
        methodName: value.methodName,
        fileName: value.fileName,
        lineNumber: value.lineNumber,
        nativeMethod: value.nativeMethod,
        className: value.className,
    };
}
exports.ConnectorSyncRequestResultExceptionCauseStackTraceToJSON = ConnectorSyncRequestResultExceptionCauseStackTraceToJSON;