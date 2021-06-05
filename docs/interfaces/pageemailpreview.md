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

*Defined in [src/generated/api.ts:2880](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2880)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2886](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2886)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2892](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2892)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2898](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2898)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2904](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2904)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2910](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2910)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2916](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2916)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2922](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2922)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2928](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2928)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2934](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2934)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2940](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L2940)*

**`memberof`** PageEmailPreview
