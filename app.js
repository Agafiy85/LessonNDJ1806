const express = require("express");
const homePages = require("./routes/homePages");
const about = require("./routes/about");
const contact = require("./routes/contact");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set('views', 'views');

app.use(homePages);
app.use(about);
app.use(contact);


app.use((req, res, next) => {
    res.send('<h1>Not Found</h1>');
    });




app.listen(3000);