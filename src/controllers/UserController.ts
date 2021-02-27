import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRepository";
import * as yup from 'yup';

class UserController {
    async create(req: Request, res: Response) {
        const { name, email } = req.body;

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required()
        });

        try {
            await schema.validate(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err });
        };


        const usersRepository = getCustomRepository(UsersRepository);
        const userAlreadyExists = await usersRepository.findOne({ email });

        if (userAlreadyExists) {
            return res.status(400).json({ error: "User already exists!" })
        }

        const user = usersRepository.create({ name, email });
        await usersRepository.save(user);

        return res.status(201).json(user);

    }
}

export { UserController };
