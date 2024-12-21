var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://athulyadileep012:AthulyaDileep@cluster0.q3mam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })