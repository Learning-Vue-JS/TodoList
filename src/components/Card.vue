
<script >
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./CardItem.vue";
import requests from "../api";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      data: [],
    };
  },
  async created() {
    await this.handleGetAll();
  },
  methods: {
    async handleGetAll() {
      this.data = await requests.getAll();
    },
  },
};
</script>

<template>
  <CardItem
    v-for="todo of data"
    :key="todo._id"
    :todo="todo"
    :handleGetAll="handleGetAll"
  />
</template>