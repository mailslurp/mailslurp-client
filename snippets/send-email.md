```typescript
try {
  await mailslurp.sendEmail(inboxId, { 
    to: ['test@example.com'], 
    subject: 'Welcome',
    body: 'Hello!' 
  })
} catch (e) {
  // handle errors
}
```
