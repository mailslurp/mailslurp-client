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

*Defined in [src/generated/api.ts:4424](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4424)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4430](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4430)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4436](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4436)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4442](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4442)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4448](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4448)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4454](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4454)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4460](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4460)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4466](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4466)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4472](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4472)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4478](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4478)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4484](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4484)*

**`memberof`** PageThreadProjection
