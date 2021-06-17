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

*Defined in [src/generated/api.ts:3478](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3478)*

Collection of items

**`memberof`** PageSentEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3484](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3484)*

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3490](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3490)*

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3496](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3496)*

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3502](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3502)*

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3508](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3508)*

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3514](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3514)*

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3520](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3520)*

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3526](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3526)*

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3532](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3532)*

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3538](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L3538)*

Total number of pages available

**`memberof`** PageSentEmailProjection
