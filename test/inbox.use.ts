import {integrationTest} from './_helpers';

integrationTest('can create inboxes', async (mailslurp) => {
    //<gen>create_inbox
    const inbox = await mailslurp.createInbox();
    // { id: '123', emailAddress: '123@mailslurp.com' }
    //</gen>
    expect(inbox).toBeTruthy()
    //<gen>create_inbox_controller
    await mailslurp.inboxController.createInbox({});
    //</gen>
    const inboxId = inbox.id
    const timeout = 10
    //<gen>fetch_try_catch
    try {
        await mailslurp.waitController.waitForLatestEmail({
            inboxId: inboxId,
            timeout: timeout,
            unreadOnly: true
        })
    } catch (e) {
        // handle the error and status code in your code
        const statusCode = e.status
        const errorMessage = await e.text();

        expect(errorMessage).toContain("Failed to satisfy email query for inbox")
        expect(statusCode).toEqual(408)
    }
    //</gen>
});
