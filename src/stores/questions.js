import { js } from "@/questions/coding/js"
import { next } from "@/questions/coding/next"
import { react } from "@/questions/coding/react"
import { vue } from "@/questions/coding/vue"
import { future } from "@/questions/english/future"
import { irregular } from "@/questions/english/irregular"
import { pastTense } from "@/questions/english/past"
import { present } from "@/questions/english/present"

const questions = [
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
]

export const renderQuestions = (theme) => {
    const result = questions.find(item=> item?.key === theme)
    return result
}
