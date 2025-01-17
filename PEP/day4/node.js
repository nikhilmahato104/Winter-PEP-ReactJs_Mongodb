const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("You contacted the root path");
});

app.get("/:username", (req, res) => {
    console.log(req.params); // Here, you'll get { username: 'niikhil' }
    res.send("You contacted a path with a username");
});
//how to secqure the website
//1.https
//SSL