/*
const Mysqli = require('mysqli');

let conn = new Mysqli({
  host: 'db',
  post: 3306,
  user: 'root',
  passwd: 'pass',
  db: 'db'
});

let db = conn.emit(false, '');
module.exports = {
  database: db
}
*/
const pgp = require('pg-promise')(/* initialization options */);

const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'fidadwh',
    user: 'fidadwh',
    password: 'Hp1RpVomis5sjhwBEMxB'
};
const db = pgp(cn); 
module.exports = {
    database: db
  }