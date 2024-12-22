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
import type { ServerEndpoints } from './ServerEndpoints';
import {
    ServerEndpointsFromJSON,
    ServerEndpointsFromJSONTyped,
    ServerEndpointsToJSON,
    ServerEndpointsToJSONTyped,
} from './ServerEndpoints';

/**
 * IMAP and SMTP server endpoints for MailSlurp
 * @export
 * @interface ImapSmtpAccessServers
 */
export interface ImapSmtpAccessServers {
    /**
     * 
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    imapServer: ServerEndpoints;
    /**
     * 
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    secureImapServer: ServerEndpoints;
    /**
     * 
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    smtpServer: ServerEndpoints;
    /**
     * 
     * @type {ServerEndpoints}
     * @memberof ImapSmtpAccessServers
     */
    secureSmtpServer: ServerEndpoints;
}

/**
 * Check if a given object implements the ImapSmtpAccessServers interface.
 */
export function instanceOfImapSmtpAccessServers(value: object): value is ImapSmtpAccessServers {
    if (!('imapServer' in value) || value['imapServer'] === undefined) return false;
    if (!('secureImapServer' in value) || value['secureImapServer'] === undefined) return false;
    if (!('smtpServer' in value) || value['smtpServer'] === undefined) return false;
    if (!('secureSmtpServer' in value) || value['secureSmtpServer'] === undefined) return false;
    return true;
}

export function ImapSmtpAccessServersFromJSON(json: any): ImapSmtpAccessServers {
    return ImapSmtpAccessServersFromJSONTyped(json, false);
}

export function ImapSmtpAccessServersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImapSmtpAccessServers {
    if (json == null) {
        return json;
    }
    return {
        
        'imapServer': ServerEndpointsFromJSON(json['imapServer']),
        'secureImapServer': ServerEndpointsFromJSON(json['secureImapServer']),
        'smtpServer': ServerEndpointsFromJSON(json['smtpServer']),
        'secureSmtpServer': ServerEndpointsFromJSON(json['secureSmtpServer']),
    };
}

export function ImapSmtpAccessServersToJSON(json: any): ImapSmtpAccessServers {
    return ImapSmtpAccessServersToJSONTyped(json, false);
}

export function ImapSmtpAccessServersToJSONTyped(value?: ImapSmtpAccessServers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'imapServer': ServerEndpointsToJSON(value['imapServer']),
        'secureImapServer': ServerEndpointsToJSON(value['secureImapServer']),
        'smtpServer': ServerEndpointsToJSON(value['smtpServer']),
        'secureSmtpServer': ServerEndpointsToJSON(value['secureSmtpServer']),
    };
}

