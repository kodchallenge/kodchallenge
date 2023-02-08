import { Request, Response } from "express";
import { ProblemRepository } from "../repositories";

export const getProblems = async (req: Request, res: Response) => {
    const problems = await ProblemRepository.getList();
    res.json(problems)
}