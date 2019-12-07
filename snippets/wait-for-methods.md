```typescript
/**
 * Call an inbox and return the last received email 
 * OR wait until an email is received or timeout is reached
 */
waitForLatestEmail(inboxId?: string, timeout?: number): Promise<Email>

/**
 * Hold connection until inbox contains at least
 * expected number of emails and then return them
 */
waitForEmailCount(count?: number, inboxId?: string, timeout?: number): Promise<EmailPreview[]>

/**
 * Hold connection until inbox contains at least
 * expected number of emails that match a given match option input and return them
 */
waitForMatchingEmails(matchOptions: MatchOptions, count?: number, inboxId?: string, timeout?: number): Promise<EmailPreview[]>

/**
 *  Call an inbox and return email number `n` or wait for it to be received
 */ 
waitForNthEmail(inboxId: string, index: number, timeout?: number): Promise<Email>
```
