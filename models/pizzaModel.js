const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema(
  {
    name: String,
    varients: [],
    prizes: [],
    category: String,
    image: String,
    description: String,
  },
  { timeStamp: true }
);

const pizzaModel = mongoose.model("pizzas", pizzaSchema);

module.exports = pizzaModel;
