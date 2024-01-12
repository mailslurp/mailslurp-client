import { integrationTest } from './_helpers';
import MailSlurp from '../dist';

jest.setTimeout(120_000);
integrationTest('can create inboxes', async (mailslurp) => {
  // check account
  const userInfo = await mailslurp.userController.getUserInfo();
  expect(userInfo.id.length).toBeGreaterThan(0);
  //<gen>create_inbox
  const inbox = await mailslurp.createInbox();
  // { id: '123', emailAddress: '123@mailslurp.com' }
  //</gen>
  expect(inbox).toBeTruthy();
  //<gen>create_inbox_controller
  await mailslurp.inboxController.createInbox({});
  //</gen>
  const inboxId = inbox.id;
  const timeout = 1000;
  //<gen>fetch_try_catch
  try {
    await mailslurp.waitController.waitForLatestEmail({
      inboxId: inboxId,
      timeout: timeout,
      unreadOnly: true,
    });
  } catch (e) {
    // handle the error and status code in your code
    const statusCode = e.status;
    const errorMessage = await e.text();

    expect(errorMessage).toContain('Failed to satisfy email query for inbox');
    expect(statusCode).toEqual(408);
  }
  //</gen>
});

integrationTest('send with queue', async (mailslurp) => {
  const inbox = await mailslurp.createInbox();
  const inboxId = inbox.id!;
  const recipient = inbox.emailAddress;
  //<gen>send_with_queue
  await mailslurp.inboxController.sendEmailWithQueue({
    inboxId: inboxId,
    sendEmailOptions: {
      to: [recipient],
      subject: 'Sent with a queue',
      body:
        'Use queues to allow recovery of failed email ' +
        'sending when account reaches limits or has payment issues',
    },
    // validate before adding to queue to fail early
    validateBeforeEnqueue: false,
  });
  //</gen>
  const email = await mailslurp.waitForLatestEmail(inboxId, 60_000);
  expect(email.subject).toContain('Sent with a queue');
});

describe('email verification', () => {
  const config = { apiKey: process.env.API_KEY };

  it.skip('can verify email addresses', async () => {
    //<gen>verify_email_address
    const mailslurp = new MailSlurp(config);
    const res =
      await mailslurp.emailVerificationController.validateEmailAddressList({
        validateEmailAddressListOptions: {
          emailAddressList: ['contact@mailslurp.dev', 'bad@mailslurp.dev'],
        },
      });
    expect(res.resultMapEmailAddressIsValid['contact@mailslurp.dev']).toEqual(
      true
    );
    expect(res.resultMapEmailAddressIsValid['bad@mailslurp.dev']).toEqual(
      false
    );
    //</gen>
  });
});
/**
 * Get an inbox
 */
describe('get an inbox', () => {
  const config = { apiKey: process.env.API_KEY };

  it('can get a full inbox', async () => {
    //<gen>get_an_inbox
    const mailslurp = new MailSlurp(config);
    const { id: inboxId } = await mailslurp.createInbox();
    const inbox = await mailslurp.getInbox(inboxId);
    expect(inbox.id).toEqual(inboxId);
    //</gen>
  });
});

describe('inbox pagination', () => {
  const config = { apiKey: process.env.API_KEY };
  /**
   * List inboxes
   */
  it('can list inboxes in paginated form', async () => {
    //<gen>list_inboxes
    const mailslurp = new MailSlurp(config);

    // get paginated inboxes
    const [index, size] = [0, 20];
    const pageInboxes = await mailslurp.getAllInboxes(0, 20);

    expect(pageInboxes.size).toEqual(size);
    expect(pageInboxes.number).toEqual(index);
    //</gen>
  });
});

describe('wait_for_latest', () => {
  const config = { apiKey: process.env.API_KEY };
  const mailslurp = new MailSlurp(config);
  test('inbox wait for', async () => {
    const timeoutMs = 30_000;
    //<gen>wait_for_latest
    const inbox = await mailslurp.createInbox();
    await mailslurp.sendEmail(inbox.id, {
      to: [inbox.emailAddress],
      subject: 'test',
    });

    // wait for first email
    const latestEmail = await mailslurp.waitForLatestEmail(inbox.id, timeoutMs);
    expect(latestEmail.subject).toContain('test');

    // send another
    await mailslurp.sendEmail(inbox.id, {
      to: [inbox.emailAddress],
      subject: 'second',
    });

    // wait for second using controller instead
    const secondEmail = await mailslurp.waitController.waitForLatestEmail({
      inboxId: inbox.id,
      unreadOnly: true,
    });
    expect(secondEmail.subject).toContain('second');

    const allEmails = await mailslurp.getEmails(inbox.id);
    expect(allEmails).toHaveLength(2);
    //</gen>
  });
});
import * as fs from 'fs';
import * as path from 'path';

describe('send email', () => {
  test('can send simple', async () => {
    const config = { apiKey: process.env.API_KEY };
    const mailslurp = new MailSlurp(config);
    const receiveInbox = await mailslurp.createInbox();
    const emailAddress = receiveInbox.emailAddress;
    //<gen>send_email
    const inbox = await mailslurp.createInbox();
    const options = {
      to: [emailAddress],
      subject: 'Hello',
      body: 'Welcome',
    };
    const sent = await mailslurp.sendEmail(inbox.id, options);
    expect(sent.subject).toContain('Hello');
    //</gen>
  });
  test('attachments', async () => {
    const config = { apiKey: process.env.API_KEY };
    //<gen>upload_attachment
    const mailslurp = new MailSlurp(config);

    // read a file as a base64 encoded string
    const pathToAttachment = path.join(__dirname + '/attachment.txt');
    const fileBase64Encoded = await fs.promises.readFile(pathToAttachment, {
      encoding: 'base64',
    });

    // upload the attachment as base64 string and get atttachment id
    const [attachmentId] =
      await mailslurp.attachmentController.uploadAttachment({
        uploadAttachmentOptions: {
          base64Contents: fileBase64Encoded,
          contentType: 'text/plain',
          filename: path.basename(pathToAttachment),
        },
      });
    //</gen>
    expect(attachmentId).toBeTruthy();

    //<gen>send_attachment
    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    // send email and get saved result
    const sentEmail = await mailslurp.inboxController.sendEmailAndConfirm({
      inboxId: inbox1.id,
      sendEmailOptions: {
        to: [inbox2.emailAddress],
        attachments: [attachmentId],
        subject: 'Send attachments',
        body: 'Here are your files',
      },
    });

    expect(sentEmail.attachments.length).toEqual(1);
    //</gen>
    const inboxId = inbox2.id;
    //<gen>receive_attachment
    // first wait for an email
    const email = await mailslurp.waitController.waitForLatestEmail({
      inboxId: inboxId,
      timeout: 30000,
      unreadOnly: true,
    });

    // check has attachments
    expect(email.attachments.length).toEqual(1);

    // download with email controller as base64 string
    const attachmentDto =
      await mailslurp.emailController.downloadAttachmentBase64({
        attachmentId: email.attachments[0]!!,
        emailId: email.id,
      });

    // can access content
    expect(attachmentDto.base64FileContents).toBeTruthy();
    const fileContent = new Buffer(
      attachmentDto.base64FileContents,
      'base64'
    ).toString();
    expect(fileContent).toContain('test');

    // can access size etc
    expect(attachmentDto.sizeBytes).toBeTruthy();
    expect(attachmentDto.contentType).toBeTruthy();
    //</gen>
  });
});
