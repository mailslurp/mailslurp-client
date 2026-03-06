[MailSlurp JS](../README.md) / PhoneControllerApi

# Class: PhoneControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PhoneControllerApi`**

## Table of contents

### Constructors

- [constructor](PhoneControllerApi.md#constructor)

### Properties

- [configuration](PhoneControllerApi.md#configuration)

### Methods

- [createEmergencyAddress](PhoneControllerApi.md#createemergencyaddress)
- [createEmergencyAddressRaw](PhoneControllerApi.md#createemergencyaddressraw)
- [createPhoneNumber](PhoneControllerApi.md#createphonenumber)
- [createPhoneNumberRaw](PhoneControllerApi.md#createphonenumberraw)
- [deleteAllPhoneNumber](PhoneControllerApi.md#deleteallphonenumber)
- [deleteAllPhoneNumberRaw](PhoneControllerApi.md#deleteallphonenumberraw)
- [deleteEmergencyAddress](PhoneControllerApi.md#deleteemergencyaddress)
- [deleteEmergencyAddressRaw](PhoneControllerApi.md#deleteemergencyaddressraw)
- [deletePhoneMessageThreadItems](PhoneControllerApi.md#deletephonemessagethreaditems)
- [deletePhoneMessageThreadItemsRaw](PhoneControllerApi.md#deletephonemessagethreaditemsraw)
- [deletePhoneNumber](PhoneControllerApi.md#deletephonenumber)
- [deletePhoneNumberRaw](PhoneControllerApi.md#deletephonenumberraw)
- [getAllPhoneMessageThreads](PhoneControllerApi.md#getallphonemessagethreads)
- [getAllPhoneMessageThreadsRaw](PhoneControllerApi.md#getallphonemessagethreadsraw)
- [getAllPhoneNumberReleases](PhoneControllerApi.md#getallphonenumberreleases)
- [getAllPhoneNumberReleasesRaw](PhoneControllerApi.md#getallphonenumberreleasesraw)
- [getConsentStatus](PhoneControllerApi.md#getconsentstatus)
- [getConsentStatusRaw](PhoneControllerApi.md#getconsentstatusraw)
- [getEmergencyAddress](PhoneControllerApi.md#getemergencyaddress)
- [getEmergencyAddressRaw](PhoneControllerApi.md#getemergencyaddressraw)
- [getEmergencyAddresses](PhoneControllerApi.md#getemergencyaddresses)
- [getEmergencyAddressesRaw](PhoneControllerApi.md#getemergencyaddressesraw)
- [getPhoneMessageThreadItems](PhoneControllerApi.md#getphonemessagethreaditems)
- [getPhoneMessageThreadItemsRaw](PhoneControllerApi.md#getphonemessagethreaditemsraw)
- [getPhoneMessageThreads](PhoneControllerApi.md#getphonemessagethreads)
- [getPhoneMessageThreadsRaw](PhoneControllerApi.md#getphonemessagethreadsraw)
- [getPhoneNumber](PhoneControllerApi.md#getphonenumber)
- [getPhoneNumberByName](PhoneControllerApi.md#getphonenumberbyname)
- [getPhoneNumberByNameRaw](PhoneControllerApi.md#getphonenumberbynameraw)
- [getPhoneNumberByPhoneNumber](PhoneControllerApi.md#getphonenumberbyphonenumber)
- [getPhoneNumberByPhoneNumberRaw](PhoneControllerApi.md#getphonenumberbyphonenumberraw)
- [getPhoneNumberRaw](PhoneControllerApi.md#getphonenumberraw)
- [getPhoneNumberRelease](PhoneControllerApi.md#getphonenumberrelease)
- [getPhoneNumberReleaseRaw](PhoneControllerApi.md#getphonenumberreleaseraw)
- [getPhoneNumbers](PhoneControllerApi.md#getphonenumbers)
- [getPhoneNumbersRaw](PhoneControllerApi.md#getphonenumbersraw)
- [getPhonePlans](PhoneControllerApi.md#getphoneplans)
- [getPhonePlansAvailability](PhoneControllerApi.md#getphoneplansavailability)
- [getPhonePlansAvailabilityRaw](PhoneControllerApi.md#getphoneplansavailabilityraw)
- [getPhonePlansRaw](PhoneControllerApi.md#getphoneplansraw)
- [getPhoneSummary](PhoneControllerApi.md#getphonesummary)
- [getPhoneSummaryRaw](PhoneControllerApi.md#getphonesummaryraw)
- [getSentSmsByPhoneNumber](PhoneControllerApi.md#getsentsmsbyphonenumber)
- [getSentSmsByPhoneNumberRaw](PhoneControllerApi.md#getsentsmsbyphonenumberraw)
- [getSmsByPhoneNumber](PhoneControllerApi.md#getsmsbyphonenumber)
- [getSmsByPhoneNumberRaw](PhoneControllerApi.md#getsmsbyphonenumberraw)
- [reassignPhoneNumberRelease](PhoneControllerApi.md#reassignphonenumberrelease)
- [reassignPhoneNumberReleaseRaw](PhoneControllerApi.md#reassignphonenumberreleaseraw)
- [request](PhoneControllerApi.md#request)
- [sendSmsFromPhoneNumber](PhoneControllerApi.md#sendsmsfromphonenumber)
- [sendSmsFromPhoneNumberRaw](PhoneControllerApi.md#sendsmsfromphonenumberraw)
- [setConsentStatus](PhoneControllerApi.md#setconsentstatus)
- [setConsentStatusRaw](PhoneControllerApi.md#setconsentstatusraw)
- [setPhoneFavourited](PhoneControllerApi.md#setphonefavourited)
- [setPhoneFavouritedRaw](PhoneControllerApi.md#setphonefavouritedraw)
- [testPhoneNumberSendSms](PhoneControllerApi.md#testphonenumbersendsms)
- [testPhoneNumberSendSmsRaw](PhoneControllerApi.md#testphonenumbersendsmsraw)
- [updatePhoneNumber](PhoneControllerApi.md#updatephonenumber)
- [updatePhoneNumberRaw](PhoneControllerApi.md#updatephonenumberraw)
- [validatePhoneNumber](PhoneControllerApi.md#validatephonenumber)
- [validatePhoneNumberRaw](PhoneControllerApi.md#validatephonenumberraw)
- [withMiddleware](PhoneControllerApi.md#withmiddleware)
- [withPostMiddleware](PhoneControllerApi.md#withpostmiddleware)
- [withPreMiddleware](PhoneControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new PhoneControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### createEmergencyAddress

▸ **createEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

Add an emergency address to a phone number
Create an emergency address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmergencyAddressRequest`](../interfaces/CreateEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

___

### createEmergencyAddressRaw

▸ **createEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

Add an emergency address to a phone number
Create an emergency address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmergencyAddressRequest`](../interfaces/CreateEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

___

### createPhoneNumber

▸ **createPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Create new phone number
Add phone number to your account. Only works if you have already added a plan and an initial phone number in your account and acknowledged the pricing and terms of service by enabling API phone creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreatePhoneNumberRequest`](../interfaces/CreatePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### createPhoneNumberRaw

▸ **createPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Create new phone number
Add phone number to your account. Only works if you have already added a plan and an initial phone number in your account and acknowledged the pricing and terms of service by enabling API phone creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreatePhoneNumberRequest`](../interfaces/CreatePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### deleteAllPhoneNumber

▸ **deleteAllPhoneNumber**(`initOverrides?`): `Promise`<`void`\>

Remove all phone number from account
Delete all phone numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllPhoneNumberRaw

▸ **deleteAllPhoneNumberRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Remove all phone number from account
Delete all phone numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteEmergencyAddress

▸ **deleteEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

Delete an emergency address
Delete an emergency address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmergencyAddressRequest`](../interfaces/DeleteEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

___

### deleteEmergencyAddressRaw

▸ **deleteEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

Delete an emergency address
Delete an emergency address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmergencyAddressRequest`](../interfaces/DeleteEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

___

### deletePhoneMessageThreadItems

▸ **deletePhoneMessageThreadItems**(`requestParameters`, `initOverrides?`): `Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

Delete all messages in an SMS thread
Delete messages in a phone thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneMessageThreadItemsRequest`](../interfaces/DeletePhoneMessageThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>

___

### deletePhoneMessageThreadItemsRaw

▸ **deletePhoneMessageThreadItemsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

Delete all messages in an SMS thread
Delete messages in a phone thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneMessageThreadItemsRequest`](../interfaces/DeletePhoneMessageThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmptyResponseDto`](../interfaces/EmptyResponseDto.md)\>\>

___

### deletePhoneNumber

▸ **deletePhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Remove phone number from account
Delete a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneNumberRequest`](../interfaces/DeletePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deletePhoneNumberRaw

▸ **deletePhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Remove phone number from account
Delete a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePhoneNumberRequest`](../interfaces/DeletePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllPhoneMessageThreads

▸ **getAllPhoneMessageThreads**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>

List all message threads for all phones
Get the latest messages for all phones

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllPhoneMessageThreadsRequest`](../interfaces/GetAllPhoneMessageThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>

___

### getAllPhoneMessageThreadsRaw

▸ **getAllPhoneMessageThreadsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>\>

List all message threads for all phones
Get the latest messages for all phones

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllPhoneMessageThreadsRequest`](../interfaces/GetAllPhoneMessageThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>\>

___

### getAllPhoneNumberReleases

▸ **getAllPhoneNumberReleases**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneNumberReleaseProjection`](../interfaces/PagePhoneNumberReleaseProjection.md)\>

List released or deleted phone numbers
Get all phone number releases

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllPhoneNumberReleasesRequest`](../interfaces/GetAllPhoneNumberReleasesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneNumberReleaseProjection`](../interfaces/PagePhoneNumberReleaseProjection.md)\>

___

### getAllPhoneNumberReleasesRaw

▸ **getAllPhoneNumberReleasesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberReleaseProjection`](../interfaces/PagePhoneNumberReleaseProjection.md)\>\>

List released or deleted phone numbers
Get all phone number releases

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllPhoneNumberReleasesRequest`](../interfaces/GetAllPhoneNumberReleasesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberReleaseProjection`](../interfaces/PagePhoneNumberReleaseProjection.md)\>\>

___

### getConsentStatus

▸ **getConsentStatus**(`initOverrides?`): `Promise`<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>

Get the status of phone usage consent
Get consent status

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>

___

### getConsentStatusRaw

▸ **getConsentStatusRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>\>

Get the status of phone usage consent
Get consent status

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>\>

___

### getEmergencyAddress

▸ **getEmergencyAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

Fetch an emergency address by ID
Get an emergency address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmergencyAddressRequest`](../interfaces/GetEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>

___

### getEmergencyAddressRaw

▸ **getEmergencyAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

Fetch an emergency address by ID
Get an emergency address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmergencyAddressRequest`](../interfaces/GetEmergencyAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddress`](../interfaces/EmergencyAddress.md)\>\>

___

### getEmergencyAddresses

▸ **getEmergencyAddresses**(`initOverrides?`): `Promise`<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>

List emergency addresses
Get emergency addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>

___

### getEmergencyAddressesRaw

▸ **getEmergencyAddressesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>\>

List emergency addresses
Get emergency addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmergencyAddressDto`](../interfaces/EmergencyAddressDto.md)[]\>\>

___

### getPhoneMessageThreadItems

▸ **getPhoneMessageThreadItems**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>

List message thread messages for a phone message thread
Get messages in a phone thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneMessageThreadItemsRequest`](../interfaces/GetPhoneMessageThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>

___

### getPhoneMessageThreadItemsRaw

▸ **getPhoneMessageThreadItemsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>\>

List message thread messages for a phone message thread
Get messages in a phone thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneMessageThreadItemsRequest`](../interfaces/GetPhoneMessageThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>\>

___

### getPhoneMessageThreads

▸ **getPhoneMessageThreads**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>

List message threads for a phone
Get the latest message preview for a thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneMessageThreadsRequest`](../interfaces/GetPhoneMessageThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>

___

### getPhoneMessageThreadsRaw

▸ **getPhoneMessageThreadsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>\>

List message threads for a phone
Get the latest message preview for a thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneMessageThreadsRequest`](../interfaces/GetPhoneMessageThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>\>

___

### getPhoneNumber

▸ **getPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Get a phone number by ID
Get a phone number by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberRequest`](../interfaces/GetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### getPhoneNumberByName

▸ **getPhoneNumberByName**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Get a phone number by name
Get a phone number by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberByNameRequest`](../interfaces/GetPhoneNumberByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### getPhoneNumberByNameRaw

▸ **getPhoneNumberByNameRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Get a phone number by name
Get a phone number by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberByNameRequest`](../interfaces/GetPhoneNumberByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### getPhoneNumberByPhoneNumber

▸ **getPhoneNumberByPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Get a phone number by phone number
Get a phone number by phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberByPhoneNumberRequest`](../interfaces/GetPhoneNumberByPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### getPhoneNumberByPhoneNumberRaw

▸ **getPhoneNumberByPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Get a phone number by phone number
Get a phone number by phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberByPhoneNumberRequest`](../interfaces/GetPhoneNumberByPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### getPhoneNumberRaw

▸ **getPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Get a phone number by ID
Get a phone number by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberRequest`](../interfaces/GetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### getPhoneNumberRelease

▸ **getPhoneNumberRelease**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberReleaseProjection`](../interfaces/PhoneNumberReleaseProjection.md)\>

Get a released or deleted phone numbers
Get phone number release

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberReleaseRequest`](../interfaces/GetPhoneNumberReleaseRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberReleaseProjection`](../interfaces/PhoneNumberReleaseProjection.md)\>

___

### getPhoneNumberReleaseRaw

▸ **getPhoneNumberReleaseRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberReleaseProjection`](../interfaces/PhoneNumberReleaseProjection.md)\>\>

Get a released or deleted phone numbers
Get phone number release

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberReleaseRequest`](../interfaces/GetPhoneNumberReleaseRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberReleaseProjection`](../interfaces/PhoneNumberReleaseProjection.md)\>\>

___

### getPhoneNumbers

▸ **getPhoneNumbers**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>

List phone numbers for account
Get phone numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumbersRequest`](../interfaces/GetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>

___

### getPhoneNumbersRaw

▸ **getPhoneNumbersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>\>

List phone numbers for account
Get phone numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumbersRequest`](../interfaces/GetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneNumberProjection`](../interfaces/PagePhoneNumberProjection.md)\>\>

___

### getPhonePlans

▸ **getPhonePlans**(`initOverrides?`): `Promise`<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>

Get phone number plans
Get phone plans

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>

___

### getPhonePlansAvailability

▸ **getPhonePlansAvailability**(`initOverrides?`): `Promise`<[`PhonePlanAvailability`](../interfaces/PhonePlanAvailability.md)\>

Get phone plans availability

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhonePlanAvailability`](../interfaces/PhonePlanAvailability.md)\>

___

### getPhonePlansAvailabilityRaw

▸ **getPhonePlansAvailabilityRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanAvailability`](../interfaces/PhonePlanAvailability.md)\>\>

Get phone plans availability

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanAvailability`](../interfaces/PhonePlanAvailability.md)\>\>

___

### getPhonePlansRaw

▸ **getPhonePlansRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>\>

Get phone number plans
Get phone plans

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhonePlanDto`](../interfaces/PhonePlanDto.md)[]\>\>

___

### getPhoneSummary

▸ **getPhoneSummary**(`initOverrides?`): `Promise`<[`PhoneSummaryDto`](../interfaces/PhoneSummaryDto.md)\>

Get overview of assigned phones
Get phone summary

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneSummaryDto`](../interfaces/PhoneSummaryDto.md)\>

___

### getPhoneSummaryRaw

▸ **getPhoneSummaryRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneSummaryDto`](../interfaces/PhoneSummaryDto.md)\>\>

Get overview of assigned phones
Get phone summary

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneSummaryDto`](../interfaces/PhoneSummaryDto.md)\>\>

___

### getSentSmsByPhoneNumber

▸ **getSentSmsByPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>

Get sent SMS messages for a phone number
List sent TXT messages for a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentSmsByPhoneNumberRequest`](../interfaces/GetSentSmsByPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>

___

### getSentSmsByPhoneNumberRaw

▸ **getSentSmsByPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>\>

Get sent SMS messages for a phone number
List sent TXT messages for a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSentSmsByPhoneNumberRequest`](../interfaces/GetSentSmsByPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>\>

___

### getSmsByPhoneNumber

▸ **getSmsByPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>

Get SMS messages for a phone number
List SMS messages for a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmsByPhoneNumberRequest`](../interfaces/GetSmsByPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>

___

### getSmsByPhoneNumberRaw

▸ **getSmsByPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>\>

Get SMS messages for a phone number
List SMS messages for a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmsByPhoneNumberRequest`](../interfaces/GetSmsByPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>\>

___

### reassignPhoneNumberRelease

▸ **reassignPhoneNumberRelease**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Reassign phone number that was released or deleted
Reassign phone number release

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReassignPhoneNumberReleaseRequest`](../interfaces/ReassignPhoneNumberReleaseRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### reassignPhoneNumberReleaseRaw

▸ **reassignPhoneNumberReleaseRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Reassign phone number that was released or deleted
Reassign phone number release

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReassignPhoneNumberReleaseRequest`](../interfaces/ReassignPhoneNumberReleaseRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### sendSmsFromPhoneNumber

▸ **sendSmsFromPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

Send SMS from a phone number
Send TXT message from a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendSmsFromPhoneNumberRequest`](../interfaces/SendSmsFromPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

___

### sendSmsFromPhoneNumberRaw

▸ **sendSmsFromPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

Send SMS from a phone number
Send TXT message from a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendSmsFromPhoneNumberRequest`](../interfaces/SendSmsFromPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

___

### setConsentStatus

▸ **setConsentStatus**(`requestParameters`, `initOverrides?`): `Promise`<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>

Give or revoke consent for phone usage
Set consent status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetConsentStatusRequest`](../interfaces/SetConsentStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>

___

### setConsentStatusRaw

▸ **setConsentStatusRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>\>

Give or revoke consent for phone usage
Set consent status

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetConsentStatusRequest`](../interfaces/SetConsentStatusRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConsentStatusDto`](../interfaces/ConsentStatusDto.md)\>\>

___

### setPhoneFavourited

▸ **setPhoneFavourited**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Set and return new favorite state for a phone
Set phone favourited state

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetPhoneFavouritedRequest`](../interfaces/SetPhoneFavouritedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### setPhoneFavouritedRaw

▸ **setPhoneFavouritedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Set and return new favorite state for a phone
Set phone favourited state

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetPhoneFavouritedRequest`](../interfaces/SetPhoneFavouritedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### testPhoneNumberSendSms

▸ **testPhoneNumberSendSms**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Test a phone number by sending an SMS to it. NOTE this is only for internal use to check that a phone number is working. For end-to-end phone testing see https://docs.mailslurp.com/txt-sms/
Test sending an SMS to a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestPhoneNumberSendSmsRequest`](../interfaces/TestPhoneNumberSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### testPhoneNumberSendSmsRaw

▸ **testPhoneNumberSendSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Test a phone number by sending an SMS to it. NOTE this is only for internal use to check that a phone number is working. For end-to-end phone testing see https://docs.mailslurp.com/txt-sms/
Test sending an SMS to a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestPhoneNumberSendSmsRequest`](../interfaces/TestPhoneNumberSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### updatePhoneNumber

▸ **updatePhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Set field for phone number
Update a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdatePhoneNumberRequest`](../interfaces/UpdatePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### updatePhoneNumberRaw

▸ **updatePhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Set field for phone number
Update a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdatePhoneNumberRequest`](../interfaces/UpdatePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### validatePhoneNumber

▸ **validatePhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberValidationDto`](../interfaces/PhoneNumberValidationDto.md)\>

Validate a phone number
Verify validity of a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidatePhoneNumberRequest`](../interfaces/ValidatePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberValidationDto`](../interfaces/PhoneNumberValidationDto.md)\>

___

### validatePhoneNumberRaw

▸ **validatePhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberValidationDto`](../interfaces/PhoneNumberValidationDto.md)\>\>

Validate a phone number
Verify validity of a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidatePhoneNumberRequest`](../interfaces/ValidatePhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberValidationDto`](../interfaces/PhoneNumberValidationDto.md)\>\>

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
