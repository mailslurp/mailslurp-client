declare global {
  const test: any;
  const expect: any;
}
import { MailSlurp } from "./index"
import Default from "./index"

test("that import was successful", () => {
  expect(MailSlurp).not.toBeNull();
  expect(Default).not.toBeNull();
});
test("client can be instantiated", () => {
  const client = new MailSlurp({ apiKey: 'test' })
  expect(client).not.toBeNull();
  expect(client.fetchLatestEmail).not.toBeNull();
});
