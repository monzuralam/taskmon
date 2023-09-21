<template>
  <Topbar />
  <Menu />
  <!-- content start here -->
  <div class="fixed top-20 pl-80 w-full">
    <h2>Welcome, Monzur Alam</h2>
  </div>
  <!-- content stop here -->
</template>
<script>
import Topbar from "./Topbar.vue";
import Menu from "./Menu.vue";
export default {
  name: "Dashboard",
  components: { Menu, Topbar },
};
</script>
