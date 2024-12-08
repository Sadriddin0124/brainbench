<template>
  <div class="max-w-[400px] w-full p-5 bg-[#ffffff53] rounded-md flex flex-col gap-3">
    <span v-if="activeIndex !== questions.length" class="text-white self-end"
      >{{ activeIndex + 1 }}-{{ questions.length }}</span
    >

    <div
      v-if="activeIndex !== questions.length"
      class="bg-[#ffffff7b] rounded-md p-4 flex flex-col"
    >
      <span class="font-bold text-green-600">Savol:</span>
      <p class="text-white">{{ activeItem?.question }}</p>
    </div>

    <div v-if="activeIndex !== questions.length" class="rounded-md flex flex-col gap-2">
      <span class="text-green-500 font-bold">Javoblar:</span>
      <label
        @click="Check(item?.correct, item?.text)"
        :for="item?.text"
        v-for="(item, index) in activeItem?.answers"
        :key="index"
        :class="[
          findMistake && item?.correct
            ? 'bg-[#ffffff7b] cursor-pointer border-2 border-green-500 hover:border-white ease-linear duration-150 rounded-md py-2 text-left px-3 flex items-center'
            : findMistake && isCheck === item?.text
              ? 'bg-[#ffffff7b] shake flex items-center cursor-pointer border-2 border-red-500 hover:border-white ease-linear duration-150 rounded-md py-2 text-left px-3'
              : 'bg-[#ffffff7b] cursor-pointer border-2 border-transparent hover:border-white ease-linear duration-150 rounded-md py-2 text-left px-3'
        ]"
      >
        <input
          type="radio"
          name="js"
          :id="item?.text"
          :checked="isCheckedValue === item?.text ? true : false"
        />
        <span class="ml-1">{{ item?.text }}</span>
      </label>
      <button
        @click="Next"
        class="bg-[#ffffff7b] cursor-pointer border-2 bg-green-500 border-green-500 text-center text-white hover:border-white ease-linear duration-150 rounded-md py-2 px-3"
      >
        Next
      </button>
    </div>

    <div v-else class="flex flex-col items-center gap-4">
      <!-- Mistake and Attempt counters -->
      <h4 class="text-white text-[20px] font-[500]">Savollar tugadi</h4>
      <div class="flex gap-2">
        <router-link
          @click="Restart"
          :to="programming"
          class="px-3 py-2 rounded-md text-white bg-green-500"
          >Menyu</router-link
        >
        <router-link
          @click="Restart"
          :to="sections"
          class="px-3 py-2 rounded-md text-white bg-green-500"
          >Bo'lim</router-link
        >
        <button @click="Restart" class="px-3 py-2 rounded-md text-white bg-green-500">
          Restart
        </button>
      </div>
      <div class="text-white self-start">
        Xatolar: {{ totalMistakes }} / Urinishlar: {{ totalAttempts }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { defineProps } from 'vue'

// Refs and computed properties
const Index = ref(0)
const activeIndex = computed(() => Index.value)
const findMistake = ref(false)
const Correct = ref(false)
const isCorrect = computed(() => Correct.value)
const CheckItem = ref(false)
const isCheck = computed(() => CheckItem.value)
const CheckedValue = ref('')
const isCheckedValue = computed(() => CheckedValue.value)

// Mistake and attempt counters
const totalAttempts = ref(0) // Tracks total attempts
const totalMistakes = ref(0) // Tracks total mistakes

const props = defineProps({
  questions: {
    type: Array,
    required: true
  },
  programming: {
    type: String,
    required: true
  },
  sections: {
    type: String,
    required: true
  }
})

const activeItem = computed(() => props.questions[activeIndex.value])

// Answer checking
const Next = () => {
  if (isCorrect.value) {
    Index.value = Index.value + 1
    sessionStorage.setItem('activeIndex', Index.value)
    Correct.value = false
    CheckItem.value = ''
    findMistake.value = false
  } else {
    findMistake.value = true
    playVibration()
    playSound()
  }
}

// Check the selected answer and play sound + vibration
const Check = (correct, title) => {
  Correct.value = correct
  CheckItem.value = title
  CheckedValue.value = title
  findMistake.value = false

  // Increment attempt count for every selected answer
  totalAttempts.value += 1

  // Play vibration and sound for wrong answer
  if (!correct) {
    totalMistakes.value += 1 
  }
}

// Restart the quiz
const Restart = () => {
  Index.value = 0
  totalAttempts.value = 0 // Reset attempts count
  totalMistakes.value = 0 // Reset mistakes count
  sessionStorage.setItem('activeIndex', Index.value)
}

// Handle vibration
const playVibration = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate([200]) // Vibrate for 200ms
  }
}

// Play sound for wrong answer
const playSound = () => {
  const sound = new Audio('/vibrate.mp3') // Path to your sound file
  sound.play()
}

// Load index from sessionStorage on mount
onMounted(() => {
  let index = Number(sessionStorage.getItem('activeIndex'))
  if (index) {
    Index.value = index
  } else {
    Index.value = 0
  }
})
</script>

<style lang="scss" scoped>
/* Shaking animation */
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
}

.shake {
  animation: shake 0.5s ease-in-out;
}
</style>
