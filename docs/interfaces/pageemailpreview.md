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

*Defined in [src/generated/api.ts:1990](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1990)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:1996](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L1996)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2002](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2002)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2008](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2008)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2014](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2014)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2020](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2020)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2026](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2026)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2032](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2032)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2038](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2038)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2044](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2044)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2050](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L2050)*

**`memberof`** PageEmailPreview
