<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/english.avif"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">Kelasi zamon</h2>
      <QuestionsView :questions="questions" programming="/english" sections="/sections" />
    </section>
  </template>
<script setup>
import QuestionsView from '@/components/QuestionsView.vue';
const questions = [
    {
      "question": "'Write' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will write", "correct": true },
        { "text": "writing", "correct": false },
        { "text": "wrote", "correct": false },
        { "text": "written", "correct": false }
      ]
    },
    {
      "question": "Qaysi jumla kelasi zamonda yozilgan?",
      "answers": [
        { "text": "He will eat an apple.", "correct": true },
        { "text": "He eats an apple.", "correct": false },
        { "text": "He ate an apple.", "correct": false },
        { "text": "He is eating an apple.", "correct": false }
      ]
    },
    {
      "question": "Kelasi zamon uchun qaysi yordamchi fe'l ishlatiladi?",
      "answers": [
        { "text": "will", "correct": true },
        { "text": "did", "correct": false },
        { "text": "does", "correct": false },
        { "text": "is", "correct": false }
      ]
    },
    {
      "question": "'I ___ to the market tomorrow' jumlasini kelasi zamonda to'ldiring.",
      "answers": [
        { "text": "will go", "correct": true },
        { "text": "go", "correct": false },
        { "text": "went", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "'She will ___ to school tomorrow.' jumlasini to'ldiring.",
      "answers": [
        { "text": "go", "correct": true },
        { "text": "goes", "correct": false },
        { "text": "gone", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "Kelasi zamonda qaysi jumla to'g'ri tuzilgan?",
      "answers": [
        { "text": "He will plays football.", "correct": false },
        { "text": "He will play football.", "correct": true },
        { "text": "He played football.", "correct": false },
        { "text": "He playing football.", "correct": false }
      ]
    },
    {
      "question": "'Be' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will be", "correct": true },
        { "text": "is/am/are", "correct": false },
        { "text": "was/were", "correct": false },
        { "text": "been", "correct": false }
      ]
    },
    {
      "question": "Kelasi zamonda 'read' fe'lining shakli qanday?",
      "answers": [
        { "text": "will read", "correct": true },
        { "text": "read", "correct": false },
        { "text": "reads", "correct": false },
        { "text": "reading", "correct": false }
      ]
    },
    {
      "question": "'Go' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will go", "correct": true },
        { "text": "goes", "correct": false },
        { "text": "gone", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "'Run' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will run", "correct": true },
        { "text": "runs", "correct": false },
        { "text": "ran", "correct": false },
        { "text": "running", "correct": false }
      ]
    },
    {
      "question": "'Say' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will say", "correct": true },
        { "text": "says", "correct": false },
        { "text": "said", "correct": false },
        { "text": "saying", "correct": false }
      ]
    },
    {
      "question": "'They ___ dinner tomorrow evening.' jumlasini kelasi zamonda to'ldiring.",
      "answers": [
        { "text": "will cook", "correct": true },
        { "text": "cook", "correct": false },
        { "text": "cooked", "correct": false },
        { "text": "cooking", "correct": false }
      ]
    },
    {
      "question": "'Do' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will do", "correct": true },
        { "text": "does", "correct": false },
        { "text": "did", "correct": false },
        { "text": "doing", "correct": false }
      ]
    },
    {
      "question": "Qaysi so'z kelasi zamon uchun ishlatiladi?",
      "answers": [
        { "text": "tomorrow", "correct": true },
        { "text": "yesterday", "correct": false },
        { "text": "now", "correct": false },
        { "text": "last week", "correct": false }
      ]
    },
    {
      "question": "Kelasi zamonda 'eat' fe'lining shakli qanday?",
      "answers": [
        { "text": "will eat", "correct": true },
        { "text": "ate", "correct": false },
        { "text": "eats", "correct": false },
        { "text": "eating", "correct": false }
      ]
    },
    {
      "question": "Qaysi jumla kelasi zamonda yozilgan?",
      "answers": [
        { "text": "She will study hard.", "correct": true },
        { "text": "She studies hard.", "correct": false },
        { "text": "She studied hard.", "correct": false },
        { "text": "She is studying hard.", "correct": false }
      ]
    },
    {
      "question": "Kelasi zamonda so'zlarni to'g'ri ketma-ketlikda joylang: 'I ___ to the park tomorrow.'",
      "answers": [
        { "text": "will go", "correct": true },
        { "text": "go", "correct": false },
        { "text": "gone", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "'Speak' fe'lining kelasi zamon shakli qaysi?",
      "answers": [
        { "text": "will speak", "correct": true },
        { "text": "spoke", "correct": false },
        { "text": "speaks", "correct": false },
        { "text": "speaking", "correct": false }
      ]
    },
    {
      "question": "'Will' yordamchi fe'li bilan qaysi jumla to'g'ri tuzilgan?",
      "answers": [
        { "text": "He will write a book.", "correct": true },
        { "text": "He write a book.", "correct": false },
        { "text": "He wrote a book.", "correct": false },
        { "text": "He writing a book.", "correct": false }
      ]
    }
  ]

</script>

<style lang="scss" scoped>

</style>