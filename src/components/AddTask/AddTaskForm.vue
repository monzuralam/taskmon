<template>
  <div class="clearmax-w-full md:pr-8">
    <form action="" class="task-add-form" @submit.prevent="taskAddForm">
      <div class="grid grid-cols-2 gap-6">
        <label class="block">
          <span class="text-gray-700">Title</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="WordPress Theme Development"
            v-model="formData.title"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Developer</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Monzur Alam"
            v-model="formData.developer"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Status</span>
          <select
            v-model="formData.status"
            class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option disabled value="">Select option</option>
            <option>Todo</option>
            <option>Working on it</option>
            <option>Stuck</option>
            <option>Review</option>
            <option>Done</option>
          </select>
        </label>
        <label class="block">
          <span class="text-gray-700">Deadline</span>
          <input
            type="date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="formData.deadline"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Description</span>
          <textarea
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
            v-model="formData.description"
          ></textarea>
        </label>
        <label class="block">
          <span class="text-gray-700">Estimate Hour</span>
          <input
            type="number"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="10"
            v-model="formData.estimateHour"
          />
        </label>
      </div>
      <div class="mt-4">
        <input
          type="submit"
          class="block bg-black text-white px-2 py-1 rounded border-gray-300 shadow-sm"
          value="Submit"
        />
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useTaskStore } from "./../../stores/tasks.js";
import router from "./../../main.js";

const data = useTaskStore();
const tasks = data.tasks;

const formData = ref({
  title: "",
  developer: "",
  status: "",
  deadline: "",
  description: "",
  estimateHour: "",
});

const taskAddForm = () => {
  const id = Math.ceil(Math.random() * 1000000);
  const title = formData?.value?.title;
  const developer = formData?.value?.developer;
  const status = formData?.value?.status;
  const deadline = formData?.value?.deadline;
  const description = formData?.value?.description;
  const estimateHour = formData?.value?.estimateHour;
  const timer = 0;
  const comments = [];
  if (
    title !== "" &&
    developer !== "" &&
    status !== "" &&
    deadline !== "" &&
    description !== "" &&
    estimateHour !== ""
  ) {
    const taskAdd = tasks.push({
      id,
      title,
      description,
      developer,
      status,
      deadline,
      estimateHour,
      timer,
      comments,
    });
    // redirect to tasks
    if (taskAdd) {
      router.push("/tasks/");
    }
  } else {
    console.log("Error");
  }
  // console.log({
  //   id,
  //   title,
  //   description,
  //   developer,
  //   status,
  //   estimateHour,
  //   deadline,
  //   timer,
  //   comments,
  // });

  console.log(tasks);
};
</script>
