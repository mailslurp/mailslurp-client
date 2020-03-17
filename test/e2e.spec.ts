import MailSlurp from '../src/index';

describe('end to end', () => {
    it('can call api if key provided', async () => {
        if (process.env.API_KEY) {
            const mailslurp = new MailSlurp({ apiKey: process.env.API_KEY });
            const inbox = await mailslurp.createInbox();
            expect(inbox.id).toBeTruthy();
        } else {
            console.warn('Skipping end to end test no API_KEY found');
        }
    });
});
