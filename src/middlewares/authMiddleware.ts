import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/userModels";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    if (!req.headers.authorization) {
        return res.status(401).send("Authorization failed!, No token available")
    }

    let secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token: string = req.headers.authorization.split(" ")[1];

    try {
        const credential: string | object = jwt.verify(token, secretKey);
        if (!credential) {
            return res.status(401).send("Authorization Failed!, Token is Not Valid");
        }

        req.app.locals.credential = credential;
        const x = req.app.locals.credential

        const user = await User.findOne({ username: x.username })
        if (!user) {
            throw new Error('user not found')
        }

        req.app.locals.user = user
        next()
    } catch (error) {
        return res.send(error);
    }

}

