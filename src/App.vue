<template>
  <div>
    <AuthComponent v-if="!store.name"/>
    <NavbarComponent v-if="store.name"/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import AuthComponent from './components/AuthComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import { useExaminerStore } from './stores/store';
const store = useExaminerStore()
store.getName()

</script>

<style lang="scss" scoped>

</style>