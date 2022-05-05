<script setup>
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <TodoList msg="Projects" />
    </div>
  </header>
  <router-view />
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
