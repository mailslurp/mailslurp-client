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
 * @interface GenerateMtaStsRecordOptions
 */
export interface GenerateMtaStsRecordOptions {
    /**
     *
     * @type {string}
     * @memberof GenerateMtaStsRecordOptions
     */
    host: string;
    /**
     *
     * @type {string}
     * @memberof GenerateMtaStsRecordOptions
     */
    version: GenerateMtaStsRecordOptionsVersionEnum;
    /**
     *
     * @type {string}
     * @memberof GenerateMtaStsRecordOptions
     */
    mode: GenerateMtaStsRecordOptionsModeEnum;
    /**
     *
     * @type {number}
     * @memberof GenerateMtaStsRecordOptions
     */
    ttl: number;
    /**
     *
     * @type {number}
     * @memberof GenerateMtaStsRecordOptions
     */
    maxAgeSeconds: number;
    /**
     *
     * @type {Array<string>}
     * @memberof GenerateMtaStsRecordOptions
     */
    mxRecords: Array<string>;
}
/**
 * @export
 */
export declare const GenerateMtaStsRecordOptionsVersionEnum: {
    readonly STSv1: "STSv1";
};
export type GenerateMtaStsRecordOptionsVersionEnum = typeof GenerateMtaStsRecordOptionsVersionEnum[keyof typeof GenerateMtaStsRecordOptionsVersionEnum];
/**
 * @export
 */
export declare const GenerateMtaStsRecordOptionsModeEnum: {
    readonly TESTING: "TESTING";
    readonly ENFORCE: "ENFORCE";
    readonly NONE: "NONE";
};
export type GenerateMtaStsRecordOptionsModeEnum = typeof GenerateMtaStsRecordOptionsModeEnum[keyof typeof GenerateMtaStsRecordOptionsModeEnum];
/**
 * Check if a given object implements the GenerateMtaStsRecordOptions interface.
 */
export declare function instanceOfGenerateMtaStsRecordOptions(value: object): value is GenerateMtaStsRecordOptions;
export declare function GenerateMtaStsRecordOptionsFromJSON(json: any): GenerateMtaStsRecordOptions;
export declare function GenerateMtaStsRecordOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateMtaStsRecordOptions;
export declare function GenerateMtaStsRecordOptionsToJSON(json: any): GenerateMtaStsRecordOptions;
export declare function GenerateMtaStsRecordOptionsToJSONTyped(value?: GenerateMtaStsRecordOptions | null, ignoreDiscriminator?: boolean): any;
