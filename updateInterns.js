const assert = require('assert');

const updateItem = (db, callBack) => {
    const query = { movie: "The Banker" };
    const update = {
        $set: {
            movie: 'The Matrix',
            year: '1999',
            rating: '8.5'
        }
    }
    db.collection("myMovies").updateOne(query, update, (err, result) => {
        assert.equal(err, null);
        console.log('1 document updated');
        // console.log(result);
        callBack(result);
    });
}

module.exports = updateItem;