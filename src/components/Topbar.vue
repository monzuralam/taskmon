<template>
  <!-- top bar start here -->
  <div
    class="h-16 bg-white shadow-sm pl-80 pr-8 fixed top-0 left-0 w-full flex items-center"
  >
    <!-- search start here -->
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute left-2 top-2 w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        name=""
        id=""
        class="block w-72 border-none rounded-3xl focus:outline-none bg-gray-100 text-base pl-11 pr-2 py-1"
      />
    </div>
    <!-- search stop here -->
    <div class="ml-auto flex items-center">
      <div class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
      <div class="ml-4 relative">
        <div class="cursor-pointer">
          <img
            src="https://ui-avatars.com/api/?name=Monzur+Alam"
            alt="avater"
            class="h-8 w-8 rounded-full object-cover"
          />
        </div>
        <div class="absolute mt-2 bg-white py-1 w-48 right-0">
          <div class="px-4 py-2 text-xs text-gray-400">Manage Account</div>
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 transition"
          >
            Profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 transition"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- top bar stop here -->
</template>
<script>
export default {
  name: "Topbar",
};
</script>
