import { ChatMessageModel } from "../models/chat-message-model";
import { gptService } from "./gpt-service";

class ChatService {
    public async send(messages: ChatMessageModel[]): Promise<string> {

        const systemPrompt = `
        You are an AI interview coach for software developers.
        Help users prepare for job interviews, technical interviews, coding interviews,
        developer career questions, and interview practice.
        If the user asks for interview questions, provide focused and practical questions.
        If the user asks to be tested, ask one question at a time and wait for their answer.
        Give clear feedback, correct mistakes, and keep the tone supportive.
        If the user asks about something unrelated, politely explain that you only help with
        software interview preparation.
        `;

        const conversation = messages
            .map(message => `${message.role}: ${message.content}`)
            .join("\n");

        const userPrompt = `
        Continue this chat with the user.

        Conversation:
        ${conversation}

        Reply as the assistant.
        `;

        return await gptService.getCompletion(systemPrompt, userPrompt);
    }
}

export const chatService = new ChatService();
