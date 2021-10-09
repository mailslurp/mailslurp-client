import { MailSlurp } from '../dist';

/**
 * Helper function to run a test with a configured mailslurp client if an API_KEY env variable is present
 */
export function integrationTest(
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
