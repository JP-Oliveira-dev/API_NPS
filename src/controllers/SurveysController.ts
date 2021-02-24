import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysReporitory } from '../repositories/SurveysRepository';


class SurveysController {
    async create(req: Request, res: Response) {
        const { title, description } = req.body;

        const surveysReporitory = getCustomRepository(SurveysReporitory);

        const survey = surveysReporitory.create({ title, description });

        await surveysReporitory.save(survey)

        return res.status(201).json(survey)

    }

    async show(req: Request, res: Response) {
        const surveysReporitory = getCustomRepository(SurveysReporitory);

        const all = await surveysReporitory.find();

        return res.json(all);
    }
}

export { SurveysController };