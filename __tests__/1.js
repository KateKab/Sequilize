const { selectTop, countItems } = require("../modules/DBQueryHandler");
const { searchDBString } = require("../searchDBString");
const sequelize = require("sequelize");

jest.mock("../modules/DBQueryHandler", () => {
  return {
    selectTop: jest.fn().mockResolvedValue([[], 0]),
    countItems: jest.fn().mockResolvedValue([[{ "": 0 }], 1]),
  };
});

test("empty result, nothing found", async () => {
  const nodata = await searchDBString();
  expect(selectTop).toHaveBeenCalled();
  expect(countItems).toHaveBeenCalled();
  expect(nodata).toEqual({ count: 0, data: [] });
});
