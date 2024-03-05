import { integrationTest } from './_helpers';

jest.setTimeout(120_000);
integrationTest('can check links', async (mailslurp) => {
  const inbox = await mailslurp.createInboxWithOptions({
    expiresIn: 300_000,
  });
  const subject = 'Test invalid image';
  const emailBrokenImage = `<!DOCTYPE html>
          <body>
            <a href="https://api.mailslurp.com/not-existing">Bad link</a>
          </body>
        </html>`;
  await mailslurp.inboxController.sendEmail({
    inboxId: inbox.id,
    sendEmailOptions: {
      to: [inbox.emailAddress],
      subject,
      body: emailBrokenImage,
      isHTML: true,
    },
  });
  const email = await mailslurp.waitForLatestEmail(inbox.id, 120_000, true);
  expect(email.subject).toContain(subject);
  //<gen>email_content_check_invalid_link
  const result = await mailslurp.emailController.checkEmailBody({
    emailId: email.id,
  });
  expect(result.hasIssues).toEqual(true);
  expect(result.linkIssues.length).toEqual(1);
  expect(result.linkIssues[0].url).toEqual(
    'https://api.mailslurp.com/not-existing'
  );
  //</gen>
  expect(result.imageIssues).toEqual([]);
  expect(result.spellingIssues).toEqual([]);
});
integrationTest('can check images', async (mailslurp) => {
  const inbox = await mailslurp.createInboxWithOptions({
    expiresIn: 300_000,
  });
  const subject = 'Test invalid image';
  const emailBrokenImage = `<!DOCTYPE html>
          <body>
            <img src="https://www.mailslurp.com/broken-image.png" alt="logo"/>
          </body>
        </html>`;
  await mailslurp.inboxController.sendEmail({
    inboxId: inbox.id,
    sendEmailOptions: {
      isHTML: true,
      to: [inbox.emailAddress],
      subject,
      body: emailBrokenImage,
    },
  });
  const email = await mailslurp.waitForLatestEmail(inbox.id, 120_000, true);
  expect(email.subject).toContain(subject);
  //<gen>email_content_check_invalid_image
  const result = await mailslurp.emailController.checkEmailBody({
    emailId: email.id,
  });
  expect(result.hasIssues).toEqual(true);
  expect(result.imageIssues.length).toEqual(1);
  expect(result.imageIssues[0].url).toEqual(
    'https://www.mailslurp.com/broken-image.png'
  );
  //</gen>
  expect(result.spellingIssues).toEqual([]);
  expect(result.linkIssues).toEqual([]);
});
