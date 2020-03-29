import Default, { MailSlurp } from '../src/index';

const mailslurpRequire = require('../dist/index').MailSlurp;

describe('importing client', () => {
    if (!process.env.API_KEY) {
        console.warn('Skipping integration test no API KEY');
        return;
    }
    test('that import was successful', () => {
        expect(MailSlurp).not.toBeNull();
        expect(Default).not.toBeNull();
    });
    test('client can be instantiated', () => {
        const client = new MailSlurp({ apiKey: process.env.API_KEY });
        expect(client).not.toBeNull();
        expect(client.createInbox).not.toBeNull();
    });
    test('default client can be instantiated', () => {
        const client = new Default({ apiKey: process.env.API_KEY });
        expect(client).not.toBeNull();
        expect(client.createInbox).not.toBeNull();
    });
    test('require client can be instantiated', async () => {
        const client = new mailslurpRequire({ apiKey: process.env.API_KEY });
        expect(client).not.toBeNull();
        expect(client.createInbox).not.toBeNull();
        const inbox = await client.createInbox();
        expect(inbox.emailAddress).toBeTruthy();
    });
});
