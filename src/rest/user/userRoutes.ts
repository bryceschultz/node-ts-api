import express, { Request, Response, Router } from "express";
import User from "../../object/User";
import { getUser } from "../../service/user/userUtils";

const userRoutes: Router = express.Router();

userRoutes.get("/api/user/currentUser", (req: Request, res: Response) => {
    const user: User = getUser();
    res.send("current user: " + JSON.stringify(user));
});

export default userRoutes;