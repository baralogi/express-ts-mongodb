import mongoose from "mongoose";
import { config as dotenv } from "dotenv";

class Mongoose {

    constructor() {
        this.config();

    }

    public config(): void {
        dotenv();
        mongoose.connect(
            `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
            {
                // authSource: process.env.DB_NAME,
                // user: process.env.DB_USERNAME,
                // pass: process.env.DB_PASSWORD,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            },
            err => {
                if (err) throw err
                console.log('DB Connected Successfully')
            }
        )
    }
}

export default Mongoose;
