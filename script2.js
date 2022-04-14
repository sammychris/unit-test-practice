const axios = require("axios");

const getPeople = async (request) => {
  const { data } = await request.get("https://swapi.dev/api/people");
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = getPeople;
