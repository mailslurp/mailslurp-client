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

*Defined in [src/generated/api.ts:3739](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3739)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3745](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3745)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3751](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3751)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3757](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3757)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3763](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3763)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3769](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3769)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3775](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3775)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3781](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3781)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3787](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3787)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3793](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3793)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3799](https://github.com/mailslurp/mailslurp-client/blob/e4d4355/src/generated/api.ts#L3799)*

Total number of pages available

**`memberof`** PageSentEmailProjection
