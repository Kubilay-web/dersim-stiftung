const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(cors());

app.use((req, res, next) => {
  // Temiz URL oluştur
  const cleanUrl = req.protocol + "://" + req.get("host") + req.path;

  // Eğer sorgu parametreleri varsa yönlendir
  if (req.query && Object.keys(req.query).length > 0) {
    return res.redirect(cleanUrl);
  }

  next(); // İleriye devam et
});

app.use(express.static(path.join(__dirname, "/public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "Index", "index.html")
  );
});

app.get("/museummobil", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "museummobil", "index.html")
  );
});

app.get("/besuch/behrensbau", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index-De",
      "besuch-behrensbau",
      "index.html"
    )
  );
});

app.get("/besuch/haus-der-parlamentsgeschichte-1", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index-De",
      "haus-der-parlamentsgeschichte-1",
      "index.html"
    )
  );
});

app.get("/ausstellungen", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "ausstellungen", "index.html")
  );
});

app.get("/veranstaltungen", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "veranstaltungen", "index.html")
  );
});

app.get("/ueber-uns/stiftung", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index-De",
      "ueber-unsstiftung",
      "index.html"
    )
  );
});

app.get("/ueber-uns/behrensbau", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Index-De",
      "ueber-uns-behrensbau",
      "index.html"
    )
  );
});

app.get("/ueber-uns/team", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "team", "index.html")
  );
});

app.get("/ueber-uns/stellenangebote", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "stellenangebote", "index.html")
  );
});

app.get("/aktuelles/newsletter", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "newsletter", "index.html")
  );
});

app.get("/presse/presse", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "presse", "index.html")
  );
});

app.get("/leichte-sprache", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-De", "leichte-sprache", "index.html")
  );
});

//EN
app.get("/english", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "Index", "index.html")
  );
});
//EN

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
