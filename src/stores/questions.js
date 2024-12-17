import { js } from "@/questions/coding/js"
import { next } from "@/questions/coding/next"
import { react } from "@/questions/coding/react"
import { vue } from "@/questions/coding/vue"
import { future } from "@/questions/english/future"
import { irregular } from "@/questions/english/irregular"
import { modal } from "@/questions/english/modal-verbs"
import { pastTense } from "@/questions/english/past"
import { present } from "@/questions/english/present"
import { vocabularies } from "@/questions/russian/vocab"

const all_questions = [
    {
        key: "irregular",
        value: irregular,
        title: "Noto'g'ri fe'llar"
    },
    {
        key: "past-tense",
        value: pastTense,
        title: "O'tgan zamon"
    },
    {
        key: "present",
        value: present,
        title: "Hozirgi zamon"
    },
    {
        key: "future",
        value: future,
        title: "Kelasi zamon"
    },
    {
        key: "js",
        value: js,
        title: "Javascript"
    },
    {
        key: "next",
        value: next,
        title: "Next JS"
    },
    {
        key: "react",
        value: react,
        title: "React JS"
    },
    {
        key: "vue",
        value: vue,
        title: "Vue JS"
    },
    {
        key: "modal",
        value: modal,
        title: "Modal fe'llar"
    },
    {
        key: "vocabularies",
        value: vocabularies,
        title: "Rus tilidan lug'atlar"
    },
]
function shuffleAnswers(questions) {
  return questions.map((q) => {
    const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);
    return { ...q, answers: shuffledAnswers };
  });
}
export const renderQuestions = (theme) => {
    const result = all_questions.find(item=> item?.key === theme)
    const questions = shuffleAnswers(result?.value)
    console.log(questions);
    const obj = {value: questions, title: result?.title}
    return obj
}
