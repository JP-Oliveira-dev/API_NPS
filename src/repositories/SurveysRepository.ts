import { Survey } from "../models/Survey";
const { EntityRepository, Repository } = require("typeorm");

@EntityRepository(Survey)
class SurveysReporitory extends Repository<Survey> { }

export { SurveysReporitory };