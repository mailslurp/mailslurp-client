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

*Defined in [src/generated/api.ts:4276](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4276)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4282](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4282)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4288](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4288)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4294](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4294)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4300](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4300)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4306](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4306)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4312](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4312)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4318](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4318)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4324](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4324)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4330](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4330)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4336](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4336)*

Total number of pages available

**`memberof`** PageSentEmailProjection
