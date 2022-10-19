import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Country = new Schema({
  name: { type: String },
  independent: { type: Boolean },
  currencies: { type: String },
  capital: { type: String },
  region:{ type: String },
  languages: { type: String },
  landlocked: { type: Boolean },
  population:{ type: Number},
  continents: { type: String },
});

export default mongoose.model("countries", Country);






