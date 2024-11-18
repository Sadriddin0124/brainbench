<template>
    <section
      class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
    >
      <img
        src="../../assets/backgrounds/react.jpg"
        alt="Home"
        class="absolute w-full h-full brightness-[.3] z-[-1] object-cover"
      />
      <h2 class="text-white text-[24px] font-bold mt-[60px]">React JS</h2>
      <QuestionsView :questions="questions" programming="/programming" sections="/sections" />
    </section>
  </template>
  
  <script setup>
  import QuestionsView from '@/components/QuestionsView.vue';
  
  const questions = [
    {
      "question": "React nima?",
      "answers": [
        { "text": "Ma'lumotlar bazasini boshqarish tizimi", "correct": false },
        { "text": "Foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi", "correct": true },
        { "text": "CSS ramkasi", "correct": false },
        { "text": "Dasturlash tili", "correct": false }
      ]
    },
    {
      "question": "React komponentlari qanday turlarga bo'linadi?",
      "answers": [
        { "text": "Funksional va Klass", "correct": true },
        { "text": "Statik va Dinamik", "correct": false },
        { "text": "Synchronous va Asynchronous", "correct": false },
        { "text": "Local va Global", "correct": false }
      ]
    },
    {
      "question": "React komponentining asosiy vazifasi nima?",
      "answers": [
        { "text": "Ma'lumotlarni saqlash", "correct": false },
        { "text": "UI elementlarini yaratish", "correct": true },
        { "text": "Backend serverini boshqarish", "correct": false },
        { "text": "Networkingni osonlashtirish", "correct": false }
      ]
    },
    {
      "question": "JSX nima?",
      "answers": [
        { "text": "JavaScriptning kengaytirilgan sintaksisi", "correct": true },
        { "text": "CSS uchun formatlash vositasi", "correct": false },
        { "text": "Server kodlash usuli", "correct": false },
        { "text": "Ma'lumotlar bazasini boshqarish vositasi", "correct": false }
      ]
    },
    {
      "question": "React komponentida state qanday o'zgartiriladi?",
      "answers": [
        { "text": "State obyektini to'g'ridan-to'g'ri o'zgartirish orqali", "correct": false },
        { "text": "setState() metodidan foydalanish orqali", "correct": true },
        { "text": "Props orqali", "correct": false },
        { "text": "Yangi state obyektini yaratish orqali", "correct": false }
      ]
    },
    {
      "question": "Props nima uchun ishlatiladi?",
      "answers": [
        { "text": "State o'zgartirish uchun", "correct": false },
        { "text": "Komponentga ma'lumot uzatish uchun", "correct": true },
        { "text": "Komponentni tahrirlash uchun", "correct": false },
        { "text": "Server bilan bog'lanish uchun", "correct": false }
      ]
    },
    {
      "question": "Lifecycle metodlari qaysi turdagi komponentlarga tegishli?",
      "answers": [
        { "text": "Funksional komponentlar", "correct": false },
        { "text": "Klass komponentlar", "correct": true },
        { "text": "Har ikkisi uchun", "correct": false },
        { "text": "Hech biri uchun emas", "correct": false }
      ]
    },
    {
      "question": "useEffect nima uchun ishlatiladi?",
      "answers": [
        { "text": "Yon effektlarni boshqarish uchun React Hook", "correct": true },
        { "text": "State yangilash uchun metod", "correct": false },
        { "text": "Komponentlarni optimallashtirish vositasi", "correct": false },
        { "text": "Hodisalarni boshqarish uchun funksiya", "correct": false }
      ]
    },
    {
      "question": "Reactda virtual DOM qanday ishlaydi?",
      "answers": [
        { "text": "Real DOMni to'g'ridan-to'g'ri yangilaydi", "correct": false },
        { "text": "DOMdagi faqat o'zgargan qismini yangilaydi", "correct": true },
        { "text": "Butun DOMni almashtiradi", "correct": false },
        { "text": "DOMga ta'sir qilmaydi", "correct": false }
      ]
    },
    {
      "question": "React Router nima uchun ishlatiladi?",
      "answers": [
        { "text": "Ma'lumotlarni boshqarish uchun", "correct": false },
        { "text": "Ko'rinishlar orasida navigatsiya qilish uchun", "correct": true },
        { "text": "Komponentlarni stilizatsiya qilish uchun", "correct": false },
        { "text": "Backend operatsiyalarini boshqarish uchun", "correct": false }
      ]
    },
    {
      "question": "Reactda 'key' nima uchun kerak?",
      "answers": [
        { "text": "Ro'yxatlarni render qilishni optimallashtirish uchun", "correct": true },
        { "text": "Komponent xususiyatlarini aniqlash uchun", "correct": false },
        { "text": "Komponentlarni stilizatsiya qilish uchun", "correct": false },
        { "text": "Hodisalarni tetiklash uchun", "correct": false }
      ]
    },
    {
      "question": "useState nima?",
      "answers": [
        { "text": "Funksional komponentlarda state boshqarish uchun React Hook", "correct": true },
        { "text": "Lifecycle metod", "correct": false },
        { "text": "Stilizatsiya qilish vositasi", "correct": false },
        { "text": "Propsni yangilash metodi", "correct": false }
      ]
    },
    {
      "question": "Context API nima uchun ishlatiladi?",
      "answers": [
        { "text": "Global state boshqarish uchun", "correct": true },
        { "text": "CSS stilini aniqlash uchun", "correct": false },
        { "text": "API'lar bilan ulanish uchun", "correct": false },
        { "text": "Komponentlarni sinash uchun", "correct": false }
      ]
    },
    {
      "question": "Reactda fragment nima?",
      "answers": [
        { "text": "Elementlar uchun yengil qopqoq", "correct": true },
        { "text": "Ma'lumotlar tuzilmasi", "correct": false },
        { "text": "State boshqarish vositasi", "correct": false },
        { "text": "Lifecycle metod", "correct": false }
      ]
    },
    {
      "question": "React StrictMode nima uchun ishlatiladi?",
      "answers": [
        { "text": "Dasturdagi potentsial muammolarni aniqlash uchun", "correct": true },
        { "text": "Komponentlarni stilizatsiya qilish uchun", "correct": false },
        { "text": "Dastur state'ini boshqarish uchun", "correct": false },
        { "text": "Performance'ni optimallashtirish uchun", "correct": false }
      ]
    },
    {
      "question": "React memo nima uchun ishlatiladi?",
      "answers": [
        { "text": "Keraksiz qayta renderlarni oldini olish uchun", "correct": true },
        { "text": "DOMni yangilash uchun", "correct": false },
        { "text": "Ma'lumotlarni olish uchun", "correct": false },
        { "text": "State boshqarish uchun", "correct": false }
      ]
    },
    {
      "question": "useRef nima uchun ishlatiladi?",
      "answers": [
        { "text": "DOM elementlari bilan ishlash uchun", "correct": true },
        { "text": "State boshqarish uchun", "correct": false },
        { "text": "Yon effektlarni boshqarish uchun", "correct": false },
        { "text": "Global state boshqarish uchun", "correct": false }
      ]
    },
    {
      "question": "Reactda lazy loading nima uchun ishlatiladi?",
      "answers": [
        { "text": "Komponentlarni faqat kerak bo'lganda yuklash uchun", "correct": true },
        { "text": "CSS'ni optimallashtirish uchun", "correct": false },
        { "text": "API'larni boshqarish uchun", "correct": false },
        { "text": "State'ni tezroq yangilash uchun", "correct": false }
      ]
    },
    {
      "question": "Reactda prop drilling muammosini qanday hal qilish mumkin?",
      "answers": [
        { "text": "Context API'dan foydalanish", "correct": true },
        { "text": "State'dan foydalanish", "correct": false },
        { "text": "Lifecycle metodlardan foydalanish", "correct": false },
        { "text": "Fragmentlardan foydalanish", "correct": false }
      ]
    }
  ]
  
  </script>
  
  <style lang="scss" scoped></style>
  