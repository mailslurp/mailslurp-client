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
import type { CreateEmergencyAddressOptions, EmergencyAddress, EmergencyAddressDto, EmptyResponseDto, PagePhoneNumberProjection, PhoneNumberDto, PhonePlanAvailability, PhonePlanDto, SetPhoneFavouritedOptions, TestPhoneNumberOptions } from '../models/index';
export interface CreateEmergencyAddressRequest {
    createEmergencyAddressOptions: CreateEmergencyAddressOptions;
}
export interface DeleteEmergencyAddressRequest {
    addressId: string;
}
export interface DeletePhoneNumberRequest {
    phoneNumberId: string;
}
export interface GetEmergencyAddressRequest {
    addressId: string;
}
export interface GetPhoneNumberRequest {
    phoneNumberId: string;
}
export interface GetPhoneNumbersRequest {
    phoneCountry?: GetPhoneNumbersPhoneCountryEnum;
    page?: number;
    size?: number;
    sort?: GetPhoneNumbersSortEnum;
    since?: Date;
    before?: Date;
    search?: string;
    include?: Array<string>;
}
export interface SetPhoneFavouritedRequest {
    phoneNumberId: string;
    setPhoneFavouritedOptions: SetPhoneFavouritedOptions;
}
export interface TestPhoneNumberSendSmsRequest {
    phoneNumberId: string;
    testPhoneNumberOptions: TestPhoneNumberOptions;
    xTestId?: string;
}
/**
 *
 */
export declare class PhoneControllerApi extends runtime.BaseAPI {
    /**
     */
    createEmergencyAddressRaw(requestParameters: CreateEmergencyAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmergencyAddress>>;
    /**
     */
    createEmergencyAddress(requestParameters: CreateEmergencyAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmergencyAddress>;
    /**
     */
    deleteEmergencyAddressRaw(requestParameters: DeleteEmergencyAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmptyResponseDto>>;
    /**
     */
    deleteEmergencyAddress(requestParameters: DeleteEmergencyAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmptyResponseDto>;
    /**
     */
    deletePhoneNumberRaw(requestParameters: DeletePhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    deletePhoneNumber(requestParameters: DeletePhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    getEmergencyAddressRaw(requestParameters: GetEmergencyAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmergencyAddress>>;
    /**
     */
    getEmergencyAddress(requestParameters: GetEmergencyAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmergencyAddress>;
    /**
     */
    getEmergencyAddressesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EmergencyAddressDto>>>;
    /**
     */
    getEmergencyAddresses(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EmergencyAddressDto>>;
    /**
     */
    getPhoneNumberRaw(requestParameters: GetPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PhoneNumberDto>>;
    /**
     */
    getPhoneNumber(requestParameters: GetPhoneNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PhoneNumberDto>;
    /**
     */
    getPhoneNumbersRaw(requestParameters: GetPhoneNumbersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagePhoneNumberProjection>>;
    /**
     */
    getPhoneNumbers(requestParameters?: GetPhoneNumbersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagePhoneNumberProjection>;
    /**
     */
    getPhonePlansRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PhonePlanDto>>>;
    /**
     */
    getPhonePlans(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PhonePlanDto>>;
    /**
     */
    getPhonePlansAvailabilityRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PhonePlanAvailability>>;
    /**
     */
    getPhonePlansAvailability(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PhonePlanAvailability>;
    /**
     * Set and return new favorite state for a phone
     * Set phone favourited state
     */
    setPhoneFavouritedRaw(requestParameters: SetPhoneFavouritedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PhoneNumberDto>>;
    /**
     * Set and return new favorite state for a phone
     * Set phone favourited state
     */
    setPhoneFavourited(requestParameters: SetPhoneFavouritedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PhoneNumberDto>;
    /**
     */
    testPhoneNumberSendSmsRaw(requestParameters: TestPhoneNumberSendSmsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    testPhoneNumberSendSms(requestParameters: TestPhoneNumberSendSmsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 * @export
 */
export declare const GetPhoneNumbersPhoneCountryEnum: {
    readonly US: "US";
    readonly GB: "GB";
    readonly AU: "AU";
};
export type GetPhoneNumbersPhoneCountryEnum = typeof GetPhoneNumbersPhoneCountryEnum[keyof typeof GetPhoneNumbersPhoneCountryEnum];
/**
 * @export
 */
export declare const GetPhoneNumbersSortEnum: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
};
export type GetPhoneNumbersSortEnum = typeof GetPhoneNumbersSortEnum[keyof typeof GetPhoneNumbersSortEnum];
