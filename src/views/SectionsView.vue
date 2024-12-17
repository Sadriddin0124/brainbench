<template>
    <section class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 px-3">
        <img src="../assets/backgrounds/menu.jpg" alt="Home" class="absolute w-full h-full z-[-1] object-cover">
        <h2 class="text-white text-[24px] font-bold">Bo'limlar</h2>
        <div class="max-w-[400px] w-full p-5 bg-[#ffffff53] rounded-md flex flex-col gap-3">
            <router-link :to="item?.path" v-for="(item, index) in sections" :key="index" class="flex items-center gap-2 cursor-pointer bg-[#ffffff7b] rounded-md p-2 ease-linear duration-150 border-2 border-transparent hover:border-white">
                <img :src="item?.icon" :alt="item?.title" class="w-[30px] h-[30px] rounded-lg object-cover">
                <span class="text-white">{{ item?.title }}</span>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import Section1 from "@/assets/sections/section1.jpg"
import Section2 from "@/assets/sections/section2.jpg"
import Section3 from "@/assets/sections/section3.png"
const sections = [
    {
        title: "Dasturlash",
        path: "/programming",
        icon: Section1
    },
    {
        title: "Rus tili",
        path: "/russian",
        icon: Section2
    },
    {
        title: "Ingliz tili",
        path: "/english",
        icon: Section3
    },
]
</script>

<style lang="scss" scoped>

</style>