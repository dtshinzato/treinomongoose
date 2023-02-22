import express from "express";
import * as dotenv from "dotenv";
import { connectToDB } from "./config/config.db.js";
import { gameRouter } from "./routes/game.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/game", gameRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
