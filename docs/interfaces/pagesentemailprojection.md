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

*Defined in [src/generated/api.ts:4358](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4358)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4364](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4364)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4370](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4370)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4376](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4376)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4382](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4382)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4388](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4388)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4394](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4394)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4400](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4400)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4406](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4406)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4412](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4412)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4418](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4418)*

Total number of pages available

**`memberof`** PageSentEmailProjection
