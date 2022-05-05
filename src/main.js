import { CIcon } from "@coreui/icons-vue";
import {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar,
} from "@coreui/icons";

const icons = {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar,
};

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
createApp(App).use(router).mount("#app");
