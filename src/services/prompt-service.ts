import { InterviewModel } from "../models/interviewmodel.ts";
import { QnaModel } from "../models/qna-model.ts";
import { jsonSanitizer } from "../utils/json-sanitizer.ts";
import { gptService } from "./gpt-service.ts";

class PromptService {

    public async getQna(interview: InterviewModel): Promise<QnaModel[]> {

        const systemPrompt = " You are and expert in programming development in a dev interview";

        const userPrompt = `
        Write me ${interview.count} job-interview questions and answers
         in a ${interview.level} difficulty level,
          in the filed of ${interview.tech} programming technology.
          return back a JSON array containing the question and answers.
          The JSON format must be the following:
        [
            {"q": "question 1", "a": "answer 1"},
            {"q": "question 2", "a": "answer 2"},
            {"q": "question 3", "a": "answer 3"},
        ...
         ]
        Do not reply with anything else, just the above JSON.
          `;

        const completion = await gptService.getCompletion(systemPrompt, userPrompt);

        const qna = jsonSanitizer.sanitize(completion);

        return qna;
    }
}

export const promptService = new PromptService();
