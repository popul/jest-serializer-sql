const format = require('pg-formatter').format;
const _ = require('lodash/fp');

module.exports = {
  test: _.pipe(
    _.get('constructor.name'),
    n => n === 'Builder' || n === 'Raw'
  ),
  print:
    _.pipe(
      v => v.toString(),
      v => v.replace(/"/g, ''),
      format
    )
};
