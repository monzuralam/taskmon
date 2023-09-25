<template>
  <Topbar />
  <Menu />
  <!-- content start here -->
  <div class="fixed top-20 pl-80 w-full">
    <TasksTopbar />
    <AddTaskForm />
  </div>
  <!-- content stop here -->
</template>
<script>
import Topbar from "./Topbar.vue";
import Menu from "./Menu.vue";
import TasksTopbar from "./Tasks/TasksTopbar.vue";
export default {
  name: "Tasks",
  components: { Topbar, Menu, TasksTopbar },
};
</script>
