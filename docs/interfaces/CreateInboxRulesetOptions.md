# Interface: CreateInboxRulesetOptions

Options for creating inbox rulesets. Inbox rulesets can be used to block, allow, filter, or forward emails when sending or receiving using the inbox.

**`export`**

**`interface`** CreateInboxRulesetOptions

## Table of contents

### Properties

- [action](CreateInboxRulesetOptions.md#action)
- [scope](CreateInboxRulesetOptions.md#scope)
- [target](CreateInboxRulesetOptions.md#target)

## Properties

### action

• `Optional` **action**: [`CreateInboxRulesetOptionsActionEnum`](../enums/CreateInboxRulesetOptionsActionEnum.md)

Action to be taken when the ruleset matches an email for the given scope. For example: `BLOCK` action with target `*` and scope `SENDING_EMAILS` blocks sending to all recipients. Note `ALLOW` takes precedent over `BLOCK`. `FILTER_REMOVE` is like block but will remove offending email addresses during a send or receive event instead of blocking the action.

**`memberof`** CreateInboxRulesetOptions

___

### scope

• `Optional` **scope**: [`CreateInboxRulesetOptionsScopeEnum`](../enums/CreateInboxRulesetOptionsScopeEnum.md)

What type of emails actions to apply ruleset to. Either `SENDING_EMAILS` or `RECEIVING_EMAILS` will apply action and target to any sending or receiving of emails respectively.

**`memberof`** CreateInboxRulesetOptions

___

### target

• `Optional` **target**: `string`

Target to match emails with. Can be a wild-card type pattern or a valid email address. For instance `*@gmail.com` matches all gmail addresses while `test@gmail.com` matches one address exactly. The target is applied to every recipient field email address when `SENDING_EMAILS` is the scope and is applied to sender of email when `RECEIVING_EMAILS`.

**`memberof`** CreateInboxRulesetOptions
