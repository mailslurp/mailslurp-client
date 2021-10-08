import { integrationTest } from './_helpers';

integrationTest('create_inbox', async (mailslurp) => {
  //<gen>create_inbox
  const inbox = await mailslurp.createInbox();
  // { id: '123', emailAddress: '123@mailslurp.com' }
  //</gen>
  expect(inbox).toBeTruthy()
});
