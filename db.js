const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const internCollection = require('./interns');


const url = 'mongodb://localhost:27017/oluwashane';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    console.log("Database created by oluwashane")
    const collection = db("oluwashane").collection(internCollection);
    console.log(collection);
    db.close();
})
