import { MailSlurp } from '../dist';

/**
 * Helper function to run a test with a configured mailslurp client if an API_KEY env variable is present
 */
export function integrationTest(
  name: string,
  fn: (mailslurp: MailSlurp) => Promise<any>
) {
  const apiKey = process.env.API_KEY;
  test.skipIf(!apiKey)(name, async () => {
    await fn(new MailSlurp({ apiKey }));
  });
}
export function phoneTest(
  name: string,
  fn: (mailslurp: MailSlurp) => Promise<any>
) {
  const apiKey = process.env.PHONE_KEY;
  const testId = process.env.TEST_ID;
  const headers = testId ? { 'x-test-id': testId } : undefined;
  test.skipIf(!apiKey)(name, async () => {
    await fn(new MailSlurp({ apiKey, headers }));
  });
}
