 ```typescript
// inside some test
cons inbox = mailslurp.createInbox()
await myWelcomeEmailAction(inbox.emailAddress)

try {
  const email = await mailslurp.waitForLatestEmail(inbox.id)
  expect(email.body).toBe('Welcome')
} catch (e) {
  // handle timeout or email wasn't received
}
```
