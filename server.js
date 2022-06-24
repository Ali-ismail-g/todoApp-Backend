require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const taskRouter = require("./routes/tasks");

app.use(express.json());
app.use(cors());

// routes
app.use("/api/tasks", taskRouter);

//to log any errors in the console
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () =>
  console.log(`Server is running and listening to port:${port}`)
);
