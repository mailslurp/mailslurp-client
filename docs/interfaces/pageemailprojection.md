**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageEmailProjection

## Hierarchy

* **PageEmailProjection**

## Index

### Properties

* [content](pageemailprojection.md#content)
* [empty](pageemailprojection.md#empty)
* [first](pageemailprojection.md#first)
* [last](pageemailprojection.md#last)
* [number](pageemailprojection.md#number)
* [numberOfElements](pageemailprojection.md#numberofelements)
* [pageable](pageemailprojection.md#pageable)
* [size](pageemailprojection.md#size)
* [sort](pageemailprojection.md#sort)
* [totalElements](pageemailprojection.md#totalelements)
* [totalPages](pageemailprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[EmailProjection](emailprojection.md)>

*Defined in [src/generated/api.ts:3237](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3237)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3243](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3243)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3249](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3249)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3255](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3255)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3261](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3261)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3267](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3267)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3273](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3273)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3279](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3279)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3285](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3285)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3291](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3291)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3297](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3297)*

**`memberof`** PageEmailProjection
