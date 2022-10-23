import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Country = new Schema({
  name: String,
  independent: Boolean,
  currencies: [String],
  capital: String,
  region: String,
  languages: Object,
  landlocked: Boolean,
  flags: { png: String },
  population: Number,
  continents: [String],
});

export default mongoose.model("countries", Country);
