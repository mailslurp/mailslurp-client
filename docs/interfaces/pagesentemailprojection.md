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

*Defined in [src/generated/api.ts:3990](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3990)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3996](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3996)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4002](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4002)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4008](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4008)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4014](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4014)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4020](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4020)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4026](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4026)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4032](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4032)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4038](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4038)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4044](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4044)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4050](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4050)*

Total number of pages available

**`memberof`** PageSentEmailProjection
