const express = require("express");
const app = express();
const port = 3300;

app.get("/images/random", (req, res) => {
  const imageUrl =
    "https://random-image-pepebigotes.vercel.app/api/random-image";
    res.send(`<img src="${imageUrl}" alt="Random Image">`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
