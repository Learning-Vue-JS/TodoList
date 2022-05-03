<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <h1 class="grey underline center ">{{ msg }}</h1>

  </div>
</template>

<style scoped>

.grey{
  color:grey
}
.underline{
  text-decoration: underline greenyellow;
}
.center{
text-align: center;
}
</style>
