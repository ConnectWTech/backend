
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("job_post", (table) => {
      table.increments("id").primary();
      table.string("technologies").notNullable();
      table.text("bio").notNullable();
      table.string("title").notNullable();
      table.integer('userid').notNullable;
      table.foreign("userid").references("userid").inTable("users");
      table.dateTime("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
 
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("job_post");
  };
  