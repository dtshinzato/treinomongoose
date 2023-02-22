import express from "express";
import { GameModel } from "../models/games.model.js";

const gameRouter = express.Router();

gameRouter.post("/", async (req, res) => {
  try {
    const newGame = await GameModel.create({ ...req.body });
    return res.status(201).json(newGame);
  } catch (error) {
    console.log(error);
  }
});

export { gameRouter };
