import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

export const validateTodo = [
    check('activity').isString(),
    check('description').isString(),
    (req: Request, res: Response, next: NextFunction) => {
        const err = validationResult(req);

        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() });
        }

        return next();
    }
]


export default { validateTodo };