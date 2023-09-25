<template>
  <Topbar />
  <Menu />
  <!-- content start here -->
  <div class="fixed top-20 pl-80 w-full">
    <TaskTopbar />
    <TasksList />
  </div>
  <!-- content stop here -->
</template>
<script>
import Topbar from "./Topbar.vue";
import Menu from "./Menu.vue";
import TaskTopbar from "./Tasks/TasksTopbar.vue";
import TasksList from "./Tasks/TasksList.vue";
export default {
  name: "Tasks",
  components: { Topbar, Menu, TaskTopbar, TasksList },
};
</script>
