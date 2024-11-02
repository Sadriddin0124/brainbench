<template>
  <section
    class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 p-3"
  >
    <img
      src="../../assets/backgrounds/js.avif"
      alt="Home"
      class="absolute w-full h-full brightness-[.4] z-[-1] object-cover"
    />
    <h2 class="text-white text-[24px] font-bold mt-[60px]">Javascript</h2>
    <Questions :questions="questions" programming="/programming" sections="/sections" />
  </section>
</template>

<script setup>
import Questions from '@/components/Questions.vue'

const questions = [
  {
    question: 'JavaScript nima uchun ishlatiladi?',
    answers: [
      { text: "Ma'lumotlar bazasini boshqarish uchun", correct: false },
      { text: 'Veb-sahifalarni interaktiv qilish uchun', correct: true },
      { text: 'Rasmni tahrirlash uchun', correct: false },
      { text: "Operatsion tizimni o'rnatish uchun", correct: false }
    ]
  },
  {
    question: 'JavaScript dasturida qaysi belgidan foydalaniladi?',
    answers: [
      { text: '<>', correct: false },
      { text: '{}', correct: true },
      { text: '##', correct: false },
      { text: '||', correct: false }
    ]
  },
  {
    question: 'JavaScript-da qaysi metod massiv uzunligini qaytaradi?',
    answers: [
      { text: 'size()', correct: false },
      { text: 'length', correct: true },
      { text: 'count()', correct: false },
      { text: 'length()', correct: false }
    ]
  },
  {
    question: 'JavaScript-da qaysi operator qiymatni o‘zlashtirish uchun ishlatiladi?',
    answers: [
      { text: '=', correct: true },
      { text: '==', correct: false },
      { text: '===', correct: false },
      { text: '<-', correct: false }
    ]
  },
  {
    question: "JavaScript-da qanday turdagi ma'lumot turlari mavjud?",
    answers: [
      { text: 'List, Char, Integer, Boolean', correct: false },
      { text: 'String, Number, Boolean, Object, Array', correct: true },
      { text: 'Float, Double, Byte', correct: false },
      { text: 'Character, Integer, Boolean, String', correct: false }
    ]
  },
  {
    question: 'JavaScript-da qanday qilib funksiyani chaqiramiz?',
    answers: [
      { text: 'callFunction{}', correct: false },
      { text: 'execute.function()', correct: false },
      { text: 'functionCall()', correct: true },
      { text: 'function{call}', correct: false }
    ]
  },
  {
    question: "JavaScript massiviga yangi elementni qanday qo'shish mumkin?",
    answers: [
      { text: 'push()', correct: true },
      { text: 'add()', correct: false },
      { text: 'insert()', correct: false },
      { text: 'append()', correct: false }
    ]
  },
  {
    question: 'JavaScript-da o‘zgaruvchi e’lon qilish uchun qaysi kalit so‘z ishlatiladi?',
    answers: [
      { text: 'int', correct: false },
      { text: 'define', correct: false },
      { text: 'varname', correct: false },
      { text: 'let', correct: true }
    ]
  },
  {
    question: 'JavaScript-da qaysi kalit so‘z qiymatni qaytaradi?',
    answers: [
      { text: 'yield', correct: false },
      { text: 'return', correct: true },
      { text: 'back', correct: false },
      { text: 'output', correct: false }
    ]
  },
  {
    question: 'JavaScript-da obyektning xossasiga qanday kiriladi?',
    answers: [
      { text: 'object->property', correct: false },
      { text: 'object.property()', correct: false },
      { text: 'object-property', correct: false },
      { text: 'object.property', correct: true }
    ]
  },
  {
    question: 'JavaScript-da sonlarni matnga qanday o‘girish mumkin?',
    answers: [
      { text: 'String()', correct: true },
      { text: 'toText()', correct: false },
      { text: 'parseInt()', correct: false },
      { text: 'textify()', correct: false }
    ]
  },
  {
    question: 'JavaScript dasturlash tili sifatida qanday ishlatiladi?',
    answers: [
      { text: 'Interaktivlik qo‘shish uchun', correct: true },
      { text: 'Fayllarni siqish uchun', correct: false },
      { text: 'Texnik tasvirlarni chizish uchun', correct: false },
      { text: 'Brauzerlarni yangilash uchun', correct: false }
    ]
  },
  {
    question: 'JavaScript qaysi so‘zi bilan o‘zgaruvchi e’lon qilinadi?',
    answers: [
        { text: 'def', correct: false },
        { text: 'val', correct: false },
        { text: 'new', correct: false },
        { text: 'let', correct: true },
    ]
  },
  {
    question: "JavaScriptda 'for' tsikli nima uchun ishlatiladi?",
    answers: [
        { text: 'Sonlarni formatlash uchun', correct: false },
        { text: 'Matnni aniqlash uchun', correct: false },
        { text: 'Tasodifiy son yaratish uchun', correct: false },
        { text: 'Ma’lumotlarni takrorlash uchun', correct: true },
    ]
  },
  {
    question: 'JavaScriptda qaysi operator qiymatni solishtiradi?',
    answers: [
        { text: '<>', correct: false },
      { text: '==', correct: true },
      { text: '<=', correct: false }
    ]
  },
  {
    question: 'JavaScript-da NaN nimani anglatadi?',
    answers: [
        { text: 'No and None', correct: false },
        { text: 'New at Null', correct: false },
        { text: 'Next as Number', correct: false },
        { text: 'Not a Number', correct: true },
    ]
  },
  {
    question: 'JavaScript-da massiv uzunligini olish uchun qaysi usul ishlatiladi?',
    answers: [
      { text: 'length', correct: true },
      { text: 'size', correct: false },
      { text: 'count', correct: false }
    ]
  },
  {
    question: 'JavaScript-da typeof operatori nimani aniqlaydi?',
    answers: [
        { text: 'O‘zgaruvchi qiymatini', correct: false },
      { text: 'O‘zgaruvchi turini', correct: true },
      { text: 'O‘zgaruvchi raqam ekanligini', correct: false }
    ]
  },
  {
    question: 'JavaScript-da qiymatni boshqa qiymatga qanday solishtiramiz?',
    answers: [
        { text: '?=', correct: false },
        { text: '==', correct: true },
      { text: '===', correct: false }
    ]
  },
  {
    question:
      'JavaScript-da qiymatni bir xil qiymatga o‘zlashtirish uchun qaysi operator ishlatiladi?',
    answers: [
        { text: '==', correct: false },
        { text: '=>', correct: false },
        { text: '=', correct: true },
    ]
  },
  {
    question: 'JavaScript-da funksiyani qanday yozamiz?',
    answers: [
        { text: 'func myFunction{}', correct: false },
        { text: 'function myFunction()', correct: true },
      { text: 'function::myFunction()', correct: false }
    ]
  },
  {
    question: 'JavaScript-da DOM qaysi holatda ishlatiladi?',
    answers: [
      { text: 'HTML elementlarini boshqarish uchun', correct: true },
      { text: 'Grafiklarni chizish uchun', correct: false },
      { text: 'Ovozli buyruqlarni qabul qilish uchun', correct: false }
    ]
  },
  {
    question: 'JavaScript-da obyekt qanday hosil qilinadi?',
    answers: [
      { text: 'obj := [];', correct: false },
      { text: 'obj := create();', correct: false },
      { text: 'let obj = {}', correct: true }
    ]
  },
  {
    question: 'JavaScript-da massiv qanday hosil qilinadi?',
    answers: [
      { text: 'arr = new{};', correct: false },
      { text: 'let arr = [];', correct: true },
      { text: 'let arr = createArray();', correct: false }
    ]
  },
  {
    question: 'JavaScript-da qiymatni boshqa qiymatga ko‘chirish uchun qaysi operator ishlatiladi?',
    answers: [
      { text: '=', correct: true },
      { text: '<>', correct: false },
      { text: '==', correct: false }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
