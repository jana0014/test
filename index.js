const express = require("express");
require("./pkg/db");
const config = require("./pkg/config");

const { getAll, getOne, create, update, remove } = require("./handlers/faculties");

const api = express();

api.use(express.json());

api.get("/api/faculty", getAll);

api.get("/api/faculty/:id", getOne);

api.post("/api/faculty", create);

api.put("/api/faculty/:id", update);

api.delete("/api/faculty/:id", remove);

api.listen(config.get("development").port, (err) => {
  err ? console.log(err) : console.log(`Server started on port ${config.get("development").port}`);
});
