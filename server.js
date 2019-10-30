//const verifyUserToken = require("./services/verifyUserToken")
const express = require("express");
const next = require("next");
//const bodyParser = require("body-parser");
///const multer = require("multer");
const PORT = process.env.PORT || 3001; //don't forget to change process.env.PORT value to 3001 for development
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors')
const dev = process.env.NODE_ENV !== "production";
//const Mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017/work"
dotenv.config();

const app = next({ dev });
app.use(cors())
const handle = app.getRequestHandler(); //part of next config

//const db = mongoose.connect(Mongo_uri, { useFindAndModify: false })
app
  .prepare()
  .then(() => {
    const server = express();

    //  server.use(bodyParser.json());
    //server.use(bodyParser.urlencoded({ extended: true }))

    // server.use('/topic', require('./routes/index'))
    // server.use('/auth', verifyUserToken, require('./routes/index'))
    //server.use('/auth', require('./routes/index')) //Coming back to fix issue, meanwhile this works

    server.get("/signin", (req, res) => {
      let actualPage = "/";
      console.log("Request was made to this page");
      app.render(req, res, actualPage);
    });

    server.get("/user/profile", (req, res) => {
      let actualPage = "/profile";
      console.log("Request was made to the profile page");
      app.render(req, res, actualPage);
    });

    server.get("/signup", (req, res) => {
      let actualPage = "/";
      app.render(req, res, actualPage);
    });

    server.get("/addoption/:id", (req, res) => {
      let actualPage = "/addoption";
      let queryParams = { id: req.params.id };
      // console.log(queryParams);
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/updateTag/:id", (req, res) => {
      let actualPage = "/updateTag";
      let queryParams = { id: req.params.id };
      // console.log(queryParams);
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/profile/:username", (req, res) => {
      let actualPage = "/profile";
      let queryParams = { username: req.params.username };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/topic/:name", (req, res) => {
      let actualPage = "/topicview";
      let queryParams = { name: req.params.name };
      // console.log(queryParams, " i am here");
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/user/:username", (req, res) => {
      let actualPage = "/user";
      let queryParams = { username: req.params.username };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/updatehistory/:option", (req, res) => {
      let actualPage = "/updatedOption";
      let queryParams = { option: req.params.option };
      app.render(req, res, actualPage, queryParams);
    });

    //Update History
    server.get("/update-history", (req, res) => {
      let actualPage = "/updatedQuestion";
      let queryParams = { questionId: req.query.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/option/:option", (req, res) => {
      let actualPage = "/option";

      let queryParams = { option: req.params.option };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/option-con", (req, res) => {
      let actualPage = "/updatedCon";
      let queryParams = { id: req.query.id };
      console.log(queryParams);
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/option-pro", (req, res) => {
      let actualPage = "/updatePro";
      let queryParams = { id: req.query.id };
      console.log(queryParams);
      app.render(req, res, actualPage, queryParams);
    });

    //Tags here
    server.get("/tags/:tag", (req, res) => {
      let actualPage = "/tag";
      let queryParams = { tagie: req.params.tag };
      console.log(queryParams);
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
