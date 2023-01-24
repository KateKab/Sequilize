const { selectTop, countItems } = require("../modules/DBQueryHandler");
const { searchDBString } = require("../searchDBString");
const sequelize = require("sequelize");

jest.mock("../modules/DBQueryHandler", () => {
  return {
    selectTop: jest.fn().mockResolvedValue([
      [
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
      ],
      2,
    ]),
    countItems: jest.fn().mockResolvedValue([[{ "": 2 }], 1]),
  };
});

test("found data equals to displayed data", async () => {
  const topEqualsData = await searchDBString();
  expect(topEqualsData.data).toHaveLength(2);
  expect(topEqualsData).toEqual({
    count: 2,
    data: [
      { id: "4         ", name: "amanda    ", description: "ann sis   " },
      { id: "1         ", name: "ann       ", description: "hello ann " },
    ],
  });
});
