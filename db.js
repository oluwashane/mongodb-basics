const mongodb = require('mongodb');
const internCollection = require('./interns');
const findItem = require('./findInterns');
const updateItem = require('./updateInterns');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/oluwashane';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    const dbo = db.db('oluwashane');
    // internCollection(dbo, () => {
    //     db.close
    // }) 
    
    // findItem(dbo, () => {
    //     db.close
    // })

    updateItem(dbo, () => {
        db.close;
    })
})
