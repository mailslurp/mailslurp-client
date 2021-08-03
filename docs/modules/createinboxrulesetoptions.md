**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateInboxRulesetOptions

# Namespace: CreateInboxRulesetOptions

**`export`** 

**`namespace`** CreateInboxRulesetOptions

## Index

### Enumerations

* [ActionEnum](../enums/createinboxrulesetoptions.actionenum.md)
* [ScopeEnum](../enums/createinboxrulesetoptions.scopeenum.md)

### Properties

* [action](createinboxrulesetoptions.md#action)
* [scope](createinboxrulesetoptions.md#scope)
* [target](createinboxrulesetoptions.md#target)

## Properties

### action

• `Optional` **action**: [ActionEnum](../enums/createinboxrulesetoptions.actionenum.md)

*Defined in [src/generated/api.ts:1141](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1141)*

Action to be taken when the ruleset matches an email for the given scope. For example: `BLOCK` action with target `*` and scope `SENDING_EMAILS` blocks sending to all recipients. Note `ALLOW` takes precedent over `BLOCK`. `FILTER_REMOVE` is like block but will remove offending email addresses during a send or receive event instead of blocking the action.

**`memberof`** CreateInboxRulesetOptions

___

### scope

• `Optional` **scope**: [ScopeEnum](../enums/createinboxrulesetoptions.scopeenum.md)

*Defined in [src/generated/api.ts:1147](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1147)*

What type of emails actions to apply ruleset to. Either `SENDING_EMAILS` or `RECEIVING_EMAILS` will apply action and target to any sending or receiving of emails respectively.

**`memberof`** CreateInboxRulesetOptions

___

### target

• `Optional` **target**: string

*Defined in [src/generated/api.ts:1153](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L1153)*

Target to match emails with. Can be a wild-card type pattern or a valid email address. For instance `*@gmail.com` matches all gmail addresses while `test@gmail.com` matches one address exactly. The target is applied to every recipient field email address when `SENDING_EMAILS` is the scope and is applied to sender of email when `RECEIVING_EMAILS`.

**`memberof`** CreateInboxRulesetOptions
