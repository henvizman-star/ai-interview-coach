import { useState } from "react";
import { useForm } from "react-hook-form";
import { promptService } from "../../../services/prompt-service";
import "./home.css";
import { InterviewModel } from "../../../models/interviewmodel.ts";
import { QnaModel } from "../../../models/qna-model.ts";
import { QnaCard } from "../../shared-area/qna-card/qna-card.tsx";
import { Spinner } from "../../shared-area/spinner/spinner.tsx";

export function Home() {

    const { register, handleSubmit } = useForm<InterviewModel>();
    const [qna, setQna] = useState<QnaModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    async function send(interview: InterviewModel) {
        try {
            setLoading(true);
            setQna([]);
            const qna = await promptService.getQna(interview);
            setQna(qna);
            setLoading(false);
        }
        catch (err: any) {
            alert(err.message);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="Home">

            <form onSubmit={handleSubmit(send)}>

                <div className="field">
                    <label>Tech:</label>
                    <input type="text" {...register("tech")} required maxLength={25} />
                </div>

                <div className="field">
                    <label>Level:</label>
                    <select defaultValue="" {...register("level")} required>
                        <option disabled value="">Select one...</option>
                        <option>Junior</option>
                        <option>Mid</option>
                        <option>Senior</option>
                    </select>
                </div>

                <div className="field">
                    <label>Total Questions:</label>
                    <input type="number" {...register("count")} min={1} max={10} required />
                </div>

                <button>Go</button>

            </form>

            <hr />

            {loading && <Spinner />}

            {qna.map((item, index) => <QnaCard key={index} qna={item} />)}

        </div>
    );
}