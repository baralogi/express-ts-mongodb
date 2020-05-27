import { config as dotenv } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


class Authentication {
    public static passwordHash = async (password: string): Promise<string> => {
        const result = await bcrypt.hash(password, 10);
        return result;
    }

    public static passwordCompare = async (text: string, encryptedText: string): Promise<boolean> => {
        const result = await bcrypt.compare(text, encryptedText);
        return result;
    }

    public static generateToken = (id: string, username: string, password: string): string => {
        dotenv();
        const secretKey: string = process.env.JWT_SECRET_KEY || "secret";
        const token: string = jwt.sign({ id, username, password }, secretKey);
        return token;
    }
}

export default Authentication;

