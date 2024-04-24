import express from "express";
import { Card } from "../models/card.js";

export const cardRouter = express.Router();

cardRouter.post("/cards", (req, res) => {
  const card = new Card(req.body);

  card.save().then((card) => {
    res.status(201).send(card);
  }).catch((error) => {
    res.status(400).send(error);
  });
});

cardRouter.get("/cards", (_, res) => {
  Card.find().then((cards) => {
    if (cards.length !== 0) res.send(cards);
    else res.status(400).send();
  }).catch(() => {
    res.status(500).send();
  });
});

cardRouter.get("/cards/:id", (req, res) => {
  const filter = {id: req.params.id.toString()};
  Card.find(filter).then((cards) => {
    if (cards.length !== 0) res.send(cards);
    else res.status(404).send();
  }).catch(() => {
    res.status(500).send();
  });
});

cardRouter.patch("/cards/:id", (req, res) => {
  const allowedUpdates = ["id", "name", "mana", "color",  "typeLine", "oddity", "rules", "strength", "endurance", "loyalty", "marketValue"];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
  if (!isValidUpdate) {
    res.status(400).send();
  }
  else {
    Card.findOneAndUpdate({id: req.params.id.toString()}, req.body, {
      new: true
    }).then((card) => {
      if (!card) res.status(404).send();
      else res.send(card);
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});

cardRouter.delete("/cards/:id", (req, res) => {
  Card.findOneAndDelete({id: req.params.id.toString()}).then((card) => {
    if (!card) res.status(404).send();
    else res.send(card);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
