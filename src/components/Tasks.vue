<template>
  <Topbar />
  <Menu />
  <!-- content start here -->
  <div class="fixed top-20 pl-80 w-full">
    <h2 class="text-3xl font-semibold mb-4">Tasks</h2>
    <TasksList />
  </div>
  <!-- content stop here -->
</template>
<script>
import Topbar from "./Topbar.vue";
import Menu from "./Menu.vue";
import TasksList from "./Tasks/TasksList.vue";
export default {
  name: "Tasks",
  components: { Topbar, Menu, TasksList },
};
</script>
