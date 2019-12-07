```typescript
try {
    // first get email previews for an inbox
    const emails = mailslurp.getEmails(inboxId, { limit: 1 })

    // then get the full email by id
    const fullEmail = mailslurp.getEmail(emails[0].id)

    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```
