<template>
    <section class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 px-3">
        <img src="../assets/backgrounds/coding.jpg" alt="Home" class="absolute w-full h-full brightness-[.4] z-[-1] object-cover">
        <h2 class="text-white text-[24px] font-bold">Dasturlash bo'limi</h2>
        <div class="max-w-[400px] w-full p-5 bg-[#ffffff53] rounded-md flex flex-col gap-3">
            <router-link :to="item?.path" v-for="(item, index) in sections" :key="index" class="flex items-center gap-2 bg-[#ffffff7b] rounded-md p-2 ease-linear duration-150 border-2 border-transparent hover:border-white">
                <img :src="item?.icon" :alt="item?.title" class="w-[30px] h-[30px] rounded-lg object-cover">
                <span class="text-white">{{ item?.title }}</span>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import JS from "@/assets/sections/js.png"
import React from "@/assets/sections/react.png"
import Next from "@/assets/sections/next.jpg"
import Vue from "@/assets/sections/vue.webp"
const sections = [
    {
        title: "Javascript",
        path: "/javascript",
        icon: JS
    },
    {
        title: "React",
        path: "/react",
        icon: React
    },
    {
        title: "Next",
        path: "/next",
        icon: Next
    },
    {
        title: "Vue 3",
        path: "/vue",
        icon: Vue
    },
]
</script>

<style lang="scss" scoped>

</style>