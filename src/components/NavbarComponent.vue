<template>
    <nav class="w-full flex justify-between items-start fixed top-0 left-0 p-3 z-50">
        <div class="flex border-2 border-transparent ease-linear duration-150 hover:border-white text-gray-300 bg-[#ffffff74] rounded-md">
            <button @click="backFn" class="text-[20px] hover:text-white ease-linear duration-150 cursor-pointer w-[40px] flex justify-center items-center h-[40px] border-r-2">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
            </button>
            <router-link @click="clearStorage" to="/" class="text-[20px] hover:text-white cursor-pointer w-[40px] flex justify-center items-center h-[40px]">
                <font-awesome-icon :icon="['fas', 'house']" />
            </router-link>
        </div>
        <div class="relative">
            <button @click="logOut = logOut ? false : true" class="text-[20px] w-full border-2 border-transparent ease-linear duration-150 hover:border-white text-white cursor-pointer px-3 h-[40px] rounded-md bg-[#ffffff74]">{{ name }}</button>
            <button @click="signOut" class="text-[20px] border-2 border-transparent ease-linear duration-150 hover:border-white text-white cursor-pointer px-3 h-[40px] rounded-md bg-[#ffffff74] absolute right-0 top-[41px] w-full" v-if="logOut">Log Out</button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const name = localStorage.getItem("name")
const logOut = ref(false)
const router = useRouter()
const back = router.back
const signOut = () => {
    localStorage.removeItem("name")
    router.push("/")
    setTimeout(() => {
        window.location.reload()
    }, 500);
}

const clearStorage = () => {
    sessionStorage.setItem('activeIndex', "0")
}

const backFn = () => {
    back()
    clearStorage()
}
</script>

<style lang="scss" scoped>

</style>