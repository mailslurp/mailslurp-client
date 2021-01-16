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

*Defined in [src/generated/api.ts:2300](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2300)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2306](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2306)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2312](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2312)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2318](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2318)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2324](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2324)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2330](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2330)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2336](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2336)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2342](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2342)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2348](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2348)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2354](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2354)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2360](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2360)*

**`memberof`** PageEmailProjection
