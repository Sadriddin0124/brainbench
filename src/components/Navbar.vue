<template>
    <nav class="w-full flex justify-between items-center fixed top-0 left-0 p-3 z-50">
        <div class="flex border-2 border-transparent ease-linear duration-150 hover:border-white text-white bg-[#ffffff74] rounded-md">
            <router-link to="/" class="text-[20px] hover:text-white cursor-pointer w-[40px] flex justify-center items-center h-[40px] border-r-2">
                <font-awesome-icon :icon="['fas', 'house']" />
            </router-link>
            <router-link to="/sections" class="text-[20px] hover:text-white cursor-pointer w-[40px] flex justify-center items-center h-[40px]">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </router-link>
        </div>
        <button class="text-[20px] border-2 border-transparent ease-linear duration-150 hover:border-white text-white cursor-pointer px-3 h-[40px] rounded-md bg-[#ffffff74]">{{ name }}</button>
    </nav>
</template>

<script setup>
const name = localStorage.getItem("name")
</script>

<style lang="scss" scoped>

</style>