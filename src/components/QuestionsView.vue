<template>
        <div class="max-w-[400px] w-full p-5 bg-[#ffffff53] rounded-md flex flex-col gap-3">
            <span v-if="activeIndex !== questions.length" class="text-white self-end">{{ activeIndex + 1 }}-{{ questions.length }}</span>
            <div v-if="activeIndex !== questions.length" class="bg-[#ffffff7b] rounded-md p-4 flex flex-col">
                <span class="font-bold text-green-600">Savol:</span>
                <p class="text-white">{{ activeItem?.question }}</p>
            </div>
            <div v-if="activeIndex !== questions.length" class="rounded-md flex flex-col gap-2">
                <span class=" text-green-500 font-bold">Javoblar:</span>
                <label @click="Check(item?.correct, item?.text)" :for="item?.text" v-for="(item, index) in activeItem?.answers" :key="index"  :class="findMistake && item?.correct ? 'bg-[#ffffff7b] cursor-pointer border-2 border-green-500 hover:border-white ease-linear duration-150 rounded-md py-2 text-left px-3 flex items-center' : findMistake && isCheck === item?.text ? 'bg-[#ffffff7b] flex items-center cursor-pointer border-2 border-red-500 hover:border-white ease-linear duration-150 rounded-md py-2 text-left px-3' : 'bg-[#ffffff7b] cursor-pointer border-2 border-transparent hover:border-white ease-linear duration-150 rounded-md py-2 text-left px-3'">
                    <input type="radio" name="js" :id="item?.text" :checked="isCheckedValue === item?.text ? true : false">
                    <span class=" ml-1">{{ item?.text }}</span>
                </label>
                <button @click="Next" class="bg-[#ffffff7b] cursor-pointer border-2 bg-green-500 border-green-500 text-center text-white hover:border-white ease-linear duration-150 rounded-md py-2 px-3">Next</button>
            </div>
            <div v-else class="flex flex-col items-center gap-4">
                <h4 class="text-white text-[20px] font-[500]">Savollar tugadi </h4>
                <div class="flex gap-2">
                    <router-link @click="Restart" :to="programming" class="px-3 py-2 rounded-md text-white bg-green-500">Menyu</router-link>
                    <router-link @click="Restart" :to="sections" class="px-3 py-2 rounded-md text-white bg-green-500">Bo'lim</router-link>
                    <button @click="Restart" class="px-3 py-2 rounded-md text-white bg-green-500">Restart</button>
                </div>
            </div>
        </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { defineProps } from 'vue';

const Index = ref(0);
const activeIndex = computed(() => Index.value);
const findMistake = ref(false);
const Correct = ref(false)
const isCorrect = computed(() => Correct.value);
const CheckItem = ref(false)
const isCheck = computed(() => CheckItem.value);
const CheckedValue = ref("")
const isCheckedValue = computed(() => CheckedValue.value);
const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
  programming: {
    type: String,
    required: true
  },
  sections: {
    type: String,
    required: true
  }
});

const activeItem = computed(()=> props.questions[activeIndex.value])
const Next = () => {
    if (isCorrect.value) {
        Index.value = Index.value + 1
        sessionStorage.setItem("activeIndex", Index.value)
        Correct.value = false
        CheckItem.value = ""
        findMistake.value = false
    }else {
        findMistake.value = true
    }
}
const Check = (correct, title) => {
    Correct.value = correct
    CheckItem.value = title
    CheckedValue.value = title    
}
const Restart = () => {
    Index.value = 0
    sessionStorage.setItem("activeIndex", Index.value)
}
onMounted(() => {
  let index = Number(sessionStorage.getItem("activeIndex"))
  if (index) {
    Index.value = index
  }else {
    Index.value = 0
  }
})
</script>

<style lang="scss" scoped>

</style>