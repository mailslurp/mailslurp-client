**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageThreadProjection

# Interface: PageThreadProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageThreadProjection

## Hierarchy

* **PageThreadProjection**

## Index

### Properties

* [content](pagethreadprojection.md#content)
* [empty](pagethreadprojection.md#empty)
* [first](pagethreadprojection.md#first)
* [last](pagethreadprojection.md#last)
* [number](pagethreadprojection.md#number)
* [numberOfElements](pagethreadprojection.md#numberofelements)
* [pageable](pagethreadprojection.md#pageable)
* [size](pagethreadprojection.md#size)
* [sort](pagethreadprojection.md#sort)
* [totalElements](pagethreadprojection.md#totalelements)
* [totalPages](pagethreadprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[ThreadProjection](threadprojection.md)>

*Defined in [src/generated/api.ts:3900](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3900)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3906](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3906)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3912](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3912)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3918](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3918)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3924](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3924)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3930](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3930)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3936](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3936)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3942](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3942)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3948](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3948)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3954](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3954)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3960](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3960)*

**`memberof`** PageThreadProjection
