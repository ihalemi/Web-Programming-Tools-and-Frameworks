/*********************************************************************************
*		WEB322	– Assignment 02
*		I	declare	that	this	assignment	is	my	own	work	in	accordance	with	Seneca		Academic	Policy.		No	part	
*		of	this	assignment	has	been	copied	manually	or	electronically	from	any	other	source	
*		(including	3rd	party	web	sites)	or	distributed	to	other	students.
*	
*		Name:	Ilias Halemi	Student	ID:	062111133	Date:	May 28th, 2018
*
*		Online	(Heroku)	Link:	https://rocky-coast-24451.herokuapp.com/
*
********************************************************************************/


const express = require("express");
const app = express();
const path = require("path");
const service = require("./data-service.js");

const HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/employees", (req, res) => {  

    service.getAllEmployees().then(function(data) {
        res.json(data);
    }).catch(function(err) {
        res.json({ message: err });
    });
});

app.get("/managers", function(req, res) {
service.getManagers().then(function(data) {
    res.json(data);
}).catch(function(err) {
    res.json({ message: err });
});
});

app.get("/departments", function(req, res) {
service.getDepartments().then(function(data) {
    res.json(data);
}).catch(function(err) {
    res.json({ message: err });
});
});

app.use(function(req, res) {
res.status(404).send("Page Not Found.");
});

service.initialize() .then(() =>{
    app.listen(HTTP_PORT, onHttpStart);
}).catch((err) => {
    console.log("Unable to connect to start server");
});

