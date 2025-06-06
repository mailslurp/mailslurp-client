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
import * as runtime from '../runtime';
import { CreateGroupOptions, GroupContactsDto, GroupDto, GroupProjection, PageContactProjection, PageGroupProjection, UpdateGroupContacts } from '../models';
export interface AddContactsToGroupRequest {
    groupId: string;
    updateGroupContacts: UpdateGroupContacts;
}
export interface CreateGroupRequest {
    createGroupOptions: CreateGroupOptions;
}
export interface DeleteGroupRequest {
    groupId: string;
}
export interface GetAllGroupsRequest {
    page?: number;
    size?: number;
    sort?: GetAllGroupsSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetGroupRequest {
    groupId: string;
}
export interface GetGroupWithContactsRequest {
    groupId: string;
}
export interface GetGroupWithContactsPaginatedRequest {
    groupId: string;
    page?: number;
    size?: number;
    sort?: GetGroupWithContactsPaginatedSortEnum;
    since?: Date;
    before?: Date;
}
export interface RemoveContactsFromGroupRequest {
    groupId: string;
    updateGroupContacts: UpdateGroupContacts;
}
/**
 *
 */
export declare class GroupControllerApi extends runtime.BaseAPI {
    /**
     * Add contacts to a group
     */
    addContactsToGroupRaw(requestParameters: AddContactsToGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GroupContactsDto>>;
    /**
     * Add contacts to a group
     */
    addContactsToGroup(requestParameters: AddContactsToGroupRequest, initOverrides?: RequestInit): Promise<GroupContactsDto>;
    /**
     * Create a group
     */
    createGroupRaw(requestParameters: CreateGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GroupDto>>;
    /**
     * Create a group
     */
    createGroup(requestParameters: CreateGroupRequest, initOverrides?: RequestInit): Promise<GroupDto>;
    /**
     * Delete group
     */
    deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete group
     */
    deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get all Contact Groups in paginated format
     */
    getAllGroupsRaw(requestParameters: GetAllGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageGroupProjection>>;
    /**
     * Get all Contact Groups in paginated format
     */
    getAllGroups(requestParameters: GetAllGroupsRequest, initOverrides?: RequestInit): Promise<PageGroupProjection>;
    /**
     * Get group
     */
    getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GroupDto>>;
    /**
     * Get group
     */
    getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit): Promise<GroupDto>;
    /**
     * Get group and contacts belonging to it
     */
    getGroupWithContactsRaw(requestParameters: GetGroupWithContactsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GroupContactsDto>>;
    /**
     * Get group and contacts belonging to it
     */
    getGroupWithContacts(requestParameters: GetGroupWithContactsRequest, initOverrides?: RequestInit): Promise<GroupContactsDto>;
    /**
     * Get group and paginated contacts belonging to it
     */
    getGroupWithContactsPaginatedRaw(requestParameters: GetGroupWithContactsPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageContactProjection>>;
    /**
     * Get group and paginated contacts belonging to it
     */
    getGroupWithContactsPaginated(requestParameters: GetGroupWithContactsPaginatedRequest, initOverrides?: RequestInit): Promise<PageContactProjection>;
    /**
     * Get all groups
     */
    getGroupsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<GroupProjection>>>;
    /**
     * Get all groups
     */
    getGroups(initOverrides?: RequestInit): Promise<Array<GroupProjection>>;
    /**
     * Remove contacts from a group
     */
    removeContactsFromGroupRaw(requestParameters: RemoveContactsFromGroupRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GroupContactsDto>>;
    /**
     * Remove contacts from a group
     */
    removeContactsFromGroup(requestParameters: RemoveContactsFromGroupRequest, initOverrides?: RequestInit): Promise<GroupContactsDto>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllGroupsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetGroupWithContactsPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
