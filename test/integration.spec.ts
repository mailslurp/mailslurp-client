// es imports
import { integrationTest, phoneTest } from './_helpers';
import {
  Configuration,
  EmailControllerApi,
  GetPhoneNumbersPhoneCountryEnum,
  InboxControllerApi,
  WaitForControllerApi,
  WaitForLatestEmailSortEnum,
} from '../dist';
import MailSlurp_defaultImport, {
  MailSlurp,
  MailSlurp as MailSlurp_import,
} from '../dist/index';

// node require style
const TIMEOUT = 120000;
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
    const configuration = new Configuration({ apiKey });
    // use individual controllers for more methods
    const inboxController = new InboxControllerApi(configuration);
    const emailController = new EmailControllerApi(configuration);
    const waitController = new WaitForControllerApi(configuration);
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
      useDomainPool: true,
      tags: ['test', 'ci'] as any,
    });
    await mailslurp.deleteInbox(inboxWithOptions.id);
  });
});
describe('phone usages', () => {
  phoneTest(
    'can fetch numbers and receive sms',
    async (mailslurp: MailSlurp) => {
      //<gen>phone_get_numbers
      const {
        content: [phone],
      } = await mailslurp.phoneController.getPhoneNumbers({
        phoneCountry: GetPhoneNumbersPhoneCountryEnum.US,
      });
      expect(phone.phoneNumber).toContain('+1');
      //</gen>
      await mailslurp.phoneController.testPhoneNumberSendSms({
        phoneNumberId: phone.id,
        xTestId: process.env.TEST_ID,
        testPhoneNumberOptions: {
          message: 'Here is your code: 123',
        },
      });
      //<gen>phone_wait_for_sms
      const sms = await mailslurp.waitController.waitForLatestSms({
        waitForSingleSmsOptions: {
          phoneNumberId: phone.id,
          timeout: 30_000,
          unreadOnly: true,
        },
      });
      expect(sms.body).toContain('Here is your code');
      expect(sms.fromNumber).toEqual('+13252527014');
      //</gen>
    }
  );
});
describe('using controller instances for more features', () => {
  integrationTest('can wait for emails', async (mailslurp: MailSlurp) => {
    const startTime = new Date();
    const inbox = await mailslurp.inboxController.createInbox({});
    const sent = await mailslurp.inboxController.sendEmailAndConfirm({
      inboxId: inbox.id!,
      sendEmailOptions: {
        to: [inbox.emailAddress!],
        subject: 'test',
        body: '<html>hello</html>',
        isHTML: true,
      },
    });
    expect(sent.to).toContain(inbox.emailAddress);

    // can receive sent email
    const email = await mailslurp.waitController.waitForLatestEmail({
      inboxId: inbox.id,
      since: startTime,
      sort: WaitForLatestEmailSortEnum.DESC,
      timeout: TIMEOUT,
      unreadOnly: true,
    });
    expect(email.subject).toContain('test');
  });
});
