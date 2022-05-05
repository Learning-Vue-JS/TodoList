
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
    };
  },

  methods: {
    async addTodo(data) {
      await requests.postTodo(data);
      await this.handleGetAll();
    },
    HandleToDo(newtodo) {
      this.content.task = newtodo;
      this.content.done = false;
      this.addTodo(this.content);
    },
  },
};
</script>

<template>
  <CContainer fluid>
    <CRow>
      <CCol md="8" class="text-center p-2">
        <CCardBody>
          <input type="text" v-model="newtodo" />
        </CCardBody>
      </CCol>

      <CCol md="4" class="p-2">
        <CButton size="sm" variant="ghost" @click="HandleToDo(newtodo)">
          <CIcon class="m-3" :icon="icon.cilCheck" size="l" />
        </CButton>
      </CCol>
    </CRow>
  </CContainer>
</template>
