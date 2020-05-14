
exports.up = async function(knex) {
  await knex.schema.createTable('gemstones', (table) => {
      table.increments('id')
      table.text('name')
      table.float('mohs_scale')
  } )
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('gemstones')
}
