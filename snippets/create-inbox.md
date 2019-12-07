```typescript
// generate a random email address ending in `@mailslurp.com`
try {
  const randomizedInbox = await mailslurp.createInbox();
} catch (e) {
  // handle errors
}

// generate specifc email address ending in `@<yourdomain>`
// note you must verify the domain with MailSlurp before 
// you can create email addresses using it
try {
  const customInbox = await mailslurp.createInbox('myaddress@mydomain.com');
} catch (e) {
  // handle errors
}
```
