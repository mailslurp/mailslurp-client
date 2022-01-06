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
exports.CreateInboxDtoToJSON = exports.CreateInboxDtoFromJSONTyped = exports.CreateInboxDtoFromJSON = exports.CreateInboxDtoInboxTypeEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var CreateInboxDtoInboxTypeEnum;
(function (CreateInboxDtoInboxTypeEnum) {
    CreateInboxDtoInboxTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    CreateInboxDtoInboxTypeEnum["SMTP_INBOX"] = "SMTP_INBOX";
})(CreateInboxDtoInboxTypeEnum = exports.CreateInboxDtoInboxTypeEnum || (exports.CreateInboxDtoInboxTypeEnum = {}));
function CreateInboxDtoFromJSON(json) {
    return CreateInboxDtoFromJSONTyped(json, false);
}
exports.CreateInboxDtoFromJSON = CreateInboxDtoFromJSON;
function CreateInboxDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailAddress: !(0, runtime_1.exists)(json, 'emailAddress')
            ? undefined
            : json['emailAddress'],
        name: !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        description: !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        useDomainPool: !(0, runtime_1.exists)(json, 'useDomainPool')
            ? undefined
            : json['useDomainPool'],
        tags: !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        expiresAt: !(0, runtime_1.exists)(json, 'expiresAt')
            ? undefined
            : new Date(json['expiresAt']),
        favourite: !(0, runtime_1.exists)(json, 'favourite') ? undefined : json['favourite'],
        expiresIn: !(0, runtime_1.exists)(json, 'expiresIn') ? undefined : json['expiresIn'],
        allowTeamAccess: !(0, runtime_1.exists)(json, 'allowTeamAccess')
            ? undefined
            : json['allowTeamAccess'],
        inboxType: !(0, runtime_1.exists)(json, 'inboxType') ? undefined : json['inboxType'],
    };
}
exports.CreateInboxDtoFromJSONTyped = CreateInboxDtoFromJSONTyped;
function CreateInboxDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        emailAddress: value.emailAddress,
        name: value.name,
        description: value.description,
        useDomainPool: value.useDomainPool,
        tags: value.tags,
        expiresAt: value.expiresAt === undefined ? undefined : value.expiresAt.toISOString(),
        favourite: value.favourite,
        expiresIn: value.expiresIn,
        allowTeamAccess: value.allowTeamAccess,
        inboxType: value.inboxType,
    };
}
exports.CreateInboxDtoToJSON = CreateInboxDtoToJSON;
