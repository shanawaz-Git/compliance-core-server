const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRouter");
const getRouter = require("./routes/getRouter");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/post", postRouter);
app.use("/", getRouter);

// app.get("/", (req, res) => {
//   res.status(200).send("Hello, Server is running good, have nice day").end();
// });

app.listen(PORT, () => {
  console.log(`the server is running in localhost:${PORT}`);
});
