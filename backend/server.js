const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


// config
dotenv.config({ path: "backend/config/config.env" });

// connect database
connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
