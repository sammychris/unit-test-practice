const axios = require("axios");
const getPeople = require("./script2");

// it("calls swapi to get people", (done) => {
//   expect.assertions(1);
//   getPeople(axios).then((data) => {
//     expect(data.count).toEqual(82);
//     done();
//   });
// });

// it("calls swapi to get count and greater than", (done) => {
//   expect.assertions(1);
//   getPeople(axios).then((data) => {
//     expect(data.count).toEqual(82);
//     // expect(data.results.length).toBeGreaterThan(10);
//     done();
//   });
// });

it("getPeople returns count and results", (done) => {
  const mockFetch = {
    get: jest.fn().mockReturnValue(
      Promise.resolve({
        data: {
          count: 87,
          results: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
      })
    ),
  };

  expect.assertions(4);
  getPeople(mockFetch).then((data) => {
    expect(mockFetch.get.mock.calls.length).toBe(1);
    expect(mockFetch.get).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});
