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
import * as runtime from '../runtime';
import { ConnectorDto, ConnectorSyncEventDto, ConnectorSyncRequestResult, CreateConnectorOptions, PageConnector, PageConnectorSyncEvents } from '../models';
export interface CreateConnectorRequest {
    createConnectorOptions: CreateConnectorOptions;
}
export interface DeleteConnectorRequest {
    id: string;
}
export interface GetAllConnectorSyncEventsRequest {
    page?: number;
    size?: number;
    sort?: GetAllConnectorSyncEventsSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetConnectorRequest {
    id: string;
}
export interface GetConnectorSyncEventRequest {
    id: string;
}
export interface GetConnectorSyncEventsRequest {
    id: string;
    page?: number;
    size?: number;
    sort?: GetConnectorSyncEventsSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetConnectorsRequest {
    page?: number;
    size?: number;
    sort?: GetConnectorsSortEnum;
    since?: Date;
    before?: Date;
}
export interface SyncConnectorRequest {
    id: string;
}
export interface UpdateConnectorRequest {
    id: string;
    createConnectorOptions: CreateConnectorOptions;
}
/**
 *
 */
export declare class ConnectorControllerApi extends runtime.BaseAPI {
    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector
     */
    createConnectorRaw(requestParameters: CreateConnectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ConnectorDto>>;
    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector
     */
    createConnector(requestParameters: CreateConnectorRequest, initOverrides?: RequestInit): Promise<ConnectorDto>;
    /**
     * Delete all inbox connectors
     */
    deleteAllConnectorRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete all inbox connectors
     */
    deleteAllConnector(initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete an inbox connector
     */
    deleteConnectorRaw(requestParameters: DeleteConnectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an inbox connector
     */
    deleteConnector(requestParameters: DeleteConnectorRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get all inbox connector sync events
     */
    getAllConnectorSyncEventsRaw(requestParameters: GetAllConnectorSyncEventsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageConnectorSyncEvents>>;
    /**
     * Get all inbox connector sync events
     */
    getAllConnectorSyncEvents(requestParameters: GetAllConnectorSyncEventsRequest, initOverrides?: RequestInit): Promise<PageConnectorSyncEvents>;
    /**
     * Get an inbox connector
     */
    getConnectorRaw(requestParameters: GetConnectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ConnectorDto>>;
    /**
     * Get an inbox connector
     */
    getConnector(requestParameters: GetConnectorRequest, initOverrides?: RequestInit): Promise<ConnectorDto>;
    /**
     * Get an inbox connector sync event
     */
    getConnectorSyncEventRaw(requestParameters: GetConnectorSyncEventRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ConnectorSyncEventDto>>;
    /**
     * Get an inbox connector sync event
     */
    getConnectorSyncEvent(requestParameters: GetConnectorSyncEventRequest, initOverrides?: RequestInit): Promise<ConnectorSyncEventDto>;
    /**
     * Get an inbox connector sync events
     */
    getConnectorSyncEventsRaw(requestParameters: GetConnectorSyncEventsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageConnectorSyncEvents>>;
    /**
     * Get an inbox connector sync events
     */
    getConnectorSyncEvents(requestParameters: GetConnectorSyncEventsRequest, initOverrides?: RequestInit): Promise<PageConnectorSyncEvents>;
    /**
     * List inbox connectors that sync external emails to MailSlurp inboxes
     * Get inbox connectors
     */
    getConnectorsRaw(requestParameters: GetConnectorsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageConnector>>;
    /**
     * List inbox connectors that sync external emails to MailSlurp inboxes
     * Get inbox connectors
     */
    getConnectors(requestParameters: GetConnectorsRequest, initOverrides?: RequestInit): Promise<PageConnector>;
    /**
     * Sync an inbox connector
     */
    syncConnectorRaw(requestParameters: SyncConnectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ConnectorSyncRequestResult>>;
    /**
     * Sync an inbox connector
     */
    syncConnector(requestParameters: SyncConnectorRequest, initOverrides?: RequestInit): Promise<ConnectorSyncRequestResult>;
    /**
     * Update an inbox connector
     */
    updateConnectorRaw(requestParameters: UpdateConnectorRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ConnectorDto>>;
    /**
     * Update an inbox connector
     */
    updateConnector(requestParameters: UpdateConnectorRequest, initOverrides?: RequestInit): Promise<ConnectorDto>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllConnectorSyncEventsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetConnectorSyncEventsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetConnectorsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}