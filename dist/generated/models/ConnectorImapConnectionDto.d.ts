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
 * @interface ConnectorImapConnectionDto
 */
export interface ConnectorImapConnectionDto {
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    connectorId: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    imapHost: string;
    /**
     *
     * @type {number}
     * @memberof ConnectorImapConnectionDto
     */
    imapPort?: number;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    imapUsername?: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    imapPassword?: string;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorImapConnectionDto
     */
    imapSsl?: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    selectFolder?: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    searchTerms?: string;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorImapConnectionDto
     */
    startTls?: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    proxyHost?: string;
    /**
     *
     * @type {number}
     * @memberof ConnectorImapConnectionDto
     */
    proxyPort?: number;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorImapConnectionDto
     */
    proxyEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    localHostName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ConnectorImapConnectionDto
     */
    mechanisms?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ConnectorImapConnectionDto
     */
    sslProtocols?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    sslTrust?: string;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorImapConnectionDto
     */
    enabled?: boolean;
    /**
     *
     * @type {Date}
     * @memberof ConnectorImapConnectionDto
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof ConnectorImapConnectionDto
     */
    id: string;
}
/**
 * Check if a given object implements the ConnectorImapConnectionDto interface.
 */
export declare function instanceOfConnectorImapConnectionDto(value: object): value is ConnectorImapConnectionDto;
export declare function ConnectorImapConnectionDtoFromJSON(json: any): ConnectorImapConnectionDto;
export declare function ConnectorImapConnectionDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorImapConnectionDto;
export declare function ConnectorImapConnectionDtoToJSON(json: any): ConnectorImapConnectionDto;
export declare function ConnectorImapConnectionDtoToJSONTyped(value?: ConnectorImapConnectionDto | null, ignoreDiscriminator?: boolean): any;
