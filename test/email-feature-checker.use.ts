import { integrationTest } from './_helpers';
import {
  EmailFeatureSupportResultDetectedFeaturesEnum,
  EmailFeatureSupportStatusPercentageStatusEnum,
} from '../src';


const timeout = 120001;
jest.setTimeout(timeout);
integrationTest('can check email compatibility', async (mailslurp) => {
  const inbox = await mailslurp.createInbox();
  await mailslurp.inboxController.sendEmail({
    inboxId: inbox.id,
    sendEmailOptions: {
      to: [inbox.emailAddress],
      subject: 'Test email features',
      body: `<!DOCTYPE html><body>Test content</body></html>`,
    },
  });
  const email = await mailslurp.waitForLatestEmail(inbox.id, timeout);
  //<gen>email_feature_checker_basic
  const { result } =
    await mailslurp.emailController.checkEmailBodyFeatureSupport({
      emailId: email.id,
    });
  expect(result.detectedFeatures).toContain(
    EmailFeatureSupportResultDetectedFeaturesEnum.html_doctype
  );
  expect(
    result.featurePercentages.find(
      (it) =>
        it.status === EmailFeatureSupportStatusPercentageStatusEnum.SUPPORTED
    )?.percentage
  ).toBeGreaterThan(50);
  //</gen>
});
