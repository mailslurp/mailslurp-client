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

*Defined in [src/generated/api.ts:3636](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3636)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3642](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3642)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3648](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3648)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3654](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3654)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3660](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3660)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3666](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3666)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3672](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3672)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3678](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3678)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3684](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3684)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3690](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3690)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3696](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3696)*

**`memberof`** PageEmailPreview
