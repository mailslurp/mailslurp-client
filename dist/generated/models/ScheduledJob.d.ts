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
 * @interface ScheduledJob
 */
export interface ScheduledJob {
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    jobId: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    groupId: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    triggerId: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledJob
     */
    status: ScheduledJobStatusEnum;
    /**
     *
     * @type {Date}
     * @memberof ScheduledJob
     */
    sendAtTimestamp: Date;
    /**
     *
     * @type {Date}
     * @memberof ScheduledJob
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof ScheduledJob
     */
    updatedAt: Date;
}
/**
 * @export
 */
export declare const ScheduledJobStatusEnum: {
    readonly SUBMITTED: "SUBMITTED";
    readonly COMPLETED: "COMPLETED";
    readonly ABORTED: "ABORTED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
};
export type ScheduledJobStatusEnum = typeof ScheduledJobStatusEnum[keyof typeof ScheduledJobStatusEnum];
/**
 * Check if a given object implements the ScheduledJob interface.
 */
export declare function instanceOfScheduledJob(value: object): value is ScheduledJob;
export declare function ScheduledJobFromJSON(json: any): ScheduledJob;
export declare function ScheduledJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledJob;
export declare function ScheduledJobToJSON(json: any): ScheduledJob;
export declare function ScheduledJobToJSONTyped(value?: ScheduledJob | null, ignoreDiscriminator?: boolean): any;
