const { selectTop, countItems } = require("./modules/DBQueryHandler");
const Citizen = require("./modules/Citizen");

async function searchDBString(table, searchString) {
  const dataQuery = await selectTop(table, searchString);
  const countQuery = await countItems(table, searchString);

  let citizen = new Citizen(
    dataQuery[0],
    +JSON.stringify(countQuery[0][0][""])
  );

  return citizen;
}

module.exports.searchDBString = searchDBString;
