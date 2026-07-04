import { QnaModel } from "../models/qna-model";

class JsonSanitizer {

    //sure, here is your answer: ```json [{}]
    public sanitize(text: string): QnaModel[] {
        const start = text.indexOf("[");
        const end = text.lastIndexOf("]");

        const json = text.substring(start, end + 1);

        const qna: QnaModel[] = JSON.parse(json);

        return qna;
    }
}

export const jsonSanitizer = new JsonSanitizer();
