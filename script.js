const googleDB = [
  "sammy.com",
  "facebook.com",
  "facesmatch.com",
  "samuel.com",
  "dog.com",
  "doghouse.com",
  "dogfamily.com",
  "dogfriend.com",
  "dogs.com",
];

const googleSearch = (search, db) => {
  const result = db.filter((website) => {
    return website.includes(search);
  });
  return result.slice(0, 3);
};

module.exports = googleSearch;
