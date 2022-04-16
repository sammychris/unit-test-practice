const googleSearch = require("./script");
const dbMock = [
  "google.com",
  "cat.com",
  "catcall.com",
  "cathouse.com",
  "catfamily.com",
];

describe("googleSearch", () => {
  it("is searching for google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("cat", dbMock)).toEqual([
      "cat.com",
      "catcall.com",
      "cathouse.com",
    ]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
