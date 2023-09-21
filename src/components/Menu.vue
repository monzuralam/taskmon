<template>
  <!-- sidebar start here -->
  <div class="fixed top-0 left-0 w-72 h-full bg-gray-800 shadow-md z-10">
    <h1 class="text-white font-bold text-2xl text-center py-5">
      <router-link to="/">TaskMon.</router-link>
    </h1>
    <div class="py-5">
      <router-link
        to="/"
        class="flex items-center my-1 px-4 py-3 text-white border-r-4 border-blue-500 bg-gray-900 text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-2 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Dashboard
      </router-link>
      <router-link
        to="/tasks"
        class="flex items-center my-1 px-4 py-3 text-white border-r-4 border-blue-500 bg-gray-900 text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-2 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        Tasks
      </router-link>
    </div>
  </div>
  <!-- sidebar stop here -->
</template>
<script>
export default {
  name: "Menu",
};
</script>
