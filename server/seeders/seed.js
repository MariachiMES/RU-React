const db = require("../config/connection");
const { CaseManager } = require("../models");
const caseManagerSeeds = require("./caseManagerSeeds.json");

db.once("open", async () => {
  try {
    await CaseManager.deleteMany({});
    await CaseManager.create(caseManagerSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
