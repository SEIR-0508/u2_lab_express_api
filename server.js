const express = require("express");
const controller = require("./controllers/movieController.js");
const cors = require("cors");
const PORT = process.envPORT || 3001;
const db = require("./db");

const app = express();
const AppRouter = require("./routes/AppRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`);
});

app.get("/", controller.getMovies);

app.use("/api", AppRouter);
