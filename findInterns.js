const assert = require("assert");

const findItem = (db, callBack) => {
    const collection = db.collection('myMovies');
    collection.findOne({}, (err, result) => {
        if (err) throw err;
        console.log("Search Result:")
        console.log(result);
        callBack(result);
    });

    // Return All movies rated 7 in the db
    collection.find({}).toArray((err, result) => {
        assert.equal(err, null);
        result.filter((arr) => {
            if (arr.rating === 7) {
                console.log(arr);
            }
        })

    })

    // Using Projection obj to find title of movies
    collection.find({}, { projection: { movie : 1} }).toArray((err, result) => {
        assert.equal(err, null);
        console.log(result);
        callBack(result);
    })
}

module.exports = findItem;
