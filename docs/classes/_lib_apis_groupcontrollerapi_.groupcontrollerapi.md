[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/GroupControllerApi"](../modules/_lib_apis_groupcontrollerapi_.md) › [GroupControllerApi](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md)

# Class: GroupControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **GroupControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#protected-configuration)

### Methods

* [addContactsToGroup](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#addcontactstogroup)
* [addContactsToGroupRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#addcontactstogroupraw)
* [createGroup](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#creategroup)
* [createGroupRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#creategroupraw)
* [deleteGroup](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#deletegroup)
* [deleteGroupRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#deletegroupraw)
* [getAllGroups](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getallgroups)
* [getAllGroupsRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getallgroupsraw)
* [getGroup](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getgroup)
* [getGroupRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getgroupraw)
* [getGroupWithContacts](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getgroupwithcontacts)
* [getGroupWithContactsRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getgroupwithcontactsraw)
* [getGroups](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getgroups)
* [getGroupsRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#getgroupsraw)
* [removeContactsFromGroup](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#removecontactsfromgroup)
* [removeContactsFromGroupRaw](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#removecontactsfromgroupraw)
* [request](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#protected-request)
* [withMiddleware](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new GroupControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[GroupControllerApi](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[GroupControllerApi](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  addContactsToGroup

▸ **addContactsToGroup**(`requestParameters`: [AddContactsToGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.addcontactstogrouprequest.md)): *Promise‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)›*

*Defined in [src/lib/apis/GroupControllerApi.ts:132](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L132)*

Add contacts to a group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddContactsToGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.addcontactstogrouprequest.md) |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)›*

___

###  addContactsToGroupRaw

▸ **addContactsToGroupRaw**(`requestParameters`: [AddContactsToGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.addcontactstogrouprequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L76)*

Add contacts to a group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [AddContactsToGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.addcontactstogrouprequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)››*

___

###  createGroup

▸ **createGroup**(`requestParameters`: [CreateGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.creategrouprequest.md)): *Promise‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)›*

*Defined in [src/lib/apis/GroupControllerApi.ts:185](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L185)*

Create a group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.creategrouprequest.md) |

**Returns:** *Promise‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)›*

___

###  createGroupRaw

▸ **createGroupRaw**(`requestParameters`: [CreateGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.creategrouprequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:142](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L142)*

Create a group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.creategrouprequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)››*

___

###  deleteGroup

▸ **deleteGroup**(`requestParameters`: [DeleteGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.deletegrouprequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/GroupControllerApi.ts:234](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L234)*

Delete group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.deletegrouprequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteGroupRaw

▸ **deleteGroupRaw**(`requestParameters`: [DeleteGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.deletegrouprequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/GroupControllerApi.ts:195](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L195)*

Delete group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.deletegrouprequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getAllGroups

▸ **getAllGroups**(`requestParameters`: [GetAllGroupsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getallgroupsrequest.md)): *Promise‹[PageGroupProjection](../interfaces/_lib_models_pagegroupprojection_.pagegroupprojection.md)›*

*Defined in [src/lib/apis/GroupControllerApi.ts:281](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L281)*

Get all Contact Groups in paginated format

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllGroupsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getallgroupsrequest.md) |

**Returns:** *Promise‹[PageGroupProjection](../interfaces/_lib_models_pagegroupprojection_.pagegroupprojection.md)›*

___

###  getAllGroupsRaw

▸ **getAllGroupsRaw**(`requestParameters`: [GetAllGroupsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getallgroupsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageGroupProjection](../interfaces/_lib_models_pagegroupprojection_.pagegroupprojection.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:241](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L241)*

Get all Contact Groups in paginated format

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllGroupsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getallgroupsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageGroupProjection](../interfaces/_lib_models_pagegroupprojection_.pagegroupprojection.md)››*

___

###  getGroup

▸ **getGroup**(`requestParameters`: [GetGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgrouprequest.md)): *Promise‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)›*

*Defined in [src/lib/apis/GroupControllerApi.ts:332](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L332)*

Get group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgrouprequest.md) |

**Returns:** *Promise‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)›*

___

###  getGroupRaw

▸ **getGroupRaw**(`requestParameters`: [GetGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgrouprequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:291](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L291)*

Get group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgrouprequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupDto](../interfaces/_lib_models_groupdto_.groupdto.md)››*

___

###  getGroupWithContacts

▸ **getGroupWithContacts**(`requestParameters`: [GetGroupWithContactsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgroupwithcontactsrequest.md)): *Promise‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)›*

*Defined in [src/lib/apis/GroupControllerApi.ts:381](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L381)*

Get group and contacts belonging to it

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetGroupWithContactsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgroupwithcontactsrequest.md) |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)›*

___

###  getGroupWithContactsRaw

▸ **getGroupWithContactsRaw**(`requestParameters`: [GetGroupWithContactsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgroupwithcontactsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:340](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L340)*

Get group and contacts belonging to it

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetGroupWithContactsRequest](../interfaces/_lib_apis_groupcontrollerapi_.getgroupwithcontactsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)››*

___

###  getGroups

▸ **getGroups**(): *Promise‹Array‹[GroupProjection](../interfaces/_lib_models_groupprojection_.groupprojection.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:417](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L417)*

Get all groups

**Returns:** *Promise‹Array‹[GroupProjection](../interfaces/_lib_models_groupprojection_.groupprojection.md)››*

___

###  getGroupsRaw

▸ **getGroupsRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[GroupProjection](../interfaces/_lib_models_groupprojection_.groupprojection.md)›››*

*Defined in [src/lib/apis/GroupControllerApi.ts:391](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L391)*

Get all groups

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[GroupProjection](../interfaces/_lib_models_groupprojection_.groupprojection.md)›››*

___

###  removeContactsFromGroup

▸ **removeContactsFromGroup**(`requestParameters`: [RemoveContactsFromGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.removecontactsfromgrouprequest.md)): *Promise‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)›*

*Defined in [src/lib/apis/GroupControllerApi.ts:481](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L481)*

Remove contacts from a group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [RemoveContactsFromGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.removecontactsfromgrouprequest.md) |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)›*

___

###  removeContactsFromGroupRaw

▸ **removeContactsFromGroupRaw**(`requestParameters`: [RemoveContactsFromGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.removecontactsfromgrouprequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)››*

*Defined in [src/lib/apis/GroupControllerApi.ts:425](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/GroupControllerApi.ts#L425)*

Remove contacts from a group

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [RemoveContactsFromGroupRequest](../interfaces/_lib_apis_groupcontrollerapi_.removecontactsfromgrouprequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[GroupContactsDto](../interfaces/_lib_models_groupcontactsdto_.groupcontactsdto.md)››*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[request](_lib_runtime_.baseapi.md#protected-request)*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)*

*Defined in [src/lib/runtime.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L30)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/_lib_runtime_.middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**<**T**>(`this`: T, ...`postMiddlewares`: Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)*

*Defined in [src/lib/runtime.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L44)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**<**T**>(`this`: T, ...`preMiddlewares`: Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*
