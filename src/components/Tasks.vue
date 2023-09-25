<template>
  <Topbar />
  <Menu />
  <!-- content start here -->
  <div class="fixed top-20 pl-80 w-full">
    <div class="flex justify-between md:pr-6">
      <div><h2 class="text-3xl font-semibold mb-4">Tasks</h2></div>
      <div>
        <router-link
          to="/task-add/"
          class="text-lg bg-black text-white px-2 py-1 border rounded"
          >Add Task</router-link
        >
      </div>
    </div>
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
