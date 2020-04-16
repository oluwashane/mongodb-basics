const assert = require('assert').strict

const addDocs = (db, callBack) => {
    const collection = db.collection('myMovies');
    collection.insertMany( [ 
        {movie: "The Banker", year: "2020", rating: 8},  
        {movie: "Bad Boys", year: "2020", rating: 7}, 
        {movie: "The Hunt", year: "2020", rating: 7}, 
        {movie: "Bloodshot", year: "2020", rating: 7.5}, 
        {movie: "First Cow", year: "2020", rating: 6.5}], (err, result) => {
            assert.strictEqual(err, null);
            assert.strictEqual(5, result.result.n);
            assert.strictEqual(5, result.ops.length);
            console.log("Inserted 5 documents into the collection");
            callBack(result);
        });
};

module.exports = addDocs;



