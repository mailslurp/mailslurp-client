**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageEmailPreview

# Interface: PageEmailPreview

Paginated email preview results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageEmailPreview

## Hierarchy

* **PageEmailPreview**

## Index

### Properties

* [content](pageemailpreview.md#content)
* [empty](pageemailpreview.md#empty)
* [first](pageemailpreview.md#first)
* [last](pageemailpreview.md#last)
* [number](pageemailpreview.md#number)
* [numberOfElements](pageemailpreview.md#numberofelements)
* [pageable](pageemailpreview.md#pageable)
* [size](pageemailpreview.md#size)
* [sort](pageemailpreview.md#sort)
* [totalElements](pageemailpreview.md#totalelements)
* [totalPages](pageemailpreview.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[EmailPreview](emailpreview.md)>

*Defined in [src/generated/api.ts:2226](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2226)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2232](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2232)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2238](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2238)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2244](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2244)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2250](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2250)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2256](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2256)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2262](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2262)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2268](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2268)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2274](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2274)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2280](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2280)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2286](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L2286)*

**`memberof`** PageEmailPreview
