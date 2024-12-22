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
import type { ContactDto } from './ContactDto';
import type { GroupDto } from './GroupDto';
/**
 * Describes contacts attached to a contact group
 * @export
 * @interface GroupContactsDto
 */
export interface GroupContactsDto {
    /**
     *
     * @type {GroupDto}
     * @memberof GroupContactsDto
     */
    group: GroupDto;
    /**
     *
     * @type {Array<ContactDto>}
     * @memberof GroupContactsDto
     */
    contacts: Array<ContactDto>;
}
/**
 * Check if a given object implements the GroupContactsDto interface.
 */
export declare function instanceOfGroupContactsDto(value: object): value is GroupContactsDto;
export declare function GroupContactsDtoFromJSON(json: any): GroupContactsDto;
export declare function GroupContactsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupContactsDto;
export declare function GroupContactsDtoToJSON(json: any): GroupContactsDto;
export declare function GroupContactsDtoToJSONTyped(value?: GroupContactsDto | null, ignoreDiscriminator?: boolean): any;
