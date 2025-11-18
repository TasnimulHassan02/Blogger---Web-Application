import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; 
import { render } from "ejs";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var title = [];
var text = [];
var cat = [];
var dates = [];

var logged = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server is running on the port: " + port);
});

app.get("/", (req, res) => {
    res.render("index.ejs", { tit: title, tex: text, cate: cat, dat: dates, name: logged });  
});

app.get("/addpost", (req, res) => {
    if (logged === true){
        res.render("addpost.ejs");
    } else {
        res.render("login.ejs");
    }
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/logout", (req, res) => {
    logged = false;
    title = [];
    text = [];
    cat = [];
    dates = [];
    res.render("login.ejs");
});

app.get("/viewpost/:id", (req, res) => {
    const id = req.params.id;
    if (id > 1000){
        res.render("readpost.ejs", {char: id});
    } else {
        res.render("readpost.ejs", {num: id, tit: title, tex: text, cate: cat, dat:dates});
    }
   
});

app.get("/editpost/:id", (req, res) => {
    const id = req.params.id;
    res.render("addpost.ejs", {ids: id, tit: title, tex: text, cate: cat});  
});

app.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id)
    title.splice(id, 1);
    text.splice(id, 1);
    cat.splice(id, 1);
    dates.splice(id, 1);
    res.redirect("/");  
});

app.post("/submit", (req, res) => {
    if (req.body["floatingPasswords"] === "rogerd0@" && req.body["floatingInputs"] === "tasnimulhassan02@gmail.com"){
        logged = true;
        res.render("addpost.ejs", {name: logged});
    } else {
        res.render("login.ejs");
    }
});

app.post("/post", (req, res) => {
    title.push(req.body["title"]);
    text.push(req.body["text"]);
    cat.push(req.body["category"]);
    let today = new Date(); 
    let options = { month: 'short', day: 'numeric'};
    let date = today.toLocaleDateString('en-GB', options);
    dates.push(date);
    res.render("index.ejs", {tit: title, tex: text, cate: cat, dat:dates, name: logged});
});





