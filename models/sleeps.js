const db = require('../database/dbConfig.js');
const table = 'sleeps'
module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  getDuration,
  remove
};

function find() {
  return db(table).select();
}

function findBy(filter) {
  return db(table).where(filter);
}

async function add(item) {
  const [id] = await db(table).insert(item);
  return findById(id);
}

function findById(id) {
  return db(table)
    .where({ id })
    .first();
}

async function update(id, item) {
  await db(table)
    .where('id', Number(id))
    .update(item);
  
  return findById(id);
}

function remove(id) {
  return db(table)
    .where('id', Number(id))
    .del();
}

function getDuration(sleep) {
  const { timeWakeUp, timeInBed } = sleep
  return (new Date(timeWakeUp) - new Date(timeInBed)) / 60 / 60 / 1000
}