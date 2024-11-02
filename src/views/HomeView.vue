<template>
    <section class="home flex justify-center min-h-[100vh] w-full relative">
        <img src="../assets/backgrounds/home.jpg" alt="Home" class="absolute w-full h-full brightness-[.4] z-[-1] object-cover">
        <div class="max-w-[1200px] w-[100%] flex justify-center items-center">
            <div class="flex flex-col gap-2">
                <router-link :to="item?.path" v-for="(item, index) in links" :key="index" class="text-white bg-[#ffffff5c] py-2 w-[200px] text-center rounded-md border border-transparent hover:border-white ease-linear duration-200">
                    {{ item?.title }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
    const links = [
        {
            title: "Start",
            path: "/sections",
        },
        {
            title: "Statistics",
            path: "/statistics"
        },
        {
            title: "Settings",
            path: "/settings"
        }
    ]
</script>

<style lang="scss" scoped>
    
</style>