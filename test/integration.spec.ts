import Default, {
    MailSlurp,
    InboxControllerApi,
    EmailControllerApi,
} from '../src/index';

const mailslurpRequire = require('../dist/index').MailSlurp;

describe('importing client', () => {
    test('that import was successful', () => {
        expect(InboxControllerApi).not.toBeNull();
        expect(EmailControllerApi).not.toBeNull();
        expect(MailSlurp).not.toBeNull();
        expect(Default).not.toBeNull();
    });

    test('client can be instantiated', () => {
        const apiKey = process.env.API_KEY || 'your-api-key';
        const client = new MailSlurp({ apiKey });
        expect(client).not.toBeNull();
        expect(client.createInbox).not.toBeNull();
        const clientDefault = new Default({ apiKey });
        expect(clientDefault).not.toBeNull();
        expect(clientDefault.createInbox).not.toBeNull();
        const clientRequire = new mailslurpRequire({ apiKey });
        expect(clientRequire).not.toBeNull();
        expect(clientRequire.createInbox).toBeDefined();
        expect(clientRequire.inboxController).toBeDefined();
    });
});
