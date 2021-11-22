import { Request, Response } from "express";
import Article, { IArticle } from "../models/Article";

class ArticleService {
    auth: { id: string };
    body: Request['body'];
    params: Request['params'];
    query: Request['query'];

    constructor(req: Request) {
        this.auth = req.app.locals.user;
        this.body = req.body;
        this.params = req.params;
        this.query = req.query;
    }

    getAll = async () => {


        const { filter_field, filter_value, sort_field, sort_orientation, topic } = this.query;

        const queryObj = {};
        const sortObj = {};
        const match = {};

        let article = await Article.find(queryObj).sort(sortObj).populate({ path: 'topics', select: 'name' }).exec();

        if (filter_field !== '' && filter_value !== '') {
            queryObj[filter_field] = filter_value;
        }

        if (sort_field !== '' && sort_orientation !== '') {
            sortObj[sort_field] = sort_orientation
        }

        if (match !== '') {
            article = await Article.find(queryObj).sort(sortObj).populate({ path: 'topics', select: 'name', match: { name: topic } }).exec();
        }

        const articleList = article.filter((data) => {
            return data.topics.length > 0
        })

        return { articleList, topic }
    }

    store = async () => {
        const { title, description, status, topics } = this.body;

        const article = new Article({ title, description, status, topics });
        await article.save();

        return article;
    }

    show = async () => {
        const { id } = this.params;
        const article = await Article.findOne({ _id: id });

        return article;
    }

    update = async () => {
        const { id } = this.params;
        const article = await Article.findOneAndUpdate({ _id: id }, { $set: this.body });

        return article;
    }

    destroy = async () => {
        const { id } = this.params;
        const article = await Article.findOneAndDelete({ _id: id });

        return article;
    }
}

export default ArticleService