<template>
  <Topbar />
  <Menu />
  <div class="fixed pl-80 w-full min-h-full flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-6xl underline">404</h1>
      <p class="text-xl">not found.</p>
    </div>
  </div>
</template>
<script>
import Topbar from "./Topbar.vue";
import Menu from "./Menu.vue";
export default {
  name: "Errors",
  components: { Topbar, Menu },
};
</script>
