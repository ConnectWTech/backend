/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("job_applied", (table) => {
      table.increments("id").primary();
      table.integer('userid').notNullable;
      table.integer('jobs_id').notNullable;
      table.foreign("userid").references("userid").inTable("users");
      table.foreign("jobs_id").references("id").inTable("job_post");
      table.text("accepted_or_denied_or_waiting").notNullable()
      table.dateTime("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("job_applied");
  };
