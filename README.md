# A Jest snapshot serializer that beautifies SQL.

[![NPM version](https://badge.fury.io/js/jest-serializer-sql.svg)](https://npmjs.org/package/jest-serializer-sql)
[![Build Status](https://travis-ci.org/rayrutjes/jest-serializer-sql.svg?branch=master)](https://travis-ci.org/popul/jest-serializer-sql)

## Install

Add the package as a dev-dependency:

```bash
# With npm
npm install --save-dev jest-serializer-sql

# With yarn
yarn add --dev jest-serializer-sql
```

Update package.json to [let Jest know about the serializer](https://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string):

```json
"jest": {
  "snapshotSerializers": ["jest-serializer-sql"]
}
```