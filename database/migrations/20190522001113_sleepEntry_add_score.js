exports.up = function(knex, Promise) {
    return knex.schema.table('sleeps', tbl => {
      tbl
      .float('score')
    //   .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('sleeps', tbl => {
        tbl.dropColumn('score');
      });
  };
  