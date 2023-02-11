[MailSlurp JS](../README.md) / ContentMatchOptions

# Interface: ContentMatchOptions

Options for matching content using regex patterns based on Java Pattern syntax

**`Export`**

**`Interface`**

ContentMatchOptions

## Table of contents

### Properties

- [pattern](ContentMatchOptions.md#pattern)

## Properties

### pattern

• **pattern**: `string`

Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.

**`Memberof`**

ContentMatchOptions
