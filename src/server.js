const app = require("./app");

const knex = require("knex");
const { PORT } = require("./config");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

app.set("db", knexInstance);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
