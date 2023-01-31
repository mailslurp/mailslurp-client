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
import { CreateDomainOptions, DomainDto, DomainPreview, InboxDto, UpdateDomainOptions } from '../models';
export interface AddDomainWildcardCatchAllRequest {
    id: string;
}
export interface CreateDomainRequest {
    createDomainOptions: CreateDomainOptions;
}
export interface DeleteDomainRequest {
    id: string;
}
export interface GetDomainRequest {
    id: string;
}
export interface GetDomainWildcardCatchAllInboxRequest {
    id: string;
}
export interface UpdateDomainRequest {
    id: string;
    updateDomainOptions: UpdateDomainOptions;
}
/**
 *
 */
export declare class DomainControllerApi extends runtime.BaseAPI {
    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     */
    addDomainWildcardCatchAllRaw(requestParameters: AddDomainWildcardCatchAllRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainDto>>;
    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     */
    addDomainWildcardCatchAll(requestParameters: AddDomainWildcardCatchAllRequest, initOverrides?: RequestInit): Promise<DomainDto>;
    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
     * Create Domain
     */
    createDomainRaw(requestParameters: CreateDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainDto>>;
    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
     * Create Domain
     */
    createDomain(requestParameters: CreateDomainRequest, initOverrides?: RequestInit): Promise<DomainDto>;
    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     */
    deleteDomainRaw(requestParameters: DeleteDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>>;
    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     */
    deleteDomain(requestParameters: DeleteDomainRequest, initOverrides?: RequestInit): Promise<Array<string>>;
    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     */
    getDomainRaw(requestParameters: GetDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainDto>>;
    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     */
    getDomain(requestParameters: GetDomainRequest, initOverrides?: RequestInit): Promise<DomainDto>;
    /**
     * Get the catch all inbox for a domain for missed emails
     * Get catch all wild card inbox for domain
     */
    getDomainWildcardCatchAllInboxRaw(requestParameters: GetDomainWildcardCatchAllInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Get the catch all inbox for a domain for missed emails
     * Get catch all wild card inbox for domain
     */
    getDomainWildcardCatchAllInbox(requestParameters: GetDomainWildcardCatchAllInboxRequest, initOverrides?: RequestInit): Promise<InboxDto>;
    /**
     * List all custom domains you have created
     * Get domains
     */
    getDomainsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<DomainPreview>>>;
    /**
     * List all custom domains you have created
     * Get domains
     */
    getDomains(initOverrides?: RequestInit): Promise<Array<DomainPreview>>;
    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     */
    updateDomainRaw(requestParameters: UpdateDomainRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainDto>>;
    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     */
    updateDomain(requestParameters: UpdateDomainRequest, initOverrides?: RequestInit): Promise<DomainDto>;
}
