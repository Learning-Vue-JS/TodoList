
<script setup>
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CNav, CNavItem, CNavLink } from "@coreui/vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <CNav class="justify-content-center">
    <CNavItem>
      <CNavLink href="#" class="text-dark" active>View All </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#" class="text-dark">Completed</CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#" class="text-dark">Ongoing</CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#" class="text-dark">+</CNavLink>
    </CNavItem>
  </CNav>
</template>

