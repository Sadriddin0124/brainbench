import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExaminerStore = defineStore('store', () => {
  const name = ref(0)
  const getName = () => {
    name.value = localStorage.getItem("name")
  }

  return { name, getName }
})
