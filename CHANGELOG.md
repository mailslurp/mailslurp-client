# Changelog
## [15.10.0]
- Replace isomophic fetch with cross fetch and polyfill.
- Remove security issues in node modules.

## [15.0.2]
- Add graphql changes to README.

## [15.0.0]
- Change method signature of controllers to use a single request parameter instead of many individual parameters.

## [14.0.0]
- Add before and since parameters to paginated methods. Parameter count and order has changed for some non-single-parameter functions like `waitForLatestEmail`. Will migrate to all single parameter functions in a later version.

## [10.2.0]
- add more alias methods

## [10.1.3]
- Alter README
- Add replyTo method on emailController
- Add AliasController

## [10.0.0]
- Add sent email controllers and export all api endpoints

## [8.8.0]
- Add mail server endpoints to base client

## [8.7.x]
### Added aliases
- Create email aliases that can hide your email address and act as inbox proxies.

## [7.0.x]
### Added
- Export swagger generated client for better type support. Expose more functionality added to API include webhooks, templates, contacts, groups and more.

## [6.7.0]
### Added
- Add new controllers and tests. Add pagination support

## [6.6.0]
### Added
- Bump underlying swagger dependency to 6.0.0

## [6.4.1]
### Added
- Domain delete endpoints
### Fixed
- Fix bug in custom domain creation

## [6.4.0]
### Added
- Enable custom domains

## [6.3.0]
### Added
- Enable email templating

## [6.2.0]
### Added
- Enable attribution

## [6.1.0]
### Added
- Upload endpoints made public

## [6.0.0]
### Added
- Human-readable exceptions

## [5.*]
### Added
- New endpoints 

## [4.1.2]
### Added
- New dependency on a rebuilt swagger library
- MIT license

## [3.0.17]
### Added
- Bulk operation endpoints
- Raw email endpoints
- Non-breaking

## [3.0.16]
### Added
- Changelog
- More examples
- Descriptions for README
- Non-breaking
