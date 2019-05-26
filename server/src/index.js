const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 4000;
app.use(cors());
app.use(express.static("files"));

app.get("/filesMeta", async function(req, res) {
  try {
    var files = fs.readdirSync("files");
    console.log(files);
    let result = [];
    files.forEach(file => {
      let p = file.split(".");
      result.push({
        name: file,
        type: p[1],
        url: "http://localhost:4000/" + file
      });
    });
    res.json({ files: result });
  } catch (e) {
    res
      .status(500) // HTTP status 500: Internal server error
      .send(e.message);
  }
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
