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

*Defined in [src/generated/api.ts:3324](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3324)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3330](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3330)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3336](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3336)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3342](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3342)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3348](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3348)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3354](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3354)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3360](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3360)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3366](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3366)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3372](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3372)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3378](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3378)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3384](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L3384)*

**`memberof`** PageEmailPreview
