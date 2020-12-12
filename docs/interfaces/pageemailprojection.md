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

*Defined in [src/generated/api.ts:2072](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2072)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2078](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2078)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2084](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2084)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2090](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2090)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2096](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2096)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2102](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2102)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2108](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2108)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2114](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2114)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2120](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2120)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2126](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2126)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2132](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L2132)*

**`memberof`** PageEmailProjection
