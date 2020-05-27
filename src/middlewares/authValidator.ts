import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

export const validateSignup = [
    check('username').isString(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const err = validationResult(req);

        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() });
        }

        next();
    }
]

export const validateSignin = [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const err = validationResult(req);

        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() });
        }

        next();
    }
]


export default { validateSignup, validateSignin };