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

*Defined in [src/generated/api.ts:3732](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3732)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3738](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3738)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3744](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3744)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3750](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3750)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3756](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3756)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3762](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3762)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3768](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3768)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3774](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3774)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3780](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3780)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3786](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3786)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3792](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3792)*

**`memberof`** PageEmailPreview
