<template>
  <div class="clearmax-w-full md:pr-8">
    <form action="" class="task-add-form" @submit.prevent="onSubmit">
      <div class="grid grid-cols-2 gap-6">
        <label class="block">
          <span class="text-gray-700">Title</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="WordPress Theme Development"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Developer</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Monzur Alam"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Status</span>
          <select
            class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
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
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Description</span>
          <textarea
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
          ></textarea>
        </label>
        <label class="block">
          <span class="text-gray-700">Estimate Hour</span>
          <input
            type="number"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="10"
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
<script setup></script>
