const { selectTop, countItems } = require("../modules/DBQueryHandler");
const { searchInDb, searchDBString } = require("../searchDBString");
const sequelize = require("sequelize");

jest.mock("../modules/DBQueryHandler", () => {
  return {
    selectTop: jest.fn().mockResolvedValue([
      [
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
        { id: "4         ", name: "amanda    ", description: "ann sis   " },
        { id: "1         ", name: "ann       ", description: "hello ann " },
      ],
      2,
    ]),
    countItems: jest.fn().mockResolvedValue([[{ "": 36 }], 1]),
  };
});

test("found data is larger then displayed data", async () => {
  const topEqualsData = await searchDBString();
  expect(topEqualsData.data).toHaveLength(20);
  expect(topEqualsData.count).toBe(36);
});
