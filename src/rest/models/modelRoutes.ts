import express, { Request, Response, Router } from "express";
import Model from "../../object/Model";
import { getAllModels } from "../../service/models/modelUtils";

const modelRoutes: Router = express.Router();

modelRoutes.get("/api/models", (req: Request, res: Response) => {
    const models: Array<Model> = getAllModels();
    res.send("all models: " + JSON.stringify(models));
});

export default modelRoutes;