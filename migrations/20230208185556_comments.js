/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("comments", (table) => {
      table.increments("id").primary();
      table.text("text").notNullable();
      table.integer('likes').notNullable()
      table.integer('userid').notNullable;
      table.integer('postid').notNullable;
      table.foreign("userid").references("id").inTable("users");
      table.foreign("postid").references("id").inTable("posts");
      table.dateTime("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("comments");
  };

