import Default, { MailSlurp } from './index';

const apiKey = process.env.API_KEY;
const mailslurpRequire = require('./index').MailSlurp;

const createInbox = jest.fn();
const sendEmail = jest.fn();
const waitForLatestEmail = jest.fn();
const getEmailsPaginated = jest.fn();
const waitForNthEmail = jest.fn();
const waitForMatchingEmail = jest.fn();
const waitForEmailCount = jest.fn();

jest.mock('mailslurp-swagger-sdk-ts', () => {
    return {
        Configuration: function() {
            return {};
        },
        CommonActionsControllerApi: function() {
            return {};
        },
        WaitForControllerApi: function() {
            return {
                waitForLatestEmail,
                waitForNthEmail,
                waitForMatchingEmail,
                waitForEmailCount,
            };
        },
        EmailControllerApi: function() {
            return {
                getEmailsPaginated,
            };
        },
        InboxControllerApi: function() {
            return {
                createInbox,
                sendEmail,
            };
        },
        DomainControllerApi: function() {
            return {};
        },
        AttachmentControllerApi: function() {
            return {};
        },
        BulkActionsControllerApi: function() {
            return {};
        },
        ContactControllerApi: function() {
            return {};
        },
        TemplateControllerApi: function() {
            return {};
        },
        GroupControllerApi: function() {
            return {};
        },
        WebhookControllerApi: function() {
            return {};
        },
    };
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe('importing client', () => {
    test('that import was successful', () => {
        expect(MailSlurp).not.toBeNull();
        expect(Default).not.toBeNull();
    });
    test('client can be instantiated', () => {
        const client = new MailSlurp({ apiKey });
        expect(client).not.toBeNull();
        expect(client.createInbox).not.toBeNull();
    });
    test('default client can be instantiated', () => {
        const client = new Default({ apiKey: apiKey });
        expect(client).not.toBeNull();
        expect(client.createInbox).not.toBeNull();
    });
    test('require client can be instantiated', () => {
        const client = new mailslurpRequire({ apiKey: apiKey });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
});

describe('functions are mapped correctly to common operations api', () => {
    test('can create a new email address', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        await client.createInbox();
        expect(createInbox).toHaveBeenCalledTimes(1);
    });
    test('can create a new email address with specific address', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        await client.createInbox('test@gmail.com');
        expect(createInbox).toHaveBeenCalledWith({
            description: undefined,
            emailAddress: 'test@gmail.com',
            expiresAt: undefined,
            favourite: undefined,
            name: undefined,
            tags: undefined,
        });
    });
    test('can wrap a json error', async () => {
        createInbox.mockRejectedValue({
            json: jest.fn().mockReturnValue('error-json'),
        });
        const client = new MailSlurp({ apiKey: apiKey });
        let threw = false;
        try {
            await client.createInbox();
        } catch (e) {
            threw = true;
            expect(e).toEqual('error-json');
        }
        expect(threw).toBeTruthy();
        expect(createInbox).toHaveBeenCalledTimes(1);
    });
    test('can wrap a non json error', async () => {
        createInbox.mockRejectedValue('error-text');
        const client = new MailSlurp({
            apiKey: apiKey,
            attribution: 'test-attribution',
        });
        let threw = false;
        try {
            await client.createInbox();
        } catch (e) {
            threw = true;
            expect(e).toEqual('error-text');
        }
        expect(threw).toBeTruthy();
        expect(createInbox).toHaveBeenCalledWith({
            description: undefined,
            emailAddress: undefined,
            expiresAt: undefined,
            favourite: undefined,
            name: undefined,
            tags: undefined,
        });
    });
    test('can send email', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        const inboxId = '';
        const options = {
            to: [''],
        };
        await client.sendEmail(inboxId, options);
        expect(sendEmail).toHaveBeenCalledWith({
            inboxId,
            sendEmailOptions: options,
        });
    });
    test('can get all emails', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        await client.getAllEmails();
        expect(getEmailsPaginated).toHaveBeenCalledWith({
            inboxId: undefined,
            page: undefined,
            size: undefined,
            sort: undefined,
            unreadOnly: undefined,
        });
    });
    test('can get all emails with pagination', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        await client.getAllEmails(1, 2);
        expect(getEmailsPaginated).toHaveBeenCalledWith({
            page: 1,
            size: 2,
            inboxId: undefined,
            sort: undefined,
            unreadOnly: undefined,
        });
    });
    test('can wait for latest email', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        const inboxId = 'inboxId';
        const timeout = 123;
        await client.waitForLatestEmail(inboxId, timeout);
        expect(waitForLatestEmail).toHaveBeenCalledWith({
            inboxId,
            timeout,
            unreadOnly: undefined,
        });
    });
    test('can wait for nth email', async () => {
        const client = new MailSlurp({ apiKey: apiKey });
        const inboxId = 'inboxId';
        const index = 2;
        await client.waitForNthEmail(inboxId, index);
        expect(waitForNthEmail).toHaveBeenCalledWith({ inboxId, index });
    });
    test('can wait for matching email', async () => {
        const client = new MailSlurp({
            apiKey: apiKey,
            attribution: 'test-attribution',
        });
        const options = {};
        const count = 2;
        const inboxId = 'inboxId';
        const timeout = 123;
        await client.waitForMatchingEmails(options, count, inboxId, timeout);
        expect(waitForMatchingEmail).toHaveBeenCalledWith({
            count,
            inboxId,
            timeout,
            matchOptions: {},
            unreadOnly: undefined,
        });
    });
});
