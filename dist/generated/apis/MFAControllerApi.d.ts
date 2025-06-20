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
import { CreateTotpDeviceOtpAuthUrlOptions, TotpDeviceCodeDto, TotpDeviceDto, TotpDeviceOptionalDto } from '../models';
export interface CreateTotpDeviceForCustomRequest {
    createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions;
}
export interface CreateTotpDeviceForOtpAuthUrlRequest {
    createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions;
}
export interface GetTotpDeviceRequest {
    id: string;
}
export interface GetTotpDeviceByRequest {
    name?: string;
    issuer?: string;
    username?: string;
}
export interface GetTotpDeviceCodeRequest {
    id: string;
    at?: Date;
    minSecondsUntilExpire?: number;
}
/**
 *
 */
export declare class MFAControllerApi extends runtime.BaseAPI {
    /**
     * Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
     * Create a TOTP device from custom options
     */
    createTotpDeviceForCustomRaw(requestParameters: CreateTotpDeviceForCustomRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TotpDeviceDto>>;
    /**
     * Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
     * Create a TOTP device from custom options
     */
    createTotpDeviceForCustom(requestParameters: CreateTotpDeviceForCustomRequest, initOverrides?: RequestInit): Promise<TotpDeviceDto>;
    /**
     * Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
     * Create a TOTP device from an OTP Auth URL
     */
    createTotpDeviceForOtpAuthUrlRaw(requestParameters: CreateTotpDeviceForOtpAuthUrlRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TotpDeviceDto>>;
    /**
     * Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
     * Create a TOTP device from an OTP Auth URL
     */
    createTotpDeviceForOtpAuthUrl(requestParameters: CreateTotpDeviceForOtpAuthUrlRequest, initOverrides?: RequestInit): Promise<TotpDeviceDto>;
    /**
     * Get Time-Based One-Time Password (TOTP) device by its ID.
     * Get a TOTP device by ID
     */
    getTotpDeviceRaw(requestParameters: GetTotpDeviceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TotpDeviceDto>>;
    /**
     * Get Time-Based One-Time Password (TOTP) device by its ID.
     * Get a TOTP device by ID
     */
    getTotpDevice(requestParameters: GetTotpDeviceRequest, initOverrides?: RequestInit): Promise<TotpDeviceDto>;
    /**
     * Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
     * Get a TOTP device by username, issuer, or name. Returns empty if not found.
     */
    getTotpDeviceByRaw(requestParameters: GetTotpDeviceByRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TotpDeviceOptionalDto>>;
    /**
     * Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
     * Get a TOTP device by username, issuer, or name. Returns empty if not found.
     */
    getTotpDeviceBy(requestParameters: GetTotpDeviceByRequest, initOverrides?: RequestInit): Promise<TotpDeviceOptionalDto>;
    /**
     * Get Time-Based One-Time Password for a device by its ID.
     * Get a TOTP device code by device ID
     */
    getTotpDeviceCodeRaw(requestParameters: GetTotpDeviceCodeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TotpDeviceCodeDto>>;
    /**
     * Get Time-Based One-Time Password for a device by its ID.
     * Get a TOTP device code by device ID
     */
    getTotpDeviceCode(requestParameters: GetTotpDeviceCodeRequest, initOverrides?: RequestInit): Promise<TotpDeviceCodeDto>;
}
