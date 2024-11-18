<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/english.avif"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">O'tgan zamon</h2>
      <QuestionsView :questions="questions" programming="/english" sections="/sections" />
    </section>
  </template>
<script setup>
import QuestionsView from '@/components/QuestionsView.vue';
const questions = [
    {
      question: "'Write' so'zining o'tgan zamon shakli qaysi?",
      answers: [
        { "text": "writed", "correct": false },
        { "text": "wrote", "correct": true },
        { "text": "writing", "correct": false },
        { "text": "written", "correct": false }
      ]
    },
    {
      question: "Qaysi jumla o'tgan zamonda yozilgan?",
      answers: [
        { "text": "He eats an apple.", "correct": false },
        { "text": "He ate an apple.", "correct": true },
        { "text": "He is eating an apple.", "correct": false },
        { "text": "He will eat an apple.", "correct": false }
      ]
    },
    {
      question: "O'tgan zamon uchun qaysi yordamchi fe'l ishlatiladi?",
      answers: [
        { "text": "has", "correct": false },
        { "text": "did", "correct": true },
        { "text": "does", "correct": false },
        { "text": "will", "correct": false }
      ]
    },
    {
      question: "O'tgan zamonda savol qanday tuziladi?",
      answers: [
        { "text": "Did + subject + base verb", "correct": true },
        { "text": "Do + subject + base verb", "correct": false },
        { "text": "Will + subject + base verb", "correct": false },
        { "text": "Subject + base verb + ed", "correct": false }
      ]
    },
    {
      question: "Qaysi so'z o'tgan zamon uchun ishlatiladi?",
      answers: [
        { "text": "yesterday", "correct": true },
        { "text": "tomorrow", "correct": false },
        { "text": "next week", "correct": false },
        { "text": "today", "correct": false }
      ]
    },
    {
      question: "'I ___ to the market' jumlasini o'tgan zamonda to'ldiring.",
      answers: [
        { "text": "go", "correct": false },
        { "text": "gone", "correct": false },
        { "text": "went", "correct": true },
        { "text": "going", "correct": false }
      ]
    },
    {
      question: "'She didn't went to school yesterday.' jumlasidagi xato qismi qaysi?",
      answers: [
        { "text": "'didn't'", "correct": false },
        { "text": "'went'", "correct": true },
        { "text": "'to school'", "correct": false },
        { "text": "'yesterday'", "correct": false }
      ]
    },
    {
      question: "Qaysi jumla o'tgan zamonda yozilgan?",
      answers: [
        { "text": "I am reading a book.", "correct": false },
        { "text": "I read a book yesterday.", "correct": true },
        { "text": "I will read a book tomorrow.", "correct": false },
        { "text": "I have read a book.", "correct": false }
      ]
    },
    {
      question: "'Saw' so'ziga mos keladigan jumla qaysi?",
      answers: [
        { "text": "I see the movie.", "correct": false },
        { "text": "I saw the movie yesterday.", "correct": true },
        { "text": "I am seeing the movie.", "correct": false },
        { "text": "I have seen the movie.", "correct": false }
      ]
    },
    {
      question: "'Did you ___ to the park?' jumlasiga qaysi so'z mos keladi?",
      answers: [
        { "text": "go", "correct": true },
        { "text": "went", "correct": false },
        { "text": "gone", "correct": false },
        { "text": "going", "correct": false }
      ]
    }
  ]

</script>

<style lang="scss" scoped>

</style>