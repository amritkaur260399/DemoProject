const express = require('express');
const mongoose = require('mongoose');

const route =require("./route/route")

const app = express();
//parse data
//parse data json form to body
app.use(express.json());
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://amritkaur260399:kXnj3dhnJKx9zi7g@cluster0.qcnixvn.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    app.use("/", route);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
