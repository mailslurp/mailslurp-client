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

*Defined in [src/generated/api.ts:1494](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1494)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:1500](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1500)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:1506](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1506)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:1512](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1512)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:1518](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1518)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:1524](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1524)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:1530](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1530)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:1536](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1536)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:1542](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1542)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:1548](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1548)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:1554](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1554)*

**`memberof`** PageEmailPreview
