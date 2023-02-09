import { NextFunction, Request, Response } from "express";
import { ProblemRepository } from "../repositories";

export const getProblems = async (req: Request, res: Response) => {
    const problems = await ProblemRepository.getList();
    res.json(problems)
}

export const getProblemById = async (req: Request<{ id: number }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const problem = await ProblemRepository.getById(id)
    res.json(problem)
}