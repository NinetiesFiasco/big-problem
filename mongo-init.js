db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_INITDB_DATABASE
    }
  ]
});

db.mycollection.insert([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
]);