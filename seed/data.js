import db from "../db/connection.js";
import Country from "../Model/Country.js";
import countries from "./countries.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();
  await Country.create(countries);
  await db.close();
};

insertData();
