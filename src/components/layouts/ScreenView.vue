<script setup>
import { RouterView } from "vue-router";
import NavbarView from "./NavbarView.vue";
import SidebarView from "./SidebarView.vue";
import { useMenu } from "@/stores/menuControl";
import closeIcon from "../icons/closeIcon.vue";

const useStoreMenu = useMenu();
</script>

<template>
  <div
    class="flex flex-row justify-end h-screen dark:bg-dark dark:text-white transition duration-300'"
  >
    <!-- Sidebar -->
    <div
      :class="useStoreMenu.isLoadMenu ? 'w-64 max-lg:left-0' : 'w-16 max-lg:-left-full'"
      class="fixed top-0 left-0 h-full max-lg:w-full max-lg:bg-black max-lg:bg-opacity-15 bg-white shadow-r-1 duration-700 ease-in-out transition-all z-50"
    >
      <div class="max-lg:w-64 w-full bg-white relative">
        <!-- Button Close -->
        <button
          v-on:click="useStoreMenu.toggleMenu()"
          class="p-1 bg-red-500 -right-4 max-lg:flex hidden top-[1.5%] active:scale-110 ease-in-out duration-150 text-white rounded-full absolute"
        >
          <div class="size-7">
            <component :is="closeIcon" class="size-7"></component>
          </div>
        </button>
        <!-- End Button Close -->

        <!--  -->
        <SidebarView />
        <!--  -->
      </div>
    </div>
    <!-- End Sidebar -->

    <!-- Main Content -->
    <!-- w-[calc(100%-16rem)] -->
    <div
      :class="useStoreMenu.isLoadMenu ? 'ml-64 ' : 'ml-16'"
      class="flex flex-col w-full duration-700 max-lg:ml-0 ease-in-out transition-all"
    >
      <!-- Navbar -->
      <!-- fixed top-0 left-64 right-2 -->
      <nav
        class="w-full flex flex-row justify-between items-center bg-white shadow-sm z-10 py-2 px-3"
      >
        <NavbarView />
      </nav>

      <!-- Scrollable Content -->
      <!-- -1rem -->
      <div class="p-3 w-full h-[calc(100vh-1rem)] overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>
