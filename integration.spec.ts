import Default, { MailSlurp } from './index';

const mailslurpRequire = require('./index').MailSlurp;

const createNewEmailAddress = jest.fn();
const createInbox = jest.fn();
const sendEmailSimple = jest.fn();
const waitForLatestEmail = jest.fn();
const getEmailsPaginated = jest.fn();
const waitForNthEmail = jest.fn();
const waitForMatchingEmail = jest.fn();
const waitForEmailCount = jest.fn();

const callOptions = {
    headers: {
        'x-client': 'mailslurp-client-ts-js',
    },
};

jest.mock('mailslurp-swagger-sdk-ts', () => {
    return {
        CommonOperationsApi: function() {
            return {
                createNewEmailAddress,
                sendEmailSimple,
                waitForLatestEmail,
                waitForNthEmail,
                waitForMatchingEmail,
                waitForEmailCount,
            };
        },
        ExtraOperationsApi: function() {
            return {
                getEmailsPaginated,
                createInbox,
            };
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
        const client = new MailSlurp({ apiKey: 'test' });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
    test('default client can be instantiated', () => {
        const client = new Default({ apiKey: 'test' });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
    test('require client can be instantiated', () => {
        const client = new mailslurpRequire({ apiKey: 'test' });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
});

describe('functions are mapped correctly to common operations api', () => {
    test('can create a new email address', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        await client.createNewEmailAddress();
        expect(createNewEmailAddress).toHaveBeenCalledTimes(1);
    });
    test('can create a new email address with specific address', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        await client.createInbox('test@gmail.com');
        expect(createInbox).toHaveBeenCalledWith('test@gmail.com', callOptions);
    });
    test('can wrap a json error', async () => {
        createNewEmailAddress.mockRejectedValue({
            json: jest.fn().mockReturnValue('error-json'),
        });
        const client = new MailSlurp({ apiKey: 'test' });
        let threw = false;
        try {
            await client.createNewEmailAddress();
        } catch (e) {
            threw = true;
            expect(e).toEqual('error-json');
        }
        expect(threw).toBeTruthy();
        expect(createNewEmailAddress).toHaveBeenCalledTimes(1);
    });
    test('can wrap a non json error', async () => {
        createNewEmailAddress.mockRejectedValue('error-text');
        const client = new MailSlurp({ apiKey: 'test', attribution: 'test-attribution' });
        let threw = false;
        try {
            await client.createNewEmailAddress();
        } catch (e) {
            threw = true;
            expect(e).toEqual('error-text');
        }
        expect(threw).toBeTruthy();
        expect(createNewEmailAddress).toHaveBeenCalledWith({
            headers: {
                'x-attribution': 'test-attribution',
                "x-client": "mailslurp-client-ts-js"
            },
        });
    });
    test('can send email', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        const options = {
            to: [''],
        };
        await client.sendEmailSimple(options);
        expect(sendEmailSimple).toHaveBeenCalledWith(options, callOptions);
    });
    test('can get all emails', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        await client.getAllEmails();
        expect(getEmailsPaginated).toHaveBeenCalledWith(undefined, undefined, callOptions);
    });
    test('can get all emails with pagination', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        await client.getAllEmails(1, 2);
        expect(getEmailsPaginated).toHaveBeenCalledWith(1, 2, callOptions);
    });
    test('can wait for latest email', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        const inboxId = 'inboxId';
        const timeout = 123;
        await client.waitForLatestEmail(inboxId, timeout);
        expect(waitForLatestEmail).toHaveBeenCalledWith(inboxId, timeout, callOptions);
    });
    test('can wait for nth email', async () => {
        const client = new MailSlurp({ apiKey: 'test' });
        const inboxId = 'inboxId';
        const index = 2;
        await client.waitForNthEmail(inboxId, index);
        expect(waitForNthEmail).toHaveBeenCalledWith(inboxId, index, undefined, callOptions);
    });
    test('can wait for matching email', async () => {
        const client = new MailSlurp({ apiKey: 'test', attribution: 'test-attribution' });
        const options = {};
        const count = 2;
        const inboxId = 'inboxId';
        const timeout = 123;
        await client.waitForMatchingEmails(options, count, inboxId, timeout);
        expect(waitForMatchingEmail).toHaveBeenCalledWith(
            options,
            count,
            inboxId,
            timeout,
            {
                headers: {
                    'x-attribution': 'test-attribution',
                    'x-client': 'mailslurp-client-ts-js',
                },
            },
        );
    });
});
