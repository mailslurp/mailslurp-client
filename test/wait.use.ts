import MailSlurp, {
  CreateWebhookOptionsEventNameEnum,
  MatchOptionFieldEnum,
  MatchOptions,
  MatchOptionShouldEnum,
  WaitForEmailCountSortEnum,
} from '../dist';

jest.setTimeout(120_000);
describe('wait for', () => {
  const config = { apiKey: process.env.API_KEY };

  //<gen>wait_for_multiple
  it('can wait for multiple emails', async () => {
    const mailslurp = new MailSlurp(config);

    // example of creating inboxes simultaneously
    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    // send two emails
    await mailslurp.sendEmail(inbox1.id, {
      to: [inbox2.emailAddress],
      subject: 'Hello Dogs',
    });
    await mailslurp.sendEmail(inbox1.id, {
      to: [inbox2.emailAddress],
      subject: 'Hello Cats',
    });

    // wait for 2 emails
    const emails = await mailslurp.waitController.waitForEmailCount({
      count: 2,
      inboxId: inbox2.id,
      sort: WaitForEmailCountSortEnum.DESC,
    });

    const subjects = emails.map((e) => e.subject);
    expect(subjects).toContain('Hello Dogs');
    expect(subjects).toContain('Hello Cats');
  });
  //</gen>
});

describe('wait for matching', () => {
  const config = { apiKey: process.env.API_KEY };
  const mailslurp = new MailSlurp(config);
  const timeoutMillis = 30_000;
  it('can wait for matching emails', async () => {
    //<gen>wait_for_matching
    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    // specify recipient (must be array)
    const to = [inbox2.emailAddress];

    // send two emails
    await mailslurp.sendEmail(inbox1.id, { to, subject: 'Apples' });
    await mailslurp.sendEmail(inbox1.id, { to, subject: 'Oranges' });

    // wait for matching email based on subject (see MatchOptions for all options)
    const matchOptions: MatchOptions = {
      matches: [
        {
          field: MatchOptionFieldEnum.SUBJECT,
          should: MatchOptionShouldEnum.CONTAIN,
          value: 'Apples',
        },
      ],
    };
    const expectCount = 1;
    const matchingEmails = await mailslurp.waitController.waitForMatchingEmails(
      {
        inboxId: inbox2.id,
        matchOptions: matchOptions,
        count: expectCount,
        timeout: timeoutMillis,
        unreadOnly: true,
      }
    );
    expect(matchingEmails.length).toEqual(1);
    expect(matchingEmails[0].subject).toEqual('Apples');
    //</gen>
  });
});

describe('extract email content', () => {
  const config = { apiKey: process.env.API_KEY };
  const mailslurp = new MailSlurp(config);
  const timeoutMillis = 30_000;

  const inboxId = '';

  it('extract content', async () => {
    /*
        //<gen>create_webhook
        await mailslurp.webhookController.createWebhook({
            inboxId,
            webhookOptions: {
                url: "https://my-server.com/webhook",
                eventName: CreateWebhookOptionsEventNameEnum.NEW_EMAIL
            }
        })
        //</gen>
        */
    //<gen>extract_email_content
    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    const to = [inbox2.emailAddress];
    const body = 'Hi there. Your code is: 123456';
    await mailslurp.sendEmail(inbox1.id, { to, body });

    // wait for email
    const email = await mailslurp.waitController.waitForLatestEmail({
      inboxId: inbox2.id,
      timeout: timeoutMillis,
      unreadOnly: true,
    });
    const pattern = 'code is: ([0-9]{6})';
    expect(email.body).toContain('Your code is');

    // pass the pattern to mailslurp to match for emails
    const result = await mailslurp.emailController.getEmailContentMatch({
      contentMatchOptions: { pattern },
      emailId: email.id,
    });

    // access the match groups
    expect(result.matches).toHaveLength(2);
    expect(result.matches[0]).toEqual('code is: 123456');
    expect(result.matches[1]).toEqual('123456');
    //</gen>
  });
});
