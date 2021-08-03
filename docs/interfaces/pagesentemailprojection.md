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

*Defined in [src/generated/api.ts:4398](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4398)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4404](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4404)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4410](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4410)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4416](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4416)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4422](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4422)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4428](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4428)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4434](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4434)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4440](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4440)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4446](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4446)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4452](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4452)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4458](https://github.com/mailslurp/mailslurp-client/blob/ad6aa3d/src/generated/api.ts#L4458)*

Total number of pages available

**`memberof`** PageSentEmailProjection
