const db = require('../data/config')

async function get() {
    return db('gemstones');
}

async function getById(id) {
    return db('gemstones')
      .where({ id })
      .first()
  }

async function add(data) {
    return db('gemstones')
        .insert(data)
        .then(ids => {
            return getById(ids[0]);
        })}


async function remove(id) {
    return db('gemstones')
    .where('id', id)
    .del()
}

module.exports = {
    get, 
    add,
    remove,
}