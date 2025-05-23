[MailSlurp JS](../README.md) / StructuredOutputSchema

# Interface: StructuredOutputSchema

JSON output schema for structured content repsonses. This schema dictates the format that an AI should use when responding to your instructions.

**`Export`**

**`Interface`**

StructuredOutputSchema

## Table of contents

### Properties

- [\_default](StructuredOutputSchema.md#_default)
- [\_enum](StructuredOutputSchema.md#_enum)
- [anyOf](StructuredOutputSchema.md#anyof)
- [description](StructuredOutputSchema.md#description)
- [example](StructuredOutputSchema.md#example)
- [format](StructuredOutputSchema.md#format)
- [items](StructuredOutputSchema.md#items)
- [maxItems](StructuredOutputSchema.md#maxitems)
- [maxLength](StructuredOutputSchema.md#maxlength)
- [maxProperties](StructuredOutputSchema.md#maxproperties)
- [maximum](StructuredOutputSchema.md#maximum)
- [minItems](StructuredOutputSchema.md#minitems)
- [minLength](StructuredOutputSchema.md#minlength)
- [minProperties](StructuredOutputSchema.md#minproperties)
- [minimum](StructuredOutputSchema.md#minimum)
- [nullable](StructuredOutputSchema.md#nullable)
- [pattern](StructuredOutputSchema.md#pattern)
- [properties](StructuredOutputSchema.md#properties)
- [propertyOrdering](StructuredOutputSchema.md#propertyordering)
- [required](StructuredOutputSchema.md#required)
- [title](StructuredOutputSchema.md#title)
- [type](StructuredOutputSchema.md#type)

## Properties

### \_default

• `Optional` **\_default**: `object`

**`Memberof`**

StructuredOutputSchema

___

### \_enum

• `Optional` **\_enum**: `string`[]

When using type string and format enum pass a collection of enum values here.

**`Memberof`**

StructuredOutputSchema

___

### anyOf

• `Optional` **anyOf**: [`StructuredOutputSchema`](StructuredOutputSchema.md)[]

**`Memberof`**

StructuredOutputSchema

___

### description

• `Optional` **description**: `string`

Provide a description of the schema to help the AI understand the schema.

**`Memberof`**

StructuredOutputSchema

___

### example

• `Optional` **example**: `object`

**`Memberof`**

StructuredOutputSchema

___

### format

• `Optional` **format**: `string`

Format for string types. Can be null, date-time or enum.

**`Memberof`**

StructuredOutputSchema

___

### items

• `Optional` **items**: [`StructuredOutputSchema`](StructuredOutputSchema.md)

**`Memberof`**

StructuredOutputSchema

___

### maxItems

• `Optional` **maxItems**: `number`

**`Memberof`**

StructuredOutputSchema

___

### maxLength

• `Optional` **maxLength**: `number`

**`Memberof`**

StructuredOutputSchema

___

### maxProperties

• `Optional` **maxProperties**: `number`

**`Memberof`**

StructuredOutputSchema

___

### maximum

• `Optional` **maximum**: `number`

**`Memberof`**

StructuredOutputSchema

___

### minItems

• `Optional` **minItems**: `number`

**`Memberof`**

StructuredOutputSchema

___

### minLength

• `Optional` **minLength**: `number`

**`Memberof`**

StructuredOutputSchema

___

### minProperties

• `Optional` **minProperties**: `number`

**`Memberof`**

StructuredOutputSchema

___

### minimum

• `Optional` **minimum**: `number`

**`Memberof`**

StructuredOutputSchema

___

### nullable

• `Optional` **nullable**: `boolean`

**`Memberof`**

StructuredOutputSchema

___

### pattern

• `Optional` **pattern**: `string`

**`Memberof`**

StructuredOutputSchema

___

### properties

• `Optional` **properties**: `Object`

Properties of an OBJECT schema. These are key value pairs where the key is the property name and the value is the schema for that property.

**`Memberof`**

StructuredOutputSchema

#### Index signature

▪ [key: `string`]: [`StructuredOutputSchema`](StructuredOutputSchema.md)

___

### propertyOrdering

• `Optional` **propertyOrdering**: `string`[]

Pass an array of property names to specify the order of properties in the generated JSON object if required.

**`Memberof`**

StructuredOutputSchema

___

### required

• `Optional` **required**: `string`[]

**`Memberof`**

StructuredOutputSchema

___

### title

• `Optional` **title**: `string`

**`Memberof`**

StructuredOutputSchema

___

### type

• `Optional` **type**: [`StructuredOutputSchemaTypeEnum`](../enums/StructuredOutputSchemaTypeEnum.md)

Primitive JSON schema types with a fallback CUSTOM for unknown values.

**`Memberof`**

StructuredOutputSchema
