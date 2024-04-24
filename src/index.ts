import express from "express";
import "./db/mongoose.js";
import { cardRouter } from "./routers/card.js";
import { defaultRouter } from "./routers/default.js";
const app = express();
app.use(express.json());
app.use(cardRouter);
app.use(defaultRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on", port);
})