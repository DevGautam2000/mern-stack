const express = require("express");
const db = require("./db");
const app = express();
const port = process.env.PORT || 5000;
const Pizza = require("./models/pizzaModel");
const pizzaRoute = require("./routes/pizzaRoute");

app.use(express.json());

app.use("/api/pizzas/", pizzaRoute);

app.get("/", (req, res) => {
  res.send("Server running at " + port);
});

app.listen(port, () => {
  console.log("Server running at " + port);
});
