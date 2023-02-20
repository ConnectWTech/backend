
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("posts", (table) => {
      table.increments("postid").primary();
      table.string("title").notNullable();
      table.string("hashtag").notNullable();
      table.string("technologys").notNullable();
      table.text("bio").notNullable();
      table.string("photo").notNullable();
      table.string("url").notNullable();
      table.integer('likes').notNullable()
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
    return knex.schema.dropTable("posts");
  };
  

