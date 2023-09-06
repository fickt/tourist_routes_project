import {IAnswers} from "modules/questions/api/type";

export type TQuestionsButtonProps = {
    title: string;
    isSave?: boolean
    answers?: IAnswers[]
}