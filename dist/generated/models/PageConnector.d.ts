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
import { ConnectorProjection, PageableObject, SortObject } from './';
/**
 * Paginated inbox connectors. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageConnector
 */
export interface PageConnector {
    /**
     *
     * @type {Array<ConnectorProjection>}
     * @memberof PageConnector
     */
    content?: Array<ConnectorProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageConnector
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageConnector
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageConnector
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageConnector
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageConnector
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageConnector
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageConnector
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageConnector
     */
    sort?: SortObject;
    /**
     *
     * @type {number}
     * @memberof PageConnector
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageConnector
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageConnector
     */
    empty?: boolean;
}
export declare function PageConnectorFromJSON(json: any): PageConnector;
export declare function PageConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageConnector;
export declare function PageConnectorToJSON(value?: PageConnector | null): any;