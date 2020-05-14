
exports.seed = async function(knex) {
  await knex('gemstones').truncate()
  await knex('gemstones').insert([
    { name: 'Aquamarine', mohs_scale: 7.5 },
    { name: 'Tigers Eye', mohs_scale: 7 },
    { name: 'Aventurine', mohs_scale: 6.5 },
    { name: 'Carbonado', mohs_scale: 10 },
    { name: 'Lapis Lazuli', mohs_scale: 5.5 },
    { name: 'Garnet', mohs_scale: 6 },
    { name: 'Fluorite', mohs_scale: 4 },
  ])
};
