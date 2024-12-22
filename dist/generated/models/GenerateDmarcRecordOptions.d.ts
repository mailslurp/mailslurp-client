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
 * @interface GenerateDmarcRecordOptions
 */
export interface GenerateDmarcRecordOptions {
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    domain: string;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    version: GenerateDmarcRecordOptionsVersionEnum;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    policy: GenerateDmarcRecordOptionsPolicyEnum;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    subdomainPolicy?: GenerateDmarcRecordOptionsSubdomainPolicyEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof GenerateDmarcRecordOptions
     */
    reportEmailAddress?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof GenerateDmarcRecordOptions
     */
    forensicEmailAddress?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof GenerateDmarcRecordOptions
     */
    percentage?: number;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    reportFormat?: GenerateDmarcRecordOptionsReportFormatEnum;
    /**
     *
     * @type {number}
     * @memberof GenerateDmarcRecordOptions
     */
    secondsBetweenReports?: number;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    adkim?: GenerateDmarcRecordOptionsAdkimEnum;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    aspf?: GenerateDmarcRecordOptionsAspfEnum;
    /**
     *
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    fo?: GenerateDmarcRecordOptionsFoEnum;
}
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsVersionEnum: {
    readonly DMARC1: "DMARC1";
};
export type GenerateDmarcRecordOptionsVersionEnum = typeof GenerateDmarcRecordOptionsVersionEnum[keyof typeof GenerateDmarcRecordOptionsVersionEnum];
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsPolicyEnum: {
    readonly NONE: "NONE";
    readonly QUARANTINE: "QUARANTINE";
    readonly REJECT: "REJECT";
};
export type GenerateDmarcRecordOptionsPolicyEnum = typeof GenerateDmarcRecordOptionsPolicyEnum[keyof typeof GenerateDmarcRecordOptionsPolicyEnum];
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsSubdomainPolicyEnum: {
    readonly NONE: "NONE";
    readonly QUARANTINE: "QUARANTINE";
    readonly REJECT: "REJECT";
};
export type GenerateDmarcRecordOptionsSubdomainPolicyEnum = typeof GenerateDmarcRecordOptionsSubdomainPolicyEnum[keyof typeof GenerateDmarcRecordOptionsSubdomainPolicyEnum];
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsReportFormatEnum: {
    readonly AFRF: "AFRF";
};
export type GenerateDmarcRecordOptionsReportFormatEnum = typeof GenerateDmarcRecordOptionsReportFormatEnum[keyof typeof GenerateDmarcRecordOptionsReportFormatEnum];
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsAdkimEnum: {
    readonly STRICT: "STRICT";
    readonly RELAXED: "RELAXED";
};
export type GenerateDmarcRecordOptionsAdkimEnum = typeof GenerateDmarcRecordOptionsAdkimEnum[keyof typeof GenerateDmarcRecordOptionsAdkimEnum];
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsAspfEnum: {
    readonly STRICT: "STRICT";
    readonly RELAXED: "RELAXED";
};
export type GenerateDmarcRecordOptionsAspfEnum = typeof GenerateDmarcRecordOptionsAspfEnum[keyof typeof GenerateDmarcRecordOptionsAspfEnum];
/**
 * @export
 */
export declare const GenerateDmarcRecordOptionsFoEnum: {
    readonly _0: "FO_0";
    readonly _1: "FO_1";
    readonly D: "FO_D";
    readonly S: "FO_S";
};
export type GenerateDmarcRecordOptionsFoEnum = typeof GenerateDmarcRecordOptionsFoEnum[keyof typeof GenerateDmarcRecordOptionsFoEnum];
/**
 * Check if a given object implements the GenerateDmarcRecordOptions interface.
 */
export declare function instanceOfGenerateDmarcRecordOptions(value: object): value is GenerateDmarcRecordOptions;
export declare function GenerateDmarcRecordOptionsFromJSON(json: any): GenerateDmarcRecordOptions;
export declare function GenerateDmarcRecordOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateDmarcRecordOptions;
export declare function GenerateDmarcRecordOptionsToJSON(json: any): GenerateDmarcRecordOptions;
export declare function GenerateDmarcRecordOptionsToJSONTyped(value?: GenerateDmarcRecordOptions | null, ignoreDiscriminator?: boolean): any;
