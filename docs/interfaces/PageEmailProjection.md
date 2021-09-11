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

[src/generated/api.ts:3804](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3804)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3810](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3810)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3816](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3816)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3822](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3822)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3828](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3828)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3834](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3834)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3840](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3840)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3846](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3846)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3852](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3852)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3858](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3858)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3864](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L3864)
