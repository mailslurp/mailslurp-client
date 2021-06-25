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

*Defined in [src/generated/api.ts:3163](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3163)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3169](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3169)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3175](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3175)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3181](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3181)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3187](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3187)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3193](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3193)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3199](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3199)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3205](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3205)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3211](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3211)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3217](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3217)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3223](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3223)*

**`memberof`** PageEmailPreview
