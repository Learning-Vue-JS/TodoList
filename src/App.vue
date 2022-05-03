<script setup>
import TodoList from "./components/TodoList.vue";
import Menu from "./components/Menu.vue";
import Card from "./components/Card.vue";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
</script>

<template>
  <header>
    <div class="wrapper">
      <TodoList msg="Projects" />
    </div>
  </header>
  <nav><Menu /></nav>
  <div><Card /></div>
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
