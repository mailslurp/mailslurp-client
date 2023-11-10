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
/**
 *
 * @export
 * @interface CreateConnectorImapFetchOptions
 */
export interface CreateConnectorImapFetchOptions {
    /**
     *
     * @type {string}
     * @memberof CreateConnectorImapFetchOptions
     */
    selectFolder?: string;
    /**
     *
     * @type {string}
     * @memberof CreateConnectorImapFetchOptions
     */
    searchTerms?: string;
}
export declare function CreateConnectorImapFetchOptionsFromJSON(json: any): CreateConnectorImapFetchOptions;
export declare function CreateConnectorImapFetchOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateConnectorImapFetchOptions;
export declare function CreateConnectorImapFetchOptionsToJSON(value?: CreateConnectorImapFetchOptions | null): any;