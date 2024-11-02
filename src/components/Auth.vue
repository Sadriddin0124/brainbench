<template>
    <section class="w-[100%] min-h-[100vh] bg-[#0000006c] fixed top-0 left-0 flex justify-center items-center">
        <form @submit="saveName" class="max-w-[400px] px-5 py-8 rounded-md bg-white w-full flex flex-col gap-4">
            <label class="text-[24px]">Ismingiz nima?</label>
            <div class="flex h-[40px] border rounded-md overflow-hidden">
                <input v-model="name" type="text" class="h-full px-3 w-full outline-none" placeholder="Kimdir">
                <button class="px-3 h-full bg-green-500 text-[20px] text-white">></button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { useExaminerStore } from '@/stores/store';
import { ref } from 'vue';
    const store = useExaminerStore()
    const name = ref('')
    const saveName = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name.value)
        console.log(name.value);
        store.getName()
    }
</script>

<style lang="scss" scoped>

</style>