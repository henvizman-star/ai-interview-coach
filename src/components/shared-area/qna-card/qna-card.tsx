import { useState } from "react";
import { QnaModel } from "../../../models/qna-model";
import "./qna-card.css";

type QnaCardProps = {
    qna: QnaModel;
};

export function QnaCard(props: QnaCardProps) {

    const [open, setOpen] = useState(false);

    return (
        <div className={`QnaCard ${open ? "open" : ""}`}>

            <div
                className="question"
                onClick={() => setOpen(!open)}
            >
                <span>{props.qna.q}</span>

                <span className="arrow">
                    {open ? "−" : "+"}
                </span>
            </div>

            {open &&
                <div className="answer">
                    {props.qna.a}
                </div>
            }

        </div>
    );
}