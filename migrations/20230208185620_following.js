/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("following", (table) => {
      table.increments("id").primary();
      table.integer('userid').notNullable;
      table.integer('following_persons_id').notNullable;
      table.foreign("userid").references("userid").inTable("users");
      table.foreign("following_persons_id").references("userid").inTable("users");
      table.dateTime("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("following");
  };
