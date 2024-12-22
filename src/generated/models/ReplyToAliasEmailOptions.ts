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

import { mapValues } from '../runtime';
/**
 * Options for replying to an alias email using the alias inbox
 * @export
 * @interface ReplyToAliasEmailOptions
 */
export interface ReplyToAliasEmailOptions {
    /**
     * Body of the reply email you want to send
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    body: string;
    /**
     * Is the reply HTML
     * @type {boolean}
     * @memberof ReplyToAliasEmailOptions
     */
    isHTML: boolean;
    /**
     * The charset that your message should be sent with. Optional. Default is UTF-8
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    charset?: string | null;
    /**
     * List of uploaded attachments to send with the reply. Optional.
     * @type {Array<string | null>}
     * @memberof ReplyToAliasEmailOptions
     */
    attachments?: Array<string | null> | null;
    /**
     * Template variables if using a template
     * @type {{ [key: string]: object | null; }}
     * @memberof ReplyToAliasEmailOptions
     */
    templateVariables?: { [key: string]: object | null; } | null;
    /**
     * Template ID to use instead of body. Will use template variable map to fill defined variable slots.
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    template?: string | null;
    /**
     * How an email should be sent based on its recipients
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    sendStrategy?: ReplyToAliasEmailOptionsSendStrategyEnum | null;
    /**
     * Optional custom headers
     * @type {{ [key: string]: string | null; }}
     * @memberof ReplyToAliasEmailOptions
     */
    customHeaders?: { [key: string]: string | null; } | null;
    /**
     * Optionally use inbox name as display name for sender email address
     * @type {boolean}
     * @memberof ReplyToAliasEmailOptions
     */
    useInboxName?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReplyToAliasEmailOptions
     */
    html?: boolean;
}


/**
 * @export
 */
export const ReplyToAliasEmailOptionsSendStrategyEnum = {
    SINGLE_MESSAGE: 'SINGLE_MESSAGE'
} as const;
export type ReplyToAliasEmailOptionsSendStrategyEnum = typeof ReplyToAliasEmailOptionsSendStrategyEnum[keyof typeof ReplyToAliasEmailOptionsSendStrategyEnum];


/**
 * Check if a given object implements the ReplyToAliasEmailOptions interface.
 */
export function instanceOfReplyToAliasEmailOptions(value: object): value is ReplyToAliasEmailOptions {
    if (!('body' in value) || value['body'] === undefined) return false;
    if (!('isHTML' in value) || value['isHTML'] === undefined) return false;
    return true;
}

export function ReplyToAliasEmailOptionsFromJSON(json: any): ReplyToAliasEmailOptions {
    return ReplyToAliasEmailOptionsFromJSONTyped(json, false);
}

export function ReplyToAliasEmailOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReplyToAliasEmailOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'],
        'isHTML': json['isHTML'],
        'charset': json['charset'] == null ? undefined : json['charset'],
        'attachments': json['attachments'] == null ? undefined : json['attachments'],
        'templateVariables': json['templateVariables'] == null ? undefined : json['templateVariables'],
        'template': json['template'] == null ? undefined : json['template'],
        'sendStrategy': json['sendStrategy'] == null ? undefined : json['sendStrategy'],
        'customHeaders': json['customHeaders'] == null ? undefined : json['customHeaders'],
        'useInboxName': json['useInboxName'] == null ? undefined : json['useInboxName'],
        'html': json['html'] == null ? undefined : json['html'],
    };
}

export function ReplyToAliasEmailOptionsToJSON(json: any): ReplyToAliasEmailOptions {
    return ReplyToAliasEmailOptionsToJSONTyped(json, false);
}

export function ReplyToAliasEmailOptionsToJSONTyped(value?: ReplyToAliasEmailOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'body': value['body'],
        'isHTML': value['isHTML'],
        'charset': value['charset'],
        'attachments': value['attachments'],
        'templateVariables': value['templateVariables'],
        'template': value['template'],
        'sendStrategy': value['sendStrategy'],
        'customHeaders': value['customHeaders'],
        'useInboxName': value['useInboxName'],
        'html': value['html'],
    };
}

