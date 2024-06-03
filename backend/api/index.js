import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import connectDB from "./config/db.js";
import schema from "./schema/schema.js";
import morgan from "morgan";

const port = process.env.PORT;

const app = express();

// Connect to database
connectDB();
app.use(cors());
app.use(morgan("tiny"));
app.get("/", (req, res) =>
  res.send("Welcome to project mgmt api - PrathmTayade")
);
app.use("/health", (req, res) => res.json({ health: "ok" }).status(200));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, console.log(`Server running on port ${port}`));

export default app;
