const db = require('../data/db-config');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  return db('steps as s')
    .join('schemes as sc', 'sc.id', 's.scheme_id')
    .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
    .where({ scheme_id: id });
}

function add(scheme) {
  return db('schemes').insert(scheme);
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes);
}

function remove(id) {
  return db('schemes').where({ id }).del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
