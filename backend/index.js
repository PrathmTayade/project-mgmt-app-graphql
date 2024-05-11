import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import connectDB from "./config/db.js";
import schema from "./schema/schema.js";

const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB;

app.use(cors());
app.use("/health", (req, res) => res.json({ health: "ok" }).status(200));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
