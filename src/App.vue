<template>
  <div>
    <Auth v-if="!store.name"/>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Auth from './components/Auth.vue';
import Navbar from './components/Navbar.vue';
import { useExaminerStore } from './stores/store';
const store = useExaminerStore()
store.getName()

</script>

<style lang="scss" scoped>

</style>