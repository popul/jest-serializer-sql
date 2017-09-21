const knex = require('knex');

const sql = `SELECT id, foo, bar, 'test_type' AS type FROM table1 UNION ALL
select id, title FROM table2 ORDER BY id DESC, title ASC NULLS LAST`;

test('should beautify SQL', () => {
  const pg = knex({ client: 'pg'});

  expect(pg.raw(sql)).toMatchSnapshot();
});
