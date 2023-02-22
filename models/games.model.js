import { Schema, model } from "mongoose";

const gameSchema = new Schema({
  name: { type: String, required: true },
  year: { type: Number, maxlength: 4 },
});

export const GameModel = model("Game", gameSchema);
