const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookdb', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));