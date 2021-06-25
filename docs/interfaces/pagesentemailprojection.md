**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageSentEmailProjection

# Interface: PageSentEmailProjection

Paginated sent email results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.

**`export`** 

**`interface`** PageSentEmailProjection

## Hierarchy

* **PageSentEmailProjection**

## Index

### Properties

* [content](pagesentemailprojection.md#content)
* [empty](pagesentemailprojection.md#empty)
* [first](pagesentemailprojection.md#first)
* [last](pagesentemailprojection.md#last)
* [number](pagesentemailprojection.md#number)
* [numberOfElements](pagesentemailprojection.md#numberofelements)
* [pageable](pagesentemailprojection.md#pageable)
* [size](pagesentemailprojection.md#size)
* [sort](pagesentemailprojection.md#sort)
* [totalElements](pagesentemailprojection.md#totalelements)
* [totalPages](pagesentemailprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[SentEmailProjection](sentemailprojection.md)>

*Defined in [src/generated/api.ts:3755](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3755)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3761](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3761)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3767](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3767)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3773](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3773)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3779](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3779)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3785](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3785)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3791](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3791)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3797](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3797)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3803](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3803)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3809](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3809)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3815](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3815)*

Total number of pages available

**`memberof`** PageSentEmailProjection
