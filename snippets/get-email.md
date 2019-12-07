```typescript
try {
    const fullEmail = mailslurp.getEmail(emailId)
    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```
