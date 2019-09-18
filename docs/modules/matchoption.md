[MailSlurp Client](../README.md) > [MatchOption](../modules/matchoption.md)

# Module: MatchOption

*__export__*: 

*__namespace__*: MatchOption

## Index

### Properties

* [field](matchoption.md#field)
* [should](matchoption.md#should)
* [value](matchoption.md#value)

---

## Properties

<a id="field"></a>

### `<Optional>` field

**● field**: *`FieldEnum`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:390*

The email property to match on. One of SUBJECT, TO, BCC, CC or FROM

*__type__*: {string}

*__memberof__*: MatchOption

___
<a id="should"></a>

### `<Optional>` should

**● should**: *`ShouldEnum`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:396*

What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines

*__type__*: {string}

*__memberof__*: MatchOption

___
<a id="value"></a>

### `<Optional>` value

**● value**: *`string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:402*

The value to compare to the field using EQUAL or CONTAIN

*__type__*: {string}

*__memberof__*: MatchOption

___

