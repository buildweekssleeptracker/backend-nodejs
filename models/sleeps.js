const db = require('../database/dbConfig.js');
const table = 'sleeps'
module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  getDuration,
  getScore,
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
  const result = await db(table)
    .where('id', Number(id))
    .update(item);

    if (result) {
      return await findById(id);
    }
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

function getScore(sleep) {
  console.log(sleep)

  const { moodBeforeBed, moodDuringDay, moodAfterBed } = sleep
  return (moodDuringDay + moodAfterBed + moodBeforeBed) / 3
}