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

*Defined in [src/generated/api.ts:3903](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3903)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3909](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3909)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3915](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3915)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3921](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3921)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3927](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3927)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3933](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3933)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3939](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3939)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3945](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3945)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3951](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3951)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3957](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3957)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3963](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L3963)*

**`memberof`** PageThreadProjection
