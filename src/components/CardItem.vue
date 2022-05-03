
<script >
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCard, CCardBody, CCol, CContainer, CRow, CButton } from "@coreui/vue";
import { CIcon } from "@coreui/icons-vue";
import * as icon from "@coreui/icons";

import requests from "../api";

export default {
  components: {
    CIcon,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CRow,
    CButton,
  },
  setup() {
    return {
      icon,
    };
  },
  props: ["todo", "handleGetAll"],
  data() {
    return {
      content: {
        task: this.task,
        done: this.done,
      },
      show: false,
    };
  },

  methods: {
    async Update(id, data) {
      await requests.getUpdate(id, data);
      await this.handleGetAll();
    },
    async Delete(id) {
      await requests.deleteID(id);
      await this.handleGetAll();
    },

    HandleDone(todo) {
      this.content.task = todo.task;
      this.content.done = true;
      this.Update(todo._id, this.content);
    },
    HandleCheckInput(todo) {
      this.content.task = todo.task;
      this.Update(todo._id, this.content);
    },
    HandleUpdate(id) {
      this.Update(id, this.content);
    },
  },
};
</script>

<template>
  <CContainer fluid>
    <CRow>
      <!-- text goster eger degisiklik olacaksa input goster baslangic-->
      <CCol md="8" class="text-center p-2">
        <CCardBody v-if="!this.show">
          {{ todo.task }}
          {{ todo.done }}
        </CCardBody>

        <CCardBody v-if="this.show">
          <input type="text" v-model="todo.task" />
        </CCardBody>
      </CCol>
      <!-- text goster eger degisiklik olacaksa input goster bitis-->

      <!-- normal gosterim baslangic-->
      <CCol md="4" class="p-2" v-if="!this.show">
        <CButton
          size="sm"
          variant="ghost"
          @click="
            (content.task = todo.task),
              (this.show = !this.show),
              HandleUpdate(todo._id)
          "
        >
          <CIcon class="m-3" :icon="icon.cilPencil" size="l" />
        </CButton>
        <!-- bitmis say done i true yap-->
        <CButton size="sm" variant="ghost" @click="this.show, HandleDone(todo)">
          <CIcon class="m-3" :icon="icon.cilCheck" size="l" />
        </CButton>
        <!-- normal bir sekilde delete-->
        <CButton size="sm" variant="ghost" @click="Delete(todo._id)">
          <CIcon class="m-3" :icon="icon.cilXCircle" size="l" />
        </CButton>
      </CCol>
      <!-- normal gosterim bitis-->

      <!-- input Onayla -->
      <CCol md="4" class="p-2" v-if="this.show">
        <CButton
          size="sm"
          variant="ghost"
          @click="HandleCheckInput(todo), (this.show = !this.show)"
        >
          <CIcon class="m-3" :icon="icon.cilCheck" size="l" />
        </CButton>
      </CCol>
    </CRow>
  </CContainer>
</template>

<style scoped>
</style>
