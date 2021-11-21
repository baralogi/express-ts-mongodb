import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import Topic from "../models/Topic";

export const validateTopic = [
    check('name').isString().notEmpty().withMessage("The name should contain only letters and should be unique.")
        .custom(async (name: Object) => {
            const data = await Topic.findOne({ name })
            if (data) {
                return Promise.reject('Topic name already in use')
            }
        }),
    (req: Request, res: Response, next: NextFunction) => {
        const err = validationResult(req)

        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() })
        }

        return next()
    },
]

export default { validateTopic };