<script setup>
import { useRoute } from "vue-router";
import { useTaskStore } from "../stores/tasks";
const taskStore = useTaskStore();
const route = useRoute();
const id = route.params.id;
const taskDetails = taskStore.tasks.find((item) => item.id == id);
const img = "https://ui-avatars.com/api/?name=" + taskDetails?.developer;
//task status class
const statusClass = () => {
  if (taskDetails?.status == "Working on it") {
    return "leading-normal text-white px-2 py-0.5 bg-orange-700";
  }
  if (taskDetails?.status == "Stuck") {
    return "leading-normal text-white px-2 py-0.5 bg-red-700";
  }
  if (taskDetails?.status == "Review") {
    return "leading-normal text-black px-2 py-0.5 bg-yellow-400";
  }
  if (taskDetails?.status == "Done") {
    return "leading-normal text-white px-2 py-0.5 bg-green-700";
  }
  return "leading-normal text-white px-2 py-0.5 bg-gray-700";
};
</script>
<template>
  <Topbar />
  <Menu />
  <!-- content start here -->
  <div class="fixed top-20 pl-80 w-full">
    <h2 class="text-3xl font-semibold mb-4">{{ taskDetails?.title }}</h2>
    <div class="flex items-center gap-2 mb-4">
      <!-- developer info start here -->
      <div
        class="flex justify-between content-center align-middle items-center"
      >
        <img
          :src="img"
          :alt="taskDetails?.developer"
          class="w-8 bordered rounded mr-2"
        />{{ taskDetails?.developer }}
      </div>
      <!-- developer info stop here -->
      <!-- task status start here -->
      <div class="">
        <span :class="statusClass()">{{ taskDetails.status }}</span>
      </div>
      <!-- task status stop here -->
      <!-- deadline start here -->
      <div class="flex justify-between content-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div class="leading-normal">{{ taskDetails?.deadline }}</div>
      </div>
      <!-- deadline stop here -->
    </div>
    <!-- task description start here -->
    <p class="text-base font-medium">
      {{ taskDetails?.desc }}
    </p>
    <!-- task description stop here -->
  </div>
  <!-- content stop here -->
</template>
<script>
import Topbar from "./Topbar.vue";
import Menu from "./Menu.vue";
export default {
  name: "TaskView",
  components: { Topbar, Menu },
};
</script>
