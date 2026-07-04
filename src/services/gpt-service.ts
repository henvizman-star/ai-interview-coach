import { appConfig } from "../utils/app-config";
import axios from "axios";

class GptService {
    public async getCompletion(systemPrompt: string, userPrompt: string): Promise<string> {

        const body = {
            model: appConfig.openaiModel,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ]
        };

        const options = {
            headers: {
                authorization: "Bearer " + appConfig.openaiApiKey
            }
        };

        const response = await axios.post(appConfig.openaiUrl, body, options);
        
        const completion = response.data.choices[0].message.content;

        return completion;
    }
}

export const gptService = new GptService();
