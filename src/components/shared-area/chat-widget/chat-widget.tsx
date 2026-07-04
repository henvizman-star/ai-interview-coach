import { FormEvent, useState } from "react";
import { ChatMessageModel } from "../../../models/chat-message-model";
import { chatService } from "../../../services/chat-service";
import chatStudent from "../../../assets/chat-student.png";
import "./chat-widget.css";

export function ChatWidget() {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessageModel[]>([
        {
            role: "assistant",
            content: "Hi, I am your interview coach. Ask me for interview questions, or tell me: test me."
        }
    ]);

    async function send(event: FormEvent) {
        event.preventDefault();

        const content = input.trim();
        if (!content || loading) return;

        const nextMessages: ChatMessageModel[] = [
            ...messages,
            { role: "user", content }
        ];

        try {
            setInput("");
            setLoading(true);
            setMessages(nextMessages);

            const answer = await chatService.send(nextMessages);

            setMessages([
                ...nextMessages,
                { role: "assistant", content: answer }
            ]);
        }
        catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong.";
            setMessages([
                ...nextMessages,
                { role: "assistant", content: message }
            ]);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className={`ChatWidget ${open ? "open" : ""}`}>

            {open &&
                <section className="chatPanel">
                    <div className="chatHeader">
                        <img src={chatStudent} alt="Student with laptop" />
                        <div>
                            <strong>AI Interview Coach</strong>
                            <span>Software interview prep</span>
                        </div>
                    </div>

                    <div className="chatMessages">
                        {messages.map((message, index) =>
                            <div key={index} className={`chatMessage ${message.role}`}>
                                {message.content}
                            </div>
                        )}

                        {loading &&
                            <div className="chatMessage assistant">
                                Thinking...
                            </div>
                        }
                    </div>

                    <form onSubmit={send} className="chatForm">
                        <input
                            type="text"
                            placeholder="Ask about interviews..."
                            value={input}
                            onChange={event => setInput(event.target.value)}
                            maxLength={350}
                        />
                        <button disabled={loading}>Send</button>
                    </form>
                </section>
            }

            <button className="chatToggle" onClick={() => setOpen(!open)}>
                {open ? "Close" : "Ask AI"}
            </button>

        </div>
    );
}
