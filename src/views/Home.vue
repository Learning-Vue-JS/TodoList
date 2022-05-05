<template>
  <CNav class="justify-content-center">
    <CNavItem>
      <CNavLink
        href="#"
        class="text-dark"
        :class="{ navs: !view_all, 'navs-active': view_all }"
        @click="selectNav(1)"
        >View All
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="#"
        class="text-dark"
        :class="{ navs: !completed, 'navs-active': completed }"
        @click="selectNav(2)"
        >Completed</CNavLink
      >
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="#"
        class="text-dark"
        :class="{ navs: !ongoing, 'navs-active': ongoing }"
        @click="selectNav(3)"
        >Ongoing</CNavLink
      >
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="#"
        class="text-dark"
        :class="{ navsPlus: !addit, 'navs-activePlus': addit }"
        @click="selectNav(4)"
        >+</CNavLink
      >
    </CNavItem>
  </CNav>
  <div v-if="view_all">
    <CardItem
      v-for="todo of data"
      :key="todo._id"
      :todo="todo"
      :handleGetAll="handleGetAll"
    />
  </div>
  <div v-if="completed">
    <CardItem
      v-for="todo of filteredGetAllTrue"
      :key="todo._id"
      :todo="todo"
      :handleGetAll="handleGetAll"
    />
  </div>
  <div v-if="ongoing">
    <CardItem
      v-for="todo of filteredGetAllFalse"
      :key="todo._id"
      :todo="todo"
      :handleGetAll="handleGetAll"
    />
  </div>
  <div v-if="addit">
    <p>ToDo ekle</p>
  </div>
</template>

<script>
import { ref } from "vue";
import CardItem from "../components/CardItem.vue";
import requests from "../api";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CNav, CNavItem, CNavLink } from "@coreui/vue";
export default {
  name: "Home",
  components: {
    CardItem,
    CNav,
    CNavItem,
    CNavLink,
  },

  data() {
    return {
      data: [],
    };
  },

  async created() {
    await this.handleGetAll();
    console.log(this.data.filter((todo) => todo.done === true));

    await this.handleGetAllTrue();
    console.log(this.data.filter((todo) => todo.done === false));
  },

  methods: {
    async handleGetAll() {
      this.data = await requests.getAll();
    },
    async handleGetAllTrue() {
      this.data = await requests.getAll();
    },
  },
  computed: {
    filteredGetAllTrue() {
      return this.data.filter((todo) => todo.done === true);
    },
    filteredGetAllFalse() {
      return this.data.filter((todo) => todo.done === false);
    },
  },
  setup() {
    const view_all = ref(true);
    const completed = ref(false);
    const ongoing = ref(false);
    const addit = ref(false);

    function selectNav(num) {
      if (view_all.value && num != 1) {
        view_all.value = false;
      }
      if (completed.value && num != 2) {
        completed.value = false;
      }
      if (ongoing.value && num != 3) {
        ongoing.value = false;
      }
      if (addit.value && num != 4) {
        addit.value = false;
      }

      if (num == 1) {
        view_all.value = true;
      } else if (num == 2) {
        completed.value = true;
      } else if (num == 3) {
        ongoing.value = true;
      } else {
        addit.value = true;
      }
    }

    return {
      view_all,
      completed,
      ongoing,
      addit,
      selectNav,
    };
  },
};
</script>
