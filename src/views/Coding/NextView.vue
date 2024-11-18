<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/next.png"
        alt="Home"
        class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">Next JS</h2>
      <QuestionsView :questions="questions" programming="/programming" sections="/sections" />
    </section>
  </template>
  
  <script setup>
  import QuestionsView from '@/components/QuestionsView.vue';
  
  const questions = [
    {
      question: "Next.js nima?",
      answers: [
        { "text": "React uchun server-side rendering kutubxonasi", "correct": true },
        { "text": "CSS ramkasi", "correct": false },
        { "text": "Ma'lumotlar bazasi boshqarish vositasi", "correct": false },
        { "text": "Dasturlash tili", "correct": false }
      ]
    },
    {
      question: "Next.js'da server-side rendering qanday amalga oshiriladi?",
      answers: [
        { "text": "getServerSideProps orqali", "correct": true },
        { "text": "getStaticProps orqali", "correct": false },
        { "text": "API Routes orqali", "correct": false },
        { "text": "useEffect orqali", "correct": false }
      ]
    },
    {
      question: "Next.js'dagi getStaticProps nima uchun ishlatiladi?",
      answers: [
        { "text": "Build vaqtida statik ma'lumotlarni olish uchun", "correct": true },
        { "text": "Real vaqt ma'lumotlarini olish uchun", "correct": false },
        { "text": "Komponentlarni stilizatsiya qilish uchun", "correct": false },
        { "text": "Server hodisalarini boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'da sahifalar qayerda joylashadi?",
      answers: [
        { "text": "/pages papkasida", "correct": true },
        { "text": "/components papkasida", "correct": false },
        { "text": "/static papkasida", "correct": false },
        { "text": "/public papkasida", "correct": false }
      ]
    },
    {
      question: "Next.js'da dinamik marshrutlash qanday amalga oshiriladi?",
      answers: [
        { "text": "Fayl nomiga [] ishlatib", "correct": true },
        { "text": "Route parametrlarini qo'shib", "correct": false },
        { "text": "Static papkasida yangi fayl ochib", "correct": false },
        { "text": "API Route orqali", "correct": false }
      ]
    },
    {
      question: "Next.js'dagi API Routes nima?",
      answers: [
        { "text": "Serverda API endpointlar yaratish uchun", "correct": true },
        { "text": "Front-end uchun komponentlar yaratish uchun", "correct": false },
        { "text": "Ma'lumotlar bazasini boshqarish uchun", "correct": false },
        { "text": "Sahifalar orasida navigatsiya qilish uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'da static fayllar qayerda saqlanadi?",
      answers: [
        { "text": "/public papkasida", "correct": true },
        { "text": "/static papkasida", "correct": false },
        { "text": "/pages papkasida", "correct": false },
        { "text": "/components papkasida", "correct": false }
      ]
    },
    {
      question: "Next.js'da sahifa uchun meta-teglarni qanday boshqarish mumkin?",
      answers: [
        { "text": "next/head komponenti orqali", "correct": true },
        { "text": "useEffect orqali", "correct": false },
        { "text": "API Routes orqali", "correct": false },
        { "text": "CSS fayllar orqali", "correct": false }
      ]
    },
    {
      question: "Next.js'da global CSS qayerda ishlatiladi?",
      answers: [
        { "text": "_app.js faylida", "correct": true },
        { "text": "Har bir komponentda", "correct": false },
        { "text": "Sahifa tarkibida", "correct": false },
        { "text": "API Routes orqali", "correct": false }
      ]
    },
    {
      question: "Next.js'dagi ISR (Incremental Static Regeneration) nima?",
      answers: [
        { "text": "Ma'lumotlarni real vaqtda yangilash uchun", "correct": true },
        { "text": "Dinamik sahifalarni o'chirish uchun", "correct": false },
        { "text": "Static fayllarni saqlash uchun", "correct": false },
        { "text": "Global state boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'da Link komponenti nima uchun ishlatiladi?",
      answers: [
        { "text": "Sahifalar orasida navigatsiya qilish uchun", "correct": true },
        { "text": "Sahifalarni yuklash uchun", "correct": false },
        { "text": "API'lar bilan ulanish uchun", "correct": false },
        { "text": "Ma'lumotlarni saqlash uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'dagi useRouter nima uchun ishlatiladi?",
      answers: [
        { "text": "Router ma'lumotlariga kirish uchun", "correct": true },
        { "text": "Global state boshqarish uchun", "correct": false },
        { "text": "CSS stilini boshqarish uchun", "correct": false },
        { "text": "API endpointlar yaratish uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'da sahifalar yuklash tartibi qanday?",
      answers: [
        { "text": "Client-side rendering va Server-side rendering bilan", "correct": true },
        { "text": "Static rendering bilan", "correct": false },
        { "text": "API Routes orqali", "correct": false },
        { "text": "CSS fayllari orqali", "correct": false }
      ]
    },
    {
      question: "Next.js qaysi kutubxonaga asoslanadi?",
      answers: [
        { "text": "React", "correct": true },
        { "text": "Angular", "correct": false },
        { "text": "Vue", "correct": false },
        { "text": "Svelte", "correct": false }
      ]
    },
    {
      question: "getInitialProps nima uchun ishlatiladi?",
      answers: [
        { "text": "Sahifa yuklashdan oldin ma'lumotlarni olish uchun", "correct": true },
        { "text": "API'larni yaratish uchun", "correct": false },
        { "text": "Static fayllarni yuklash uchun", "correct": false },
        { "text": "State boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'dagi middleware nima?",
      answers: [
        { "text": "Request va Response orasidagi logikani boshqarish uchun", "correct": true },
        { "text": "Static sahifalarni yaratish uchun", "correct": false },
        { "text": "Server hodisalarini boshqarish uchun", "correct": false },
        { "text": "Frontend komponentlarini boshqarish uchun", "correct": false }
      ]
    },
    {
      question: "Next.js'da fallback true rejimi nima qiladi?",
      answers: [
        { "text": "Dynamic sahifalarni runtime'da yaratadi", "correct": true },
        { "text": "Static sahifalarni o'chiradi", "correct": false },
        { "text": "API'larni o'zgartiradi", "correct": false },
        { "text": "CSS fayllarini optimallashtiradi", "correct": false }
      ]
    },
    {
      question: "Next.js qaysi faylni kirish nuqtasi sifatida ishlatadi?",
      answers: [
        { "text": "_app.js", "correct": true },
        { "text": "_document.js", "correct": false },
        { "text": "index.js", "correct": false },
        { "text": "pages.js", "correct": false }
      ]
    },
    {
      question: "Next.js'ning asosiy xususiyatlari qaysilar?",
      answers: [
        { "text": "Server-side rendering va Static site generation", "correct": true },
        { "text": "CSS va JavaScript boshqaruvi", "correct": false },
        { "text": "Backend yaratish", "correct": false },
        { "text": "State boshqarish", "correct": false }
      ]
    },
    {
      question: "Next.js'da sahifalar navigatsiyasi qanday amalga oshiriladi?",
      answers: [
        { "text": "Link komponenti va useRouter orqali", "correct": true },
        { "text": "State o'zgartirish orqali", "correct": false },
        { "text": "Static fayllar orqali", "correct": false },
        { "text": "API Routes orqali", "correct": false }
      ]
    }
  ]
  
  </script>
  
  <style lang="scss" scoped></style>
  