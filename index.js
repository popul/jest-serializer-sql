const format = require('pg-formatter').format;
const _ = require('lodash/fp');

const constructorNames = [
  'Builder',
  'Raw',
  'SelectQueryBuilder', // TypeORM
  'InsertQueryBuilder', // TypeORM
  'UpdateQueryBuilder', // TypeORM
  'DeleteQueryBuilder', // TypeORM
  'RelationQueryBuilder', // TypeORM
]

module.exports = {
  test: _.pipe(
    _.get('constructor.name'),
    n => constructorNames.indexOf(n) >= 0
  ),
  print:
    _.pipe(
      v => v.toString(),
      v => v.replace(/"/g, ''),
      format
    )
};
