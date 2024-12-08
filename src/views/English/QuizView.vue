<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/english.avif"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">{{ questions?.title }}</h2>
      <QuestionsView :questions="questions.value" programming="/english" sections="/sections" />
    </section>
  </template>
  
<script setup>
import QuestionsView from '@/components/QuestionsView.vue';
import { renderQuestions } from '@/stores/questions';
import { useRoute } from 'vue-router';
const router = useRoute()
const id = router.query.id
const questions = renderQuestions(id)

</script>

<style lang="scss" scoped>

</style>