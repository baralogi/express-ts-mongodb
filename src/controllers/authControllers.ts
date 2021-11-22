import { Request, Response, NextFunction, Router } from "express";
import Authentication from "../utils/authentication";
import User, { IUser } from "../models/User";

class authController {
    signup = async (req: Request, res: Response): Promise<Response> => {
        let { username, email, password } = req.body;
        const hashedPassword: string = await Authentication.passwordHash(password);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        return res.send({
            status: res.statusCode,
            success: true,
            messages: "New user created",
            user
        });

    }

    signin = async (req: Request, res: Response): Promise<Response> => {
        // find user by email
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(422).send({
                status: res.statusCode,
                success: false,
                messages: "User not found",
            });
        }

        // check password
        let compare = await Authentication.passwordCompare(password, user.password);
        if (!compare) {
            return res.status(422).send({
                status: res.statusCode,
                success: false,
                messages: "User not found",
            });
        }

        // generate jwt-token
        let token = Authentication.generateToken(user.id, user.username, user.password);

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Auth successfully",
            token
        });
    }
}

export default new authController();
