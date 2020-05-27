import { Request, Response } from "express";

class userController {
    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.user);
    }
}

export default new userController();
