[MailSlurp JS](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`**

**`interface`** PageEmailProjection

## Table of contents

### Properties

- [content](PageEmailProjection.md#content)
- [empty](PageEmailProjection.md#empty)
- [first](PageEmailProjection.md#first)
- [last](PageEmailProjection.md#last)
- [number](PageEmailProjection.md#number)
- [numberOfElements](PageEmailProjection.md#numberofelements)
- [pageable](PageEmailProjection.md#pageable)
- [size](PageEmailProjection.md#size)
- [sort](PageEmailProjection.md#sort)
- [totalElements](PageEmailProjection.md#totalelements)
- [totalPages](PageEmailProjection.md#totalpages)

## Properties

### content

• `Optional` **content**: [`EmailProjection`](EmailProjection.md)[]

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3846](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3846)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3852](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3852)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3858](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3858)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3864](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3864)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3870](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3870)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3876](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3876)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3882](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3882)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3888](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3888)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3894](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3894)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3900](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3900)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3906](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3906)
