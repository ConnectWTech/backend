/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("profile", (table) => {
      table.increments("id").primary();
      table.string("technologys").notNullable();
      table.text("bio").notNullable();
      table.string("photo").notNullable();
      table.integer('userid').notNullable;
      table.foreign("userid").references("userid").inTable("users");
 
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("profile");
  };
  