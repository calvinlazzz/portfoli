// Example: portfoli/server/db/migrations/[timestamp]_create_portfolio_tables.js
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', function (table) {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.text('description');
        table.string('github', 255);
        table.timestamps(true, true); // created_at, updated_at
      })

  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects');
  };