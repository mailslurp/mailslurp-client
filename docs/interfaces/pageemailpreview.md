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

*Defined in [src/generated/api.ts:3147](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3147)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3153](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3153)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3159](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3159)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3165](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3165)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3171](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3171)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3177](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3177)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3183](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3183)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3189](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3189)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3195](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3195)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3201](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3201)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3207](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3207)*

**`memberof`** PageEmailPreview
