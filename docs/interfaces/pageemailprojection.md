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

*Defined in [src/generated/api.ts:3034](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3034)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3040](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3040)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3046](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3046)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3052](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3052)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3058](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3058)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3064](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3064)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3070](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3070)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3076](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3076)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3082](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3082)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3088](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3088)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3094](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/generated/api.ts#L3094)*

**`memberof`** PageEmailProjection
