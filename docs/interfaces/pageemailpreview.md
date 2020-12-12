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

*Defined in [src/generated/api.ts:1998](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1998)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2004](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2004)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2010](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2010)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2016](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2016)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2022](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2022)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2028](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2028)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2034](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2034)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2040](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2040)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2046](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2046)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2052](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2052)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2058](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L2058)*

**`memberof`** PageEmailPreview
