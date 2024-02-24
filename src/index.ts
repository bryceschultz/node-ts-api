import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./rest/user/userRoutes";
import modelRoutes from "./rest/models/modelRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.all('/api/user/*', userRoutes)
app.all('/api/models*', modelRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});