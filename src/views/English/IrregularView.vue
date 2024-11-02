<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/english.avif"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">No'tog'ri fe'llar</h2>
      <Questions :questions="questions" programming="/english" sections="/sections" />
    </section>
  </template>
  
<script setup>
import Questions from '@/components/Questions.vue';
const questions = [
  {
    "question": "Which is the past tense of 'go'?",
    "answers": [
      { "text": "went", "correct": true },
      { "text": "gone", "correct": false },
      { "text": "goes", "correct": false },
      { "text": "going", "correct": false }
    ]
  },
  {
    "question": "What is the past participle of 'see'?",
    "answers": [
        { "text": "saw", "correct": false },
        { "text": "seen", "correct": true },
      { "text": "see", "correct": false },
      { "text": "seeing", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'be'?",
    "answers": [
        { "text": "been", "correct": false },
        { "text": "be", "correct": false },
        { "text": "was/were", "correct": true },
      { "text": "being", "correct": false }
    ]
  },
  {
    "question": "Which is the past tense of 'eat'?",
    "answers": [
        { "text": "eating", "correct": false },
      { "text": "ate", "correct": true },
      { "text": "eaten", "correct": false },
      { "text": "eats", "correct": false },
    ]
  },
  {
    "question": "What is the past participle of 'write'?",
    "answers": [
        { "text": "wrote", "correct": false },
        { "text": "writes", "correct": false },
        { "text": "writing", "correct": false },
        { "text": "written", "correct": true },
    ]
  },
  {
    "question": "Which is the past tense of 'give'?",
    "answers": [
        { "text": "given", "correct": false },
        { "text": "gives", "correct": false },
        { "text": "gave", "correct": true },
      { "text": "giving", "correct": false }
    ]
  },
  {
    "question": "What is the past participle of 'take'?",
    "answers": [
        { "text": "took", "correct": false },
        { "text": "taken", "correct": true },
      { "text": "takes", "correct": false },
      { "text": "taking", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'sing'?",
    "answers": [
        { "text": "sung", "correct": false },
        { "text": "sings", "correct": false },
        { "text": "sang", "correct": true },
      { "text": "singing", "correct": false }
    ]
  },
  {
    "question": "Which is the past participle of 'begin'?",
    "answers": [
      { "text": "begun", "correct": true },
      { "text": "beginning", "correct": false },
      { "text": "began", "correct": false },
      { "text": "begins", "correct": false },
    ]
  },
  {
    "question": "What is the past tense of 'drink'?",
    "answers": [
        { "text": "drunk", "correct": false },
        { "text": "drinks", "correct": false },
        { "text": "drinking", "correct": false },
        { "text": "drank", "correct": true },
    ]
  },
  {
    "question": "Which is the past tense of 'run'?",
    "answers": [
        { "text": "run", "correct": false },
        { "text": "running", "correct": false },
        { "text": "ran", "correct": true },
      { "text": "runs", "correct": false }
    ]
  },
  {
    "question": "What is the past participle of 'know'?",
    "answers": [
        { "text": "knew", "correct": false },
        { "text": "known", "correct": true },
      { "text": "knows", "correct": false },
      { "text": "knowing", "correct": false }
    ]
  },
  {
    "question": "Which is the past tense of 'take'?",
    "answers": [
      { "text": "took", "correct": true },
      { "text": "taken", "correct": false },
      { "text": "takes", "correct": false },
      { "text": "taking", "correct": false }
    ]
  },
  {
    "question": "What is the past participle of 'break'?",
    "answers": [
        { "text": "broke", "correct": false },
        { "text": "broken", "correct": true },
      { "text": "breaking", "correct": false },
      { "text": "breaks", "correct": false },
    ]
  },
  {
    "question": "What is the past tense of 'give'?",
    "answers": [
        { "text": "giving", "correct": false },
        { "text": "given", "correct": false },
        { "text": "gives", "correct": false },
        { "text": "gave", "correct": true },
    ]
  },
  {
    "question": "Which is the past participle of 'speak'?",
    "answers": [
        { "text": "speaks", "correct": false },
        { "text": "spoke", "correct": false },
        { "text": "spoken", "correct": true },
      { "text": "speaking", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'begin'?",
    "answers": [
        { "text": "begun", "correct": false },
      { "text": "began", "correct": true },
      { "text": "begin", "correct": false },
      { "text": "beginning", "correct": false }
    ]
  },
  {
    "question": "Which is the past tense of 'forget'?",
    "answers": [
        { "text": "forgotten", "correct": false },
        { "text": "forgets", "correct": false },
        { "text": "forgetting", "correct": false },
        { "text": "forgot", "correct": true },
    ]
  },
  {
    "question": "What is the past participle of 'find'?",
    "answers": [
        { "text": "finding", "correct": false },
      { "text": "found", "correct": true },
      { "text": "found", "correct": false },
      { "text": "finds", "correct": false },
    ]
  },
  {
    "question": "Which is the past participle of 'choose'?",
    "answers": [
        { "text": "chose", "correct": false },
        { "text": "chosen", "correct": true },
      { "text": "chooses", "correct": false },
      { "text": "choosing", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'swim'?",
    "answers": [
        { "text": "swum", "correct": false },
        { "text": "swims", "correct": false },
        { "text": "swam", "correct": true },
      { "text": "swimming", "correct": false }
    ]
  },
  {
    "question": "Which is the past participle of 'sing'?",
    "answers": [
      { "text": "sung", "correct": true },
      { "text": "sang", "correct": false },
      { "text": "sings", "correct": false },
      { "text": "singing", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'drive'?",
    "answers": [
        { "text": "driven", "correct": false },
        { "text": "drove", "correct": true },
      { "text": "driving", "correct": false },
      { "text": "drives", "correct": false },
    ]
  },
  {
    "question": "Which is the past participle of 'steal'?",
    "answers": [
        { "text": "stealing", "correct": false },
      { "text": "stolen", "correct": true },
      { "text": "stole", "correct": false },
      { "text": "steals", "correct": false },
    ]
  },
  {
    "question": "What is the past tense of 'lay'?",
    "answers": [
        { "text": "layed", "correct": false },
        { "text": "lays", "correct": false },
        { "text": "laid", "correct": true },
      { "text": "laying", "correct": false }
    ]
  },
  {
    "question": "Which is the past tense of 'sleep'?",
    "answers": [
        { "text": "sleeped", "correct": false },
        { "text": "slept", "correct": true },
      { "text": "sleeps", "correct": false },
      { "text": "sleeping", "correct": false }
    ]
  },
  {
    "question": "What is the past participle of 'speak'?",
    "answers": [
        { "text": "spoke", "correct": false },
        { "text": "speaking", "correct": false },
        { "text": "spoken", "correct": true },
      { "text": "speaks", "correct": false },
    ]
  },
  {
    "question": "Which is the past tense of 'sell'?",
    "answers": [
      { "text": "sold", "correct": true },
      { "text": "sell", "correct": false },
      { "text": "selling", "correct": false },
      { "text": "sells", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'hang'?",
    "answers": [
        { "text": "hanging", "correct": false },
        { "text": "hanged", "correct": false },
        { "text": "hung", "correct": true },
        { "text": "hangs", "correct": false },
    ]
  },
  {
    "question": "Which is the past participle of 'catch'?",
    "answers": [
        { "text": "cought", "correct": false },
        { "text": "catches", "correct": false },
        { "text": "catching", "correct": false },
        { "text": "caught", "correct": true },
    ]
  },
  {
    "question": "What is the past tense of 'tear'?",
    "answers": [
        { "text": "tearing", "correct": false },
      { "text": "tore", "correct": true },
      { "text": "torn", "correct": false },
      { "text": "tears", "correct": false },
    ]
  },
  {
    "question": "Which is the past participle of 'lead'?",
    "answers": [
      { "text": "led", "correct": true },
      { "text": "lead", "correct": false },
      { "text": "leading", "correct": false },
      { "text": "leads", "correct": false }
    ]
  },
  {
    "question": "What is the past tense of 'shine'?",
    "answers": [
        { "text": "shined", "correct": false },
        { "text": "shines", "correct": false },
        { "text": "shone", "correct": true },
      { "text": "shining", "correct": false }
    ]
  },
  {
    "question": "Which is the past participle of 'forget'?",
    "answers": [
        { "text": "forgets", "correct": false },
      { "text": "forgotten", "correct": true },
      { "text": "forgot", "correct": false },
      { "text": "forgetting", "correct": false },
    ]
  },
  {
    "question": "What is the past tense of 'bring'?",
    "answers": [
        { "text": "bringed", "correct": false },
        { "text": "brings", "correct": false },
        { "text": "bringing", "correct": false },
        { "text": "brought", "correct": true },
    ]
  },
  {
    "question": "Which is the past participle of 'swim'?",
    "answers": [
        { "text": "swimming", "correct": false },
        { "text": "swam", "correct": false },
        { "text": "swum", "correct": true },
      { "text": "swims", "correct": false },
    ]
  },
  {
    "question": "What is the past tense of 'freeze'?",
    "answers": [
      { "text": "froze", "correct": true },
      { "text": "freezing", "correct": false },
      { "text": "frozen", "correct": false },
      { "text": "freezes", "correct": false },
    ]
  },
  {
    "question": "Which is the past participle of 'grow'?",
    "answers": [
        { "text": "growing", "correct": false },
        { "text": "grown", "correct": true },
      { "text": "grew", "correct": false },
      { "text": "grows", "correct": false },
    ]
  }
]


</script>

<style lang="scss" scoped>

</style>