**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageEmailProjection

## Hierarchy

* **PageEmailProjection**

## Index

### Properties

* [content](pageemailprojection.md#content)
* [empty](pageemailprojection.md#empty)
* [first](pageemailprojection.md#first)
* [last](pageemailprojection.md#last)
* [number](pageemailprojection.md#number)
* [numberOfElements](pageemailprojection.md#numberofelements)
* [pageable](pageemailprojection.md#pageable)
* [size](pageemailprojection.md#size)
* [sort](pageemailprojection.md#sort)
* [totalElements](pageemailprojection.md#totalelements)
* [totalPages](pageemailprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[EmailProjection](emailprojection.md)>

*Defined in [src/generated/api.ts:2738](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2738)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2744](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2744)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2750](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2750)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2756](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2756)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2762](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2762)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2768](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2768)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2774](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2774)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2780](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2780)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2786](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2786)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2792](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2792)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2798](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2798)*

**`memberof`** PageEmailProjection
