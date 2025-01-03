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
exports.ConnectorSmtpConnectionDtoToJSON = exports.ConnectorSmtpConnectionDtoFromJSONTyped = exports.ConnectorSmtpConnectionDtoFromJSON = void 0;
var runtime_1 = require("../runtime");
function ConnectorSmtpConnectionDtoFromJSON(json) {
    return ConnectorSmtpConnectionDtoFromJSONTyped(json, false);
}
exports.ConnectorSmtpConnectionDtoFromJSON = ConnectorSmtpConnectionDtoFromJSON;
function ConnectorSmtpConnectionDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        connectorId: json['connectorId'],
        smtpHost: json['smtpHost'],
        smtpPort: !(0, runtime_1.exists)(json, 'smtpPort') ? undefined : json['smtpPort'],
        smtpUsername: !(0, runtime_1.exists)(json, 'smtpUsername')
            ? undefined
            : json['smtpUsername'],
        smtpPassword: !(0, runtime_1.exists)(json, 'smtpPassword')
            ? undefined
            : json['smtpPassword'],
        smtpSsl: !(0, runtime_1.exists)(json, 'smtpSsl') ? undefined : json['smtpSsl'],
        startTls: !(0, runtime_1.exists)(json, 'startTls') ? undefined : json['startTls'],
        smtpMechanisms: !(0, runtime_1.exists)(json, 'smtpMechanisms')
            ? undefined
            : json['smtpMechanisms'],
        localHostName: !(0, runtime_1.exists)(json, 'localHostName')
            ? undefined
            : json['localHostName'],
        proxyHost: !(0, runtime_1.exists)(json, 'proxyHost') ? undefined : json['proxyHost'],
        proxyPort: !(0, runtime_1.exists)(json, 'proxyPort') ? undefined : json['proxyPort'],
        proxyEnabled: !(0, runtime_1.exists)(json, 'proxyEnabled')
            ? undefined
            : json['proxyEnabled'],
        enabled: !(0, runtime_1.exists)(json, 'enabled') ? undefined : json['enabled'],
        sslTrust: !(0, runtime_1.exists)(json, 'sslTrust') ? undefined : json['sslTrust'],
        sslProtocols: !(0, runtime_1.exists)(json, 'sslProtocols')
            ? undefined
            : json['sslProtocols'],
        createdAt: new Date(json['createdAt']),
        id: json['id'],
    };
}
exports.ConnectorSmtpConnectionDtoFromJSONTyped = ConnectorSmtpConnectionDtoFromJSONTyped;
function ConnectorSmtpConnectionDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        connectorId: value.connectorId,
        smtpHost: value.smtpHost,
        smtpPort: value.smtpPort,
        smtpUsername: value.smtpUsername,
        smtpPassword: value.smtpPassword,
        smtpSsl: value.smtpSsl,
        startTls: value.startTls,
        smtpMechanisms: value.smtpMechanisms,
        localHostName: value.localHostName,
        proxyHost: value.proxyHost,
        proxyPort: value.proxyPort,
        proxyEnabled: value.proxyEnabled,
        enabled: value.enabled,
        sslTrust: value.sslTrust,
        sslProtocols: value.sslProtocols,
        createdAt: value.createdAt.toISOString(),
        id: value.id,
    };
}
exports.ConnectorSmtpConnectionDtoToJSON = ConnectorSmtpConnectionDtoToJSON;
