exports.up = function(knex, Promise) {
    return knex.schema.table('sleeps', tbl => {
      tbl
      .float('duration')
    //   .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('sleeps', tbl => {
        tbl.dropColumn('duration');
      });
  };
  