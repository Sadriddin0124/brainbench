<template>
    <section class="w-full min-h-[100vh] relative flex justify-center items-center flex-col gap-4 px-3">
        <img src="../assets/backgrounds/english2.jpg" alt="Home" class="absolute w-full h-full brightness-[.4] z-[-1] object-cover">
        <h2 class="text-white text-[24px] font-bold">Ingliz tili bo'limi</h2>
        <div class="max-w-[400px] w-full p-5 bg-[#ffffff53] rounded-md flex flex-col gap-3">
            <router-link :to="item?.path" v-for="(item, index) in sections" :key="index" class="flex items-center gap-2 bg-[#ffffff7b] rounded-md px-3 py-2 ease-linear duration-150 border-2 border-transparent hover:border-white">
                <font-awesome-icon :icon="['fas', 'play']" class="text-white"/>
                <span class="text-white">{{ item?.title }}</span>
            </router-link>
        </div>
    </section>
</template>

<script setup>
const sections = [
    {
        title: "Noto'g'ri fe'llar",
        path: "/irregular",
    },
    {
        title: "O'tgan Zamon",
        path: "/past",
    },
    {
        title: "Hozirgi Zamon",
        path: "/present",
    },
    {
        title: "Kelasi Zamon",
        path: "/future",
    },
]
</script>

<style lang="scss" scoped>

</style>