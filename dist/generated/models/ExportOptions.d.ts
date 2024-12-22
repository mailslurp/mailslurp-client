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
 * Options for exporting user data
 * @export
 * @interface ExportOptions
 */
export interface ExportOptions {
    /**
     *
     * @type {string}
     * @memberof ExportOptions
     */
    outputFormat: ExportOptionsOutputFormatEnum;
    /**
     *
     * @type {boolean}
     * @memberof ExportOptions
     */
    excludePreviouslyExported?: boolean | null;
    /**
     *
     * @type {Date}
     * @memberof ExportOptions
     */
    createdEarliestTime?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof ExportOptions
     */
    createdOldestTime?: Date | null;
    /**
     *
     * @type {string}
     * @memberof ExportOptions
     */
    filter?: string | null;
    /**
     *
     * @type {string}
     * @memberof ExportOptions
     */
    listSeparatorToken?: string | null;
}
/**
 * @export
 */
export declare const ExportOptionsOutputFormatEnum: {
    readonly DEFAULT: "CSV_DEFAULT";
    readonly EXCEL: "CSV_EXCEL";
};
export type ExportOptionsOutputFormatEnum = typeof ExportOptionsOutputFormatEnum[keyof typeof ExportOptionsOutputFormatEnum];
/**
 * Check if a given object implements the ExportOptions interface.
 */
export declare function instanceOfExportOptions(value: object): value is ExportOptions;
export declare function ExportOptionsFromJSON(json: any): ExportOptions;
export declare function ExportOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportOptions;
export declare function ExportOptionsToJSON(json: any): ExportOptions;
export declare function ExportOptionsToJSONTyped(value?: ExportOptions | null, ignoreDiscriminator?: boolean): any;
