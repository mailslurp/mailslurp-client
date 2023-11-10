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
 * @interface EmailFeatureFamilyName
 */
export interface EmailFeatureFamilyName {
    /**
     *
     * @type {string}
     * @memberof EmailFeatureFamilyName
     */
    slug: EmailFeatureFamilyNameSlugEnum;
    /**
     *
     * @type {string}
     * @memberof EmailFeatureFamilyName
     */
    name: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum EmailFeatureFamilyNameSlugEnum {
    aol = "aol",
    apple_mail = "apple-mail",
    fastmail = "fastmail",
    free_fr = "free-fr",
    gmail = "gmail",
    gmx = "gmx",
    hey = "hey",
    ionos_1and1 = "ionos-1and1",
    laposte = "laposte",
    mail_ru = "mail-ru",
    microsoft = "microsoft",
    orange = "orange",
    outlook = "outlook",
    protonmail = "protonmail",
    rainloop = "rainloop",
    samsung_email = "samsung-email",
    sfr = "sfr",
    t_online_de = "t-online-de",
    thunderbird = "thunderbird",
    web_de = "web-de",
    yahoo = "yahoo"
}
export declare function EmailFeatureFamilyNameFromJSON(json: any): EmailFeatureFamilyName;
export declare function EmailFeatureFamilyNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailFeatureFamilyName;
export declare function EmailFeatureFamilyNameToJSON(value?: EmailFeatureFamilyName | null): any;
