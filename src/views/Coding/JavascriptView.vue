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
    <QuestionsView :questions="questions" programming="/programming" sections="/sections" />
  </section>
</template>

<script setup>
import QuestionsView from '@/components/QuestionsView.vue';

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
  },
  {
    question: "JavaScript-da massivni qanday yaratish mumkin?",
    code: "let arr = [1, 2, 3];",
    answers: [
      { "text": "arr = {1, 2, 3};", "correct": false },
      { "text": "arr = new Array(1, 2, 3);", "correct": true },
      { "text": "arr = [1; 2; 3];", "correct": false }
    ]
  },
  {
    question: "JavaScript-da xatolikni qanday tutish mumkin?",
    code: "try { throw new Error('Xato!'); } catch (e) { console.error(e); }",
    answers: [
      { "text": "try/catch", "correct": true },
      { "text": "catch/throw", "correct": false },
      { "text": "error/try", "correct": false }
    ]
  },
  {
    question: "JavaScript-da funksiya qanday aniqlanadi?",
    code: "function myFunction() { return true; }",
    answers: [
      { "text": "function myFunction[] {}", "correct": false },
      { "text": "function myFunction() {}", "correct": true },
      { "text": "myFunction() => {}", "correct": false }
    ]
  },
  {
    question: "JavaScript-da massivning uzunligini qanday olish mumkin?",
    code: "let length = arr.length;",
    answers: [
      { "text": "arr.size()", "correct": false },
      { "text": "arr.length()", "correct": false },
      { "text": "arr.length", "correct": true }
    ]
  },
  {
    question: "JavaScript-da xususiyatlar qanday ishlatiladi?",
    code: "let obj = { name: 'John', age: 30 };",
    answers: [
      { "text": "obj.name", "correct": true },
      { "text": "obj->name", "correct": false },
      { "text": "obj.name[]", "correct": false }
    ]
  },
  {
    question: "JavaScript-da qiymatlarni solishtirish uchun qaysi operator ishlatiladi?",
    code: "console.log(5 === '5');",
    answers: [
      { "text": "==", "correct": false },
      { "text": "===", "correct": true },
      { "text": "equals", "correct": false }
    ]
  },
  {
    question: "JavaScript-da qanday qilib ob'ektni ko'chirish mumkin?",
    code: "let newObj = {...oldObj};",
    answers: [
      { "text": "let newObj = oldObj;", "correct": false },
      { "text": "let newObj = Object.assign({}, oldObj);", "correct": true },
      { "text": "let newObj = oldObj.clone();", "correct": false }
    ]
  },
  {
    question: "JavaScript-da klon yaratish uchun qaysi usuldan foydalanish mumkin?",
    code: "let clonedArray = [...originalArray];",
    answers: [
      { "text": "Array.from(originalArray);", "correct": true },
      { "text": "originalArray.clone();", "correct": false },
      { "text": "originalArray.copy();", "correct": false }
    ]
  },
  {
    question: "JavaScript-da promise nima?",
    code: "let myPromise = new Promise((resolve, reject) => {});",
    answers: [
      { "text": "Async funksiyalar", "correct": false },
      { "text": "Xatoliklarni tutish", "correct": false },
      { "text": "Asinxron vazifalarni boshqarish", "correct": true }
    ]
  },
  {
    question: "JavaScript-da qanday qilib event listener qo'shiladi?",
    code: "button.addEventListener('click', () => { });",
    answers: [
      { "text": "button.onClick = function() {}", "correct": false },
      { "text": "button.addEventListener('click', handler);", "correct": true },
      { "text": "button.click(handler);", "correct": false }
    ]
  },
  {
    question: "JavaScript-da vaqtni qanday olish mumkin?",
    code: "let time = new Date();",
    answers: [
      { "text": "let time = new Time();", "correct": false },
      { "text": "let time = Date.now();", "correct": true },
      { "text": "let time = new Date.now();", "correct": false }
    ]
  },
  {
    question: "JavaScript-da qachon qatorni bo'sh deb hisoblaymiz?",
    code: "let str = '';",
    answers: [
      { "text": "if (str === '')", "correct": true },
      { "text": "if (str.length === 0)", "correct": true },
      { "text": "if (str != null)", "correct": false }
    ]
  },
  {
    question: "JavaScript-da massivni qanday ajratish mumkin?",
    code: "let subArray = arr.slice(1, 3);",
    answers: [
      { "text": "arr.split(1, 3);", "correct": false },
      { "text": "arr.slice(1, 3);", "correct": true },
      { "text": "arr.take(1, 3);", "correct": false }
    ]
  },
  {
    question: "JavaScriptda o'zgaruvchi e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
    answers: [
      { text: "var", correct: true },
      { text: "variable", correct: false },
      { text: "letvar", correct: false },
      { text: "v", correct: false }
    ]
  },
  {
    question: "JavaScriptda `typeof NaN`ning natijasi qanday?",
    answers: [
      { text: "number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false }
    ]
  },
  {
    question: "JSON ma'lumotlarini JavaScript obyektiga aylantirish uchun qaysi metod ishlatiladi?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.objectify()", correct: false }
    ]
  },
  {
    question: "JavaScriptda izoh qo'shish uchun qaysi belgidan foydalaniladi?",
    answers: [
      { text: "//", correct: true },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "%", correct: false }
    ]
  },
  {
    question: "`===` JavaScriptda nimani anglatadi?",
    answers: [
      { text: "Qattiq tenglik", correct: true },
      { text: "Tayinlash", correct: false },
      { text: "Yumshoq tenglik", correct: false },
      { text: "Bitwise taqqoslash", correct: false }
    ]
  },
  {
    question: "JavaScriptda matnni raqamga aylantirish uchun qaysi metod ishlatiladi?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "String()", correct: false },
      { text: "parseString()", correct: false },
      { text: "toNumber()", correct: false }
    ]
  },
  {
    question: "Doimiy o'zgaruvchi e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "`console.log(typeof null)`ning natijasi qanday bo'ladi?",
    answers: [
      { text: "object", correct: true },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "string", correct: false }
    ]
  },
  {
    question: "Qaysi metod array oxiriga element qo'shadi?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Arrow funksiyalarni yaratish uchun qaysi belgi ishlatiladi?",
    answers: [
      { text: "=>", correct: true },
      { text: "->", correct: false },
      { text: "~>", correct: false },
      { text: "<-", correct: false }
    ]
  },
  {
    question: "`forEach()` funksiyasi qaysi turdagi ma'lumotlar bilan ishlaydi?",
    answers: [
      { text: "Array", correct: true },
      { text: "String", correct: false },
      { text: "Object", correct: false },
      { text: "Number", correct: false }
    ]
  },
  {
    question: "JavaScriptda `null` qaysi turga kiradi?",
    answers: [
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "number", correct: false },
      { text: "string", correct: false }
    ]
  },
  {
    question: "JavaScriptda funksiyani qanday chaqirish mumkin?",
    answers: [
      { text: "functionName()", correct: true },
      { text: "function functionName", correct: false },
      { text: "functionName;", correct: false },
      { text: "functionName[]", correct: false }
    ]
  },
  {
    question: "Qaysi kalit so'z o'zgaruvchi qiymatini o'zgartirishga yo'l qo'ymaydi?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "JavaScript-da xotiradagi ma'lumotlar almashuvi qanday turga asoslangan?",
    answers: [
      { text: "Pass by value", correct: true },
      { text: "Pass by reference", correct: false },
      { text: "Memory reference", correct: false },
      { text: "Data shift", correct: false }
    ]
  },
  {
    question: "`isNaN()` funksiyasi nima uchun ishlatiladi?",
    answers: [
      { text: "Not-a-Number tekshiradi", correct: true },
      { text: "Stringga o'zgartiradi", correct: false },
      { text: "Boolean qaytaradi", correct: false },
      { text: "Array qiladi", correct: false }
    ]
  },
  {
    question: "Qaysi JavaScript operatori ikki qiymatni taqqoslash uchun ishlatiladi?",
    answers: [
      { text: "==", correct: true },
      { text: "<=", correct: false },
      { text: ">=", correct: false },
      { text: "!=", correct: false }
    ]
  },
  {
    question: "JavaScriptda `const` bilan e'lon qilingan arrayning qiymatlarini o'zgartirish mumkinmi?",
    answers: [
      { text: "Ha, mumkin", correct: true },
      { text: "Yo'q, mumkin emas", correct: false },
      { text: "Faqat qo'shish mumkin", correct: false },
      { text: "Faqat o'chirish mumkin", correct: false }
    ]
  },
  {
    question: "Qaysi metod stringning uzunligini qaytaradi?",
    answers: [
      { text: "length", correct: true },
      { text: "size", correct: false },
      { text: "count", correct: false },
      { text: "charAt", correct: false }
    ]
  },
  {
    question: "JavaScriptda `Math.floor(5.7)`ning natijasi nima?",
    answers: [
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "5.7", correct: false },
      { text: "0", correct: false }
    ]
  },
  {
    question: "JavaScriptda qaysi operator `false` yoki `true` qiymatlarini qaytaradi?",
    answers: [
      { text: "Boolean", correct: true },
      { text: "String", correct: false },
      { text: "Integer", correct: false },
      { text: "Character", correct: false }
    ]
  },
  {
    question: "JavaScriptda o'zgaruvchi e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
    answers: [
      { text: "var", correct: true },
      { text: "variable", correct: false },
      { text: "letvar", correct: false },
      { text: "v", correct: false }
    ]
  },
  {
    question: "JavaScriptda `typeof NaN`ning natijasi qanday?",
    answers: [
      { text: "number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false }
    ]
  },
  {
    question: "JSON ma'lumotlarini JavaScript obyektiga aylantirish uchun qaysi metod ishlatiladi?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.objectify()", correct: false }
    ]
  },
  {
    question: "JavaScriptda izoh qo'shish uchun qaysi belgidan foydalaniladi?",
    answers: [
      { text: "//", correct: true },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "%", correct: false }
    ]
  },
  {
    question: "`===` JavaScriptda nimani anglatadi?",
    answers: [
      { text: "Qattiq tenglik", correct: true },
      { text: "Tayinlash", correct: false },
      { text: "Yumshoq tenglik", correct: false },
      { text: "Bitwise taqqoslash", correct: false }
    ]
  },
  {
    question: "JavaScriptda matnni raqamga aylantirish uchun qaysi metod ishlatiladi?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "String()", correct: false },
      { text: "parseString()", correct: false },
      { text: "toNumber()", correct: false }
    ]
  },
  {
    question: "Doimiy o'zgaruvchi e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "`console.log(typeof null)`ning natijasi qanday bo'ladi?",
    answers: [
      { text: "object", correct: true },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "string", correct: false }
    ]
  },
  {
    question: "Qaysi metod array oxiriga element qo'shadi?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Arrow funksiyalarni yaratish uchun qaysi belgi ishlatiladi?",
    answers: [
      { text: "=>", correct: true },
      { text: "->", correct: false },
      { text: "~>", correct: false },
      { text: "<-", correct: false }
    ]
  },
  {
    question: "`forEach()` funksiyasi qaysi turdagi ma'lumotlar bilan ishlaydi?",
    answers: [
      { text: "Array", correct: true },
      { text: "String", correct: false },
      { text: "Object", correct: false },
      { text: "Number", correct: false }
    ]
  },
  {
    question: "JavaScriptda `null` qaysi turga kiradi?",
    answers: [
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "number", correct: false },
      { text: "string", correct: false }
    ]
  },
  {
    question: "JavaScriptda funksiyani qanday chaqirish mumkin?",
    answers: [
      { text: "functionName()", correct: true },
      { text: "function functionName", correct: false },
      { text: "functionName;", correct: false },
      { text: "functionName[]", correct: false }
    ]
  },
  {
    question: "Qaysi kalit so'z o'zgaruvchi qiymatini o'zgartirishga yo'l qo'ymaydi?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "JavaScript-da xotiradagi ma'lumotlar almashuvi qanday turga asoslangan?",
    answers: [
      { text: "Pass by value", correct: true },
      { text: "Pass by reference", correct: false },
      { text: "Memory reference", correct: false },
      { text: "Data shift", correct: false }
    ]
  },
  {
    question: "`isNaN()` funksiyasi nima uchun ishlatiladi?",
    answers: [
      { text: "Not-a-Number tekshiradi", correct: true },
      { text: "Stringga o'zgartiradi", correct: false },
      { text: "Boolean qaytaradi", correct: false },
      { text: "Array qiladi", correct: false }
    ]
  },
  {
    question: "Qaysi JavaScript operatori ikki qiymatni taqqoslash uchun ishlatiladi?",
    answers: [
      { text: "==", correct: true },
      { text: "<=", correct: false },
      { text: ">=", correct: false },
      { text: "!=", correct: false }
    ]
  },
  {
    question: "JavaScriptda `const` bilan e'lon qilingan arrayning qiymatlarini o'zgartirish mumkinmi?",
    answers: [
      { text: "Ha, mumkin", correct: true },
      { text: "Yo'q, mumkin emas", correct: false },
      { text: "Faqat qo'shish mumkin", correct: false },
      { text: "Faqat o'chirish mumkin", correct: false }
    ]
  },
  {
    question: "Qaysi metod stringning uzunligini qaytaradi?",
    answers: [
      { text: "length", correct: true },
      { text: "size", correct: false },
      { text: "count", correct: false },
      { text: "charAt", correct: false }
    ]
  },
  {
    question: "JavaScriptda `Math.floor(5.7)`ning natijasi nima?",
    answers: [
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "5.7", correct: false },
      { text: "0", correct: false }
    ]
  },
  {
    question: "JavaScriptda qaysi operator `false` yoki `true` qiymatlarini qaytaradi?",
    answers: [
      { text: "Boolean", correct: true },
      { text: "String", correct: false },
      { text: "Integer", correct: false },
      { text: "Character", correct: false }
    ]
  },

]

</script>

<style lang="scss" scoped></style>
