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
import { AttachmentMetaData, ContentMatchOptions, CountDto, DownloadAttachmentDto, Email, EmailContentMatchResult, EmailLinksResult, EmailPreview, EmailPreviewUrls, EmailTextLinesResult, ForwardEmailOptions, GravatarUrl, ImapFlagOperationOptions, PageEmailProjection, RawEmailJson, ReplyToEmailOptions, SendEmailOptions, SentEmailDto, UnreadCount, ValidationDto } from '../models';
export interface ApplyImapFlagOperationRequest {
    emailId: string;
    imapFlagOperationOptions: ImapFlagOperationOptions;
}
export interface DeleteEmailRequest {
    emailId: string;
}
export interface DownloadAttachmentRequest {
    emailId: string;
    attachmentId: string;
    apiKey?: string;
}
export interface DownloadAttachmentBase64Request {
    emailId: string;
    attachmentId: string;
}
export interface DownloadBodyRequest {
    emailId: string;
}
export interface DownloadBodyBytesRequest {
    emailId: string;
}
export interface ForwardEmailRequest {
    emailId: string;
    forwardEmailOptions: ForwardEmailOptions;
}
export interface GetAttachmentMetaDataRequest {
    emailId: string;
    attachmentId: string;
}
export interface GetEmailRequest {
    emailId: string;
    decode?: boolean;
}
export interface GetEmailAttachmentsRequest {
    emailId: string;
}
export interface GetEmailContentMatchRequest {
    emailId: string;
    contentMatchOptions: ContentMatchOptions;
}
export interface GetEmailHTMLRequest {
    emailId: string;
    decode?: boolean;
}
export interface GetEmailHTMLQueryRequest {
    emailId: string;
    htmlSelector: string;
}
export interface GetEmailLinksRequest {
    emailId: string;
}
export interface GetEmailPreviewURLsRequest {
    emailId: string;
}
export interface GetEmailTextLinesRequest {
    emailId: string;
    decodeHtmlEntities?: boolean;
    lineSeparator?: string;
}
export interface GetEmailsPaginatedRequest {
    inboxId?: Array<string>;
    page?: number;
    size?: number;
    sort?: GetEmailsPaginatedSortEnum;
    unreadOnly?: boolean;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetGravatarUrlForEmailAddressRequest {
    emailAddress: string;
    size?: string;
}
export interface GetLatestEmailRequest {
    inboxIds?: Array<string>;
}
export interface GetLatestEmailInInbox1Request {
    inboxId: string;
}
export interface GetOrganizationEmailsPaginatedRequest {
    inboxId?: Array<string>;
    page?: number;
    size?: number;
    sort?: GetOrganizationEmailsPaginatedSortEnum;
    unreadOnly?: boolean;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetRawEmailContentsRequest {
    emailId: string;
}
export interface GetRawEmailJsonRequest {
    emailId: string;
}
export interface MarkAsReadRequest {
    emailId: string;
    read?: boolean;
}
export interface ReplyToEmailRequest {
    emailId: string;
    replyToEmailOptions: ReplyToEmailOptions;
}
export interface SendEmailSourceOptionalRequest {
    inboxId: string;
    sendEmailOptions: SendEmailOptions;
    useDomainPool?: boolean;
    virtualSend?: boolean;
}
export interface ValidateEmailRequest {
    emailId: string;
}
/**
 *
 */
export declare class EmailControllerApi extends runtime.BaseAPI {
    /**
     * Apply RFC3501 section-2.3.2 IMAP flag operations on an email
     * Set IMAP flags associated with a message. Only supports \'\\Seen\' flag.
     */
    applyImapFlagOperationRaw(requestParameters: ApplyImapFlagOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailPreview>>;
    /**
     * Apply RFC3501 section-2.3.2 IMAP flag operations on an email
     * Set IMAP flags associated with a message. Only supports \'\\Seen\' flag.
     */
    applyImapFlagOperation(requestParameters: ApplyImapFlagOperationRequest, initOverrides?: RequestInit): Promise<EmailPreview>;
    /**
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails in all inboxes.
     */
    deleteAllEmailsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails in all inboxes.
     */
    deleteAllEmails(initOverrides?: RequestInit): Promise<void>;
    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     */
    deleteEmailRaw(requestParameters: DeleteEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     */
    deleteEmail(requestParameters: DeleteEmailRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     */
    downloadAttachmentRaw(requestParameters: DownloadAttachmentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     */
    downloadAttachment(requestParameters: DownloadAttachmentRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     */
    downloadAttachmentBase64Raw(requestParameters: DownloadAttachmentBase64Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DownloadAttachmentDto>>;
    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     */
    downloadAttachmentBase64(requestParameters: DownloadAttachmentBase64Request, initOverrides?: RequestInit): Promise<DownloadAttachmentDto>;
    /**
     * Returns the specified email body for a given email as a string
     * Get email body as string. Returned as `plain/text` with content type header.
     */
    downloadBodyRaw(requestParameters: DownloadBodyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Returns the specified email body for a given email as a string
     * Get email body as string. Returned as `plain/text` with content type header.
     */
    downloadBody(requestParameters: DownloadBodyRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Returns the specified email body for a given email as a stream / array of bytes.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     */
    downloadBodyBytesRaw(requestParameters: DownloadBodyBytesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Returns the specified email body for a given email as a stream / array of bytes.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     */
    downloadBodyBytes(requestParameters: DownloadBodyBytesRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     */
    forwardEmailRaw(requestParameters: ForwardEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     */
    forwardEmail(requestParameters: ForwardEmailRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     */
    getAttachmentMetaDataRaw(requestParameters: GetAttachmentMetaDataRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AttachmentMetaData>>;
    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     */
    getAttachmentMetaData(requestParameters: GetAttachmentMetaDataRequest, initOverrides?: RequestInit): Promise<AttachmentMetaData>;
    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.
     */
    getEmailRaw(requestParameters: GetEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.
     */
    getEmail(requestParameters: GetEmailRequest, initOverrides?: RequestInit): Promise<Email>;
    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     */
    getEmailAttachmentsRaw(requestParameters: GetEmailAttachmentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<AttachmentMetaData>>>;
    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     */
    getEmailAttachments(requestParameters: GetEmailAttachmentsRequest, initOverrides?: RequestInit): Promise<Array<AttachmentMetaData>>;
    /**
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `[\'code is: 123456\', \'123456\']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     */
    getEmailContentMatchRaw(requestParameters: GetEmailContentMatchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailContentMatchResult>>;
    /**
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `[\'code is: 123456\', \'123456\']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     */
    getEmailContentMatch(requestParameters: GetEmailContentMatchRequest, initOverrides?: RequestInit): Promise<EmailContentMatchResult>;
    /**
     * Get email count
     */
    getEmailCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<CountDto>>;
    /**
     * Get email count
     */
    getEmailCount(initOverrides?: RequestInit): Promise<CountDto>;
    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML. For displaying emails in browser context.
     */
    getEmailHTMLRaw(requestParameters: GetEmailHTMLRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML. For displaying emails in browser context.
     */
    getEmailHTML(requestParameters: GetEmailHTMLRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     */
    getEmailHTMLQueryRaw(requestParameters: GetEmailHTMLQueryRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailTextLinesResult>>;
    /**
     * Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     */
    getEmailHTMLQuery(requestParameters: GetEmailHTMLQueryRequest, initOverrides?: RequestInit): Promise<EmailTextLinesResult>;
    /**
     * HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
     * Parse and return list of links found in an email (only works for HTML content)
     */
    getEmailLinksRaw(requestParameters: GetEmailLinksRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailLinksResult>>;
    /**
     * HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
     * Parse and return list of links found in an email (only works for HTML content)
     */
    getEmailLinks(requestParameters: GetEmailLinksRequest, initOverrides?: RequestInit): Promise<EmailLinksResult>;
    /**
     * Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get email URLs for viewing in browser or downloading
     */
    getEmailPreviewURLsRaw(requestParameters: GetEmailPreviewURLsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailPreviewUrls>>;
    /**
     * Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get email URLs for viewing in browser or downloading
     */
    getEmailPreviewURLs(requestParameters: GetEmailPreviewURLsRequest, initOverrides?: RequestInit): Promise<EmailPreviewUrls>;
    /**
     * Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     */
    getEmailTextLinesRaw(requestParameters: GetEmailTextLinesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailTextLinesResult>>;
    /**
     * Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     */
    getEmailTextLines(requestParameters: GetEmailTextLinesRequest, initOverrides?: RequestInit): Promise<EmailTextLinesResult>;
    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails in all inboxes in paginated form. Email API list all.
     */
    getEmailsPaginatedRaw(requestParameters: GetEmailsPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageEmailProjection>>;
    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails in all inboxes in paginated form. Email API list all.
     */
    getEmailsPaginated(requestParameters: GetEmailsPaginatedRequest, initOverrides?: RequestInit): Promise<PageEmailProjection>;
    /**
     * Get gravatar url for email address
     */
    getGravatarUrlForEmailAddressRaw(requestParameters: GetGravatarUrlForEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GravatarUrl>>;
    /**
     * Get gravatar url for email address
     */
    getGravatarUrlForEmailAddress(requestParameters: GetGravatarUrlForEmailAddressRequest, initOverrides?: RequestInit): Promise<GravatarUrl>;
    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in all inboxes. Most recently received.
     */
    getLatestEmailRaw(requestParameters: GetLatestEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in all inboxes. Most recently received.
     */
    getLatestEmail(requestParameters: GetLatestEmailRequest, initOverrides?: RequestInit): Promise<Email>;
    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     */
    getLatestEmailInInbox1Raw(requestParameters: GetLatestEmailInInbox1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     */
    getLatestEmailInInbox1(requestParameters: GetLatestEmailInInbox1Request, initOverrides?: RequestInit): Promise<Email>;
    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails. List team or shared test email accounts
     */
    getOrganizationEmailsPaginatedRaw(requestParameters: GetOrganizationEmailsPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageEmailProjection>>;
    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails. List team or shared test email accounts
     */
    getOrganizationEmailsPaginated(requestParameters: GetOrganizationEmailsPaginatedRequest, initOverrides?: RequestInit): Promise<PageEmailProjection>;
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     */
    getRawEmailContentsRaw(requestParameters: GetRawEmailContentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     */
    getRawEmailContents(requestParameters: GetRawEmailContentsRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     */
    getRawEmailJsonRaw(requestParameters: GetRawEmailJsonRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RawEmailJson>>;
    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     */
    getRawEmailJson(requestParameters: GetRawEmailJsonRequest, initOverrides?: RequestInit): Promise<RawEmailJson>;
    /**
     * Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread email count
     */
    getUnreadEmailCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnreadCount>>;
    /**
     * Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread email count
     */
    getUnreadEmailCount(initOverrides?: RequestInit): Promise<UnreadCount>;
    /**
     * Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
     * Mark an email as read on unread
     */
    markAsReadRaw(requestParameters: MarkAsReadRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailPreview>>;
    /**
     * Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
     * Mark an email as read on unread
     */
    markAsRead(requestParameters: MarkAsReadRequest, initOverrides?: RequestInit): Promise<EmailPreview>;
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    replyToEmailRaw(requestParameters: ReplyToEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    replyToEmail(requestParameters: ReplyToEmailRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
     * Send email
     */
    sendEmailSourceOptionalRaw(requestParameters: SendEmailSourceOptionalRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
     * Send email
     */
    sendEmailSourceOptional(requestParameters: SendEmailSourceOptionalRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
     * Validate email HTML contents
     */
    validateEmailRaw(requestParameters: ValidateEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ValidationDto>>;
    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
     * Validate email HTML contents
     */
    validateEmail(requestParameters: ValidateEmailRequest, initOverrides?: RequestInit): Promise<ValidationDto>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetEmailsPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetOrganizationEmailsPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
