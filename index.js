const express = require('express');
const app = new express();
const port = 8080;

app.get("/", (req, res) => {
    return res.send("Hello World!");
});

app.get("/echo/:text", (req, res) => {
    return res.send(req.params.text);
});

let server = app.listen(port, () => {
    console.log("Listening at http://localhost:" + port)
});
