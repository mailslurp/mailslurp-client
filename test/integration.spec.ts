// es imports
import MailSlurp_defaultImport, {
    MailSlurp as MailSlurp_import,
    MailSlurp,
} from '../src/index';

// node require style
const TIMEOUT = 60000;
jest.setTimeout(TIMEOUT);
const { MailSlurp: MailSlurp_nodeRequire } = require('../dist/index');

describe('different ways to import and instantiate a MailSlurp client', () => {
    test('a standard client can be instantiated by importing/requiring the default MailSlurp class', () => {
        const apiKey = process.env.API_KEY || 'your-api-key';
        // using imported mailslurp
        const client = new MailSlurp_import({ apiKey });
        expect(client?.createInbox).toBeTruthy();

        // using default import style
        const clientDefault = new MailSlurp_defaultImport({ apiKey });
        expect(clientDefault?.createInbox).toBeTruthy();
        //
        const clientRequire = new MailSlurp_nodeRequire({ apiKey });
        expect(clientRequire?.createInbox).toBeTruthy();
        expect(clientRequire?.inboxController).toBeTruthy();
    });

    test("the standard client doesn't have all functions so importing individual api controllers is recommended", () => {
        const apiKey = process.env.API_KEY || 'your-api-key';
        // use individual controllers for more methods
        const inboxController = new InboxControllerApi({ apiKey });
        const emailController = new EmailControllerApi({ apiKey });
        const waitController = new WaitForControllerApi({ apiKey });
        // etc
        expect(inboxController).toBeTruthy();
        expect(emailController).toBeTruthy();
        expect(waitController).toBeTruthy();
    });
});
describe('common usage patterns using default client', () => {
    integrationTest('can create inboxes', async (mailslurp: MailSlurp) => {
        // default
        const inbox = await mailslurp.createInbox();
        await mailslurp.deleteInbox(inbox.id);
        // with options
        const inboxWithOptions = await mailslurp.createInboxWithOptions({
            name: 'Test inbox',
            description: 'My inbox',
            inboxType: InboxTypeEnum.HTTPINBOX,
            useDomainPool: true,
            tags: ['test', 'ci'],
        });
        await mailslurp.deleteInbox(inboxWithOptions.id);
    });
});
describe('using controller instances for more features', () => {
    integrationTest('can wait for emails', async (mailslurp: MailSlurp) => {
        const now = new Date();
        const inbox = await mailslurp.inboxController.createInbox();
        const sent = await mailslurp.inboxController.sendEmailAndConfirm(
            inbox.id!,
            {
                to: [inbox.emailAddress!],
                subject: 'test',
                body: '<html>hello</html>',
                isHTML: true,
            }
        );
        expect(sent.to).toContain(inbox.emailAddress);

        // can receive sent email
        const email = await mailslurp.waitController.waitForLatestEmail({
            inboxId: inbox.id,
            since: now,
            sort: 'DESC',
            timeout: TIMEOUT,
            unreadOnly: true
        });
        expect(email.subject).toContain('test');
    });
});

/**
 * Helper function to run a test with a configured mailslurp client if an API_KEY env variable is present
 */
async function integrationTest(
    name: string,
    fn: (mailslurp: MailSlurp) => Promise<any>
) {
    const apiKey = process.env.API_KEY;
    test(name, async () => {
        if (apiKey && apiKey.length > 0) {
            await fn(new MailSlurp({ apiKey }));
        } else {
            console.warn('Skipping test with api key API KEY missing');
        }
    });
}
