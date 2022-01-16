const db = require("../config/connection");
const { CaseManager } = require("../models");

db.once("open", async () => {
  await CaseManager.deleteMany();

  await CaseManager.create({
    username: "Pamela",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await CaseManager.create({
    username: "Elijah",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
