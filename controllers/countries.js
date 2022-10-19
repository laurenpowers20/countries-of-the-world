import Country from "../Model/Country.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findById(id);

    if (country) {
      return res.json(country);
    }

    res.status(404).json({ message: "Country not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
