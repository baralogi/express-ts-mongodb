import { Request, Response } from "express";

class userController {
    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.username);
    }
}

export default new userController();
