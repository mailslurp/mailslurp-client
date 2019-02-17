import MailSlurp from "./app"

const api = new MailSlurp({ apiKey: "test" }) 

describe('demo functionality with test api key', () => {

  test('can get test inboxes', async () => {
      // create a new email address for this test
      const inboxes = await api.getInboxes()
      expect(inboxes).toEqual(1)
  })

})
