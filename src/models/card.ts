import { Document, Schema, model } from "mongoose";

interface CardDocumentInterface extends Document {
  id: number,
  name: string,
  mana: number,
  color: "white" | "blue" | "black" | "red" | "green" | "acolor" | "multicolor",
  typeLine:   "ground" | "creature" | "enchanting" | "conjure" | "instant" | "artefact" | "planeswalker",
  oddity: "common" | "unfrequent" | "mythic",
  rules: string,
  strength?: number,
  endurance?: number,
  loyalty?: number,
  marketValue: number
}

const CardSchema = new Schema<CardDocumentInterface>({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  mana: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    trim: true,
    required: true,
    enum: ["white", "blue", "black", "red", "green", "acolor", "multicolor"]
  },
  typeLine: {
    type: String,
    trim: true,
    required: true,
    enum: ["ground", "creature", "enchanting", "conjure", "instant", "artefact", "planeswalker"]
  },
  oddity: {
    type: String,
    trim: true,
    required: true,
    enum: ["common", "unfrequent", "mythic"]
  },
  rules: {
    type: String,
    required: true,
    trim: true,
  },
  strength: {
    type: Number,
  },
  endurance: {
    type: Number,
  },
  loyalty: {
    type: Number,
  },
  marketValue: {
    type: Number,
    required: true
  }
});

export const Card = model<CardDocumentInterface>("Card", CardSchema);