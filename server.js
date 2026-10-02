// const express = require("express");
// const fs = require("fs/promises");
// const app = express();
// const path = require("path");
// const port = 3000;

// const cache = {};

// const pathToFile = path.join(__dirname, "db.json");

// async function readFile() {
//   try {
//     let data = await fs.readFile(pathToFile, "utf-8");
//     return JSON.parse(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function readFileWithDelay() {
//   await new Promise((resolve, reject) => {
//     setTimeout(resolve, 1500);
//   });

//   let products = await readFile();
//   return products;
// }

// app.get("/products", async (req, res) => {
//   try {
//     let key = req.url;
//     let value = cache[key];
//     if (value) return res.json(value);
//     let products = await readFileWithDelay();
//     cache[key] = products;
//     return res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});