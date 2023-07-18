
const mongoose = require('mongoose');
let connection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/crud");
        console.log("Conectado a Mongo");
    } catch (er) {
        console.log(er);
    }

}

module.exports = {connection};