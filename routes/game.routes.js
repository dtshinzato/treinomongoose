import express from "express";
import { GameModel } from "../models/games.model.js";

const gameRouter = express.Router();

gameRouter.post("/", async (req, res) => {
  try {
    const newGame = await GameModel.create({ ...req.body });
    return res.status(201).json(newGame);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

gameRouter.get("/", async (req, res) => {
  try {
    const games = await GameModel.find();
    return res.status(200).json(games);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

gameRouter.get("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;

    const game = await GameModel.findOne({ _id: gameId });

    return res.status(200).json(game);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

gameRouter.put("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const updatedGame = await GameModel.findOneAndUpdate(
      { _id: gameId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedGame);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

gameRouter.delete("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const deleted = await GameModel.deleteOne({ _id: gameId });
    return res.status(200).json(deleted);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

export { gameRouter };
