const path = require('path');

const express = require("express");
const app = express();

const product = require("./api/product");

app.use('/static', express.static(path.join(__dirname + '/public')));

app.use(express.json({ extended: false }));

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen (PORT, () => console.log(`Server is running in port ${PORT}`));
