exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('sleeps', tbl => {
        tbl.increments()

        tbl.datetime('timeInBed')
        .notNullable()

        tbl.datetime('timeWakeUp')
        .notNullable()

        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('auth')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.timestamps(true, true); // create_at and updated_at
    })
};

exports.down = function(knex, Promise) {
    
    return knex.schema.dropTableIfExists('sleeps')
};
