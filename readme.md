# Countries of the World API

An API containing select information about the countries of the world. Includes:

- Name of country
- Whether it's independent or not
- The country's capital city
- Region of the world
- Languages spoken
- Whether it's landlocked or not
- Images of the country's flag
- Population
- Continent

## Technologies Used

This API was built with Mongoose and Express.
Languages used are JavaScript and JSON.

## Usage

[Postman](https://www.postman.com/) is the recommended platform for using this API for CRUD functionality.

Users can search for countries in the following ways:

- To get all countries

```js
/countries
```

- Search for a country by ID number

```js
/countries/635155b08cdb373addedf388
```

![id](/images/searchbyid.png)

- Search for country by name

```js
/countries/name/thailand
```

![id](/images/searchbyname.png)

- For countries that are two or more words, simply use a space or %20

```
countries/name/costa rica
countries/name/costa20%rica
```

- Create a new country
- Delete a country

## References and Contributions

All data has been pulled from [Rest Countries API](https://restcountries.com/).
