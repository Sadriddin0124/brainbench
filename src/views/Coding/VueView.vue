<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/vue.png"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">Vue JS</h2>
      <QuestionsView :questions="questions" programming="/programming" sections="/sections" />
    </section>
  </template>
  
  <script setup>
  import QuestionsView from '@/components/QuestionsView.vue';
  
  const questions = [
    {
      question: "Vue.js nima?",
      answers: [
        { "text": "Foydalanuvchi interfeyslarini yaratish uchun JavaScript ramkasi", "correct": true },
        { "text": "Backend serverni boshqarish uchun vosita", "correct": false },
        { "text": "Ma'lumotlar bazasi boshqarish tizimi", "correct": false },
        { "text": "CSS ramkasi", "correct": false }
      ]
    },
    {
      question: "Vue komponentlari qanday asosiy xususiyatga ega?",
      answers: [
        { "text": "Reactivity (reaktivlik)", "correct": true },
        { "text": "State managementni saqlash", "correct": false },
        { "text": "Server-side renderingni boshqarish", "correct": false },
        { "text": "Ma'lumotlar bazasini boshqarish", "correct": false }
      ]
    },
    {
      question: "Vue.js'da 'template' nima?",
      answers: [
        { "text": "HTML va Vue sintaksisidan foydalanilgan interfeys qismi", "correct": true },
        { "text": "CSS fayli", "correct": false },
        { "text": "Backend kodi", "correct": false },
        { "text": "Ma'lumotlar bazasi so'rovi", "correct": false }
      ]
    },
    {
      question: "Vue.js'da 'data' qayerda aniqlanadi?",
      answers: [
        { "text": "Komponentning data() metodida", "correct": true },
        { "text": "HTML faylida", "correct": false },
        { "text": "CSS stilida", "correct": false },
        { "text": "Server kodida", "correct": false }
      ]
    },
    {
      question: "Vue.js'da reaktiv xususiyatlar qayerda saqlanadi?",
      answers: [
          { "text": "methods qismida", "correct": false },
          { "text": "template ichida", "correct": false },
          { "text": "data() metodida", "correct": true },
        { "text": "propsda", "correct": false }
      ]
    },
    {
      question: "Vue.js'da 'props' nima uchun ishlatiladi?",
      answers: [
          { "text": "Komponentning o'z ma'lumotlarini saqlash uchun", "correct": false },
          { "text": "Komponentlarni yuklash uchun", "correct": false },
          { "text": "Komponentga tashqaridan ma'lumot uzatish uchun", "correct": true },
        { "text": "Server bilan bog'lanish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da computed property nima?",
      answers: [
        { "text": "Hisob-kitob qilingan va keshlangan qiymatlar uchun", "correct": true },
        { "text": "Oddiy metodlar uchun", "correct": false },
        { "text": "Sahifa yuklash vaqtini hisoblash uchun", "correct": false },
        { "text": "API ma'lumotlarini boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da lifecycle hooks nima uchun ishlatiladi?",
      answers: [
        { "text": "Komponentning turli bosqichlarida kodni bajarish uchun", "correct": true },
        { "text": "CSSni yuklash uchun", "correct": false },
        { "text": "API'larni yaratish uchun", "correct": false },
        { "text": "Backend ma'lumotlarini boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da v-bind direktivasi nima uchun ishlatiladi?",
      answers: [
        { "text": "Element atributlarini dinamik bog'lash uchun", "correct": true },
        { "text": "Komponentlarni yuklash uchun", "correct": false },
        { "text": "Sahifalarni o'zgartirish uchun", "correct": false },
        { "text": "Ma'lumotlarni saqlash uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da v-for direktivasi nima uchun ishlatiladi?",
      answers: [
        { "text": "Ro'yxatlarni render qilish uchun", "correct": true },
        { "text": "CSS ni yuklash uchun", "correct": false },
        { "text": "Ma'lumotlarni saqlash uchun", "correct": false },
        { "text": "API ma'lumotlarini boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da eventlarni boshqarish uchun qaysi direktivadan foydalaniladi?",
      answers: [
        { "text": "v-on", "correct": true },
        { "text": "v-bind", "correct": false },
        { "text": "v-for", "correct": false },
        { "text": "v-model", "correct": false }
      ]
    },
    {
      question: "Vue.js'da v-model nima uchun ishlatiladi?",
      answers: [
        { "text": "Ikki tomonlama ma'lumotlar bog'lash uchun", "correct": true },
        { "text": "Sahifalarni yuklash uchun", "correct": false },
        { "text": "CSS boshqarish uchun", "correct": false },
        { "text": "API'lar bilan ulanish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da global CSS qayerda aniqlanadi?",
      answers: [
          { "text": "Komponentning template qismida", "correct": false },
          { "text": "Komponentning methods qismida", "correct": false },
          { "text": "main.js faylida", "correct": true },
        { "text": "API ma'lumotlarida", "correct": false }
      ]
    },
    {
      question: "Vue Router nima uchun ishlatiladi?",
      answers: [
        { "text": "Sahifalar orasida navigatsiya qilish uchun", "correct": true },
        { "text": "Komponentlarni stilizatsiya qilish uchun", "correct": false },
        { "text": "State boshqarish uchun", "correct": false },
        { "text": "Ma'lumotlar bazasini boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da slot nima?",
      answers: [
        { "text": "Komponentlar uchun dinamik tarkib joyi", "correct": true },
        { "text": "State boshqarish vositasi", "correct": false },
        { "text": "CSS stilini boshqarish vositasi", "correct": false },
        { "text": "API bilan bog'lanish vositasi", "correct": false }
      ]
    },
    {
      question: "Vuex nima uchun ishlatiladi?",
      answers: [
        { "text": "Global state boshqarish uchun", "correct": true },
        { "text": "CSS ni boshqarish uchun", "correct": false },
        { "text": "Ma'lumotlar bazasini boshqarish uchun", "correct": false },
        { "text": "Serverni sozlash uchun", "correct": false }
      ]
    },
    {
      question: "Vue CLI nima uchun ishlatiladi?",
      answers: [
        { "text": "Vue.js loyihalarini tezda yaratish uchun", "correct": true },
        { "text": "Komponentlarni render qilish uchun", "correct": false },
        { "text": "API endpointlarini boshqarish uchun", "correct": false },
        { "text": "CSS fayllarni yuklash uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da watchers nima uchun ishlatiladi?",
      answers: [
        { "text": "Ma'lumotlar o'zgarishini kuzatish uchun", "correct": true },
        { "text": "State boshqarish uchun", "correct": false },
        { "text": "CSS boshqarish uchun", "correct": false },
        { "text": "Server bilan ulanish uchun", "correct": false }
      ]
    },
    {
      question: "Vue.js'da reactive funksiyasi nima qiladi?",
      answers: [
        { "text": "Objektlarni reaktiv holatga o'zgartiradi", "correct": true },
        { "text": "API endpointlarini boshqaradi", "correct": false },
        { "text": "CSS fayllarni yuklaydi", "correct": false },
        { "text": "Sahifalarni dinamik ravishda yuklaydi", "correct": false }
      ]
    },
    {
      question: "Vue.js'da composition API qachon ishlatiladi?",
      answers: [
        { "text": "Komponentlarning kodini yaxshiroq tashkil qilish uchun", "correct": true },
        { "text": "Global state boshqarish uchun", "correct": false },
        { "text": "Static sahifalarni yuklash uchun", "correct": false },
        { "text": "CSS fayllarni boshqarish uchun", "correct": false }
      ]
    }
  ]
  
  </script>
  
  <style lang="scss" scoped></style>
  