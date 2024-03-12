const sqlite3 = require("better-sqlite3"); // SQLite3 library for Node.js

const DB_SOURCE = "db.sqlite";

const db = new sqlite3(DB_SOURCE);

try {
  // booleans isFavorite and isDeleted use 0 and 1 for false and true respectively for simplicity purposes
  db.prepare(
    `CREATE TABLE IF NOT EXISTS videofile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename text UNIQUE,
      duration text,
      isFavorite integer,
      isDeleted integer
    )`
  ).run();
} catch (error) {
  console.log(
    "An error occurred while creating the table: ",
    error.message || error
  );
}

const addVideo = (filename, duration) => {
  const statement = db.prepare(
    `INSERT OR IGNORE INTO videofile (filename, duration, isFavorite, isDeleted) VALUES (?, ?, ?, ?)`
  );
  const info = statement.run(filename, duration, 0, 0);
  return info.changes;
};

const switchDeleteVideo = (id) => {
  const isDeleted = db
    .prepare(`SELECT isDeleted FROM videofile WHERE id = ?`)
    .get(id).isDeleted;
  const info = db
    .prepare(`UPDATE videofile SET isDeleted = ?, isFavorite = 0 WHERE id = ?`)
    .run(isDeleted ? 0 : 1, id);
  return info.changes;
};

const switchFavVideo = (id) => {
  const isFavorite = db
    .prepare(`SELECT isFavorite FROM videofile WHERE id = ?`)
    .get(id).isFavorite;
  const info = db
    .prepare(`UPDATE videofile SET isFavorite = ? WHERE id = ?`)
    .run(isFavorite ? 0 : 1, id);
  return info.changes;
};

const getAllVideos = () => {
  return db.prepare(`SELECT * FROM videofile WHERE isDeleted = 0`).all();
};

const getFavoriteVideos = () => {
  return db
    .prepare(`SELECT * FROM videofile WHERE isFavorite = 1 AND isDeleted = 0`)
    .all();
};

const getDeletedVideos = () => {
  return db.prepare(`SELECT * FROM videofile WHERE isDeleted = 1`).all();
};

module.exports = {
  db,
  addVideo,
  switchFavVideo,
  switchDeleteVideo,
  getAllVideos,
  getFavoriteVideos,
  getDeletedVideos,
};
