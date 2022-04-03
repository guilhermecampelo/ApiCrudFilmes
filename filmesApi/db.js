var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost/")
            .then(conn => global.conn = conn.db("filmesDb"))
            .catch(err => console.log(err))

//funções CRUD

function findAll(){
  return global.conn.collection("filmes").find().toArray();
}

const ObjectId = require("mongodb").ObjectId;

function findOne(id){
  return global.conn.collection("filmes").findOne(new ObjectId(id));
}

function insert(filme){
  return global.conn.collection("filmes").insertOne(filme);
}

function update(id, filme){
  return global.conn.collection("filmes").updateOne({ _id: new ObjectId(id) }, { $set: filme });
}

function deleteOne(id){
  return global.conn.collection("filmes").deleteOne({ _id: new ObjectId(id)});
}


module.exports = { findAll, findOne, insert, update, deleteOne }
