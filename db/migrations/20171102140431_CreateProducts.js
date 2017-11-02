
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
  	table.increments('id')
  	table.string('title')
  	table.text('description')
  	table.decimal('price')
  	table.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};