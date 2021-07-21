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

*Defined in [src/generated/api.ts:3610](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3610)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3616](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3616)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3622](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3622)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3628](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3628)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3634](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3634)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3640](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3640)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3646](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3646)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3652](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3652)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3658](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3658)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3664](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3664)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3670](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L3670)*

**`memberof`** PageEmailPreview
