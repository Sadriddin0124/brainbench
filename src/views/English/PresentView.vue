<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/english.avif"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">Hozirgi zamon</h2>
      <Questions :questions="questions" programming="/english" sections="/sections" />
    </section>
  </template>
<script setup>
import Questions from '@/components/Questions.vue';
const questions = [
    {
      "question": "'Write' fe'lining hozirgi zamon shakli qaysi?",
      "answers": [
        { "text": "writing", "correct": false },
        { "text": "write", "correct": true },
        { "text": "wrote", "correct": false },
        { "text": "written", "correct": false }
      ]
    },
    {
      "question": "Qaysi jumla hozirgi zamonda yozilgan?",
      "answers": [
        { "text": "He eats an apple.", "correct": true },
        { "text": "He ate an apple.", "correct": false },
        { "text": "He will eat an apple.", "correct": false },
        { "text": "He is eating an apple.", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamon uchun qaysi yordamchi fe'l ishlatiladi?",
      "answers": [
        { "text": "has", "correct": true },
        { "text": "had", "correct": false },
        { "text": "did", "correct": false },
        { "text": "will", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamonda fe'lga qaysi qo'shimcha qo'shiladi?",
      "answers": [
        { "text": "-s/-es", "correct": true },
        { "text": "-ed", "correct": false },
        { "text": "-ing", "correct": false },
        { "text": "-en", "correct": false }
      ]
    },
    {
      "question": "'I ___ to the market every day' jumlasini hozirgi zamonda to'ldiring.",
      "answers": [
        { "text": "go", "correct": true },
        { "text": "gone", "correct": false },
        { "text": "went", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "'She doesn't ___ to school every day.' jumlasini to'ldiring.",
      "answers": [
        { "text": "goes", "correct": false },
        { "text": "go", "correct": true },
        { "text": "gone", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamonda qaysi jumla to'g'ri tuzilgan?",
      "answers": [
        { "text": "He play football.", "correct": false },
        { "text": "He plays football.", "correct": true },
        { "text": "He played football.", "correct": false },
        { "text": "He playing football.", "correct": false }
      ]
    },
    {
      "question": "'Be' fe'lining hozirgi zamon shakli qaysi?",
      "answers": [
        { "text": "is/am/are", "correct": true },
        { "text": "was/were", "correct": false },
        { "text": "been", "correct": false },
        { "text": "being", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamonda so'zlarni to'g'ri ketma-ketlikda joylang: 'Ali ___ to school every morning.'",
      "answers": [
        { "text": "goes", "correct": true },
        { "text": "gone", "correct": false },
        { "text": "went", "correct": false },
        { "text": "going", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamonda 'read' fe'lining shakli qanday?",
      "answers": [
        { "text": "reads", "correct": true },
        { "text": "readed", "correct": false },
        { "text": "reading", "correct": false },
        { "text": "read", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamonda qaysi jumla to'g'ri?",
      "answers": [
        { "text": "I works at a bank.", "correct": false },
        { "text": "I work at a bank.", "correct": true },
        { "text": "I worked at a bank.", "correct": false },
        { "text": "I working at a bank.", "correct": false }
      ]
    },
    {
      "question": "'Drink' fe'lining hozirgi zamon shakli qaysi?",
      "answers": [
        { "text": "drinks", "correct": true },
        { "text": "drinking", "correct": false },
        { "text": "drank", "correct": false },
        { "text": "drunk", "correct": false }
      ]
    },
    {
      "question": "Qaysi jumla hozirgi zamonda?",
      "answers": [
        { "text": "She cooks dinner every day.", "correct": true },
        { "text": "She cooked dinner yesterday.", "correct": false },
        { "text": "She will cook dinner tomorrow.", "correct": false },
        { "text": "She is cooking dinner now.", "correct": false }
      ]
    },
    {
      "question": "'Run' fe'lining hozirgi zamon shakli qaysi?",
      "answers": [
        { "text": "runs", "correct": true },
        { "text": "running", "correct": false },
        { "text": "ran", "correct": false },
        { "text": "runned", "correct": false }
      ]
    },
    {
      "question": "'Say' fe'lining hozirgi zamon shakli qaysi?",
      "answers": [
        { "text": "says", "correct": true },
        { "text": "said", "correct": false },
        { "text": "saying", "correct": false },
        { "text": "sayed", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamonda jumla qanday boshlanadi: 'He ___ breakfast every morning.'",
      "answers": [
        { "text": "eats", "correct": true },
        { "text": "ate", "correct": false },
        { "text": "eaten", "correct": false },
        { "text": "eating", "correct": false }
      ]
    },
    {
      "question": "'Do' fe'lining hozirgi zamon shakli qaysi?",
      "answers": [
        { "text": "does", "correct": true },
        { "text": "did", "correct": false },
        { "text": "doing", "correct": false },
        { "text": "done", "correct": false }
      ]
    },
    {
      "question": "Qaysi so'z hozirgi zamon uchun ishlatiladi?",
      "answers": [
        { "text": "now", "correct": true },
        { "text": "yesterday", "correct": false },
        { "text": "tomorrow", "correct": false },
        { "text": "last week", "correct": false }
      ]
    },
    {
      "question": "Qaysi jumla hozirgi zamonda yozilgan?",
      "answers": [
        { "text": "She studies hard.", "correct": true },
        { "text": "She studied hard.", "correct": false },
        { "text": "She will study hard.", "correct": false },
        { "text": "She is studying hard.", "correct": false }
      ]
    },
    {
      "question": "Hozirgi zamon savoliga mos keladi: 'Does she ___ to school every day?'",
      "answers": [
        { "text": "go", "correct": true },
        { "text": "goes", "correct": false },
        { "text": "going", "correct": false },
        { "text": "gone", "correct": false }
      ]
    }
  ]

</script>

<style lang="scss" scoped>

</style>