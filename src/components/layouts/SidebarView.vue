<script setup>
import MenuSlot from '../slot/MenuSlot.vue';
import dashboardIcon from '../icons/dashboardIcon.vue';
import settingIcon from '../icons/settingIcon.vue';
import infoIcon from '../icons/infoIcon.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col overflow-y-auto ">
    
    <!-- Block Header -->
    <div class="bg-blue-700 border-b h-14 flex flex-row justify-start items-center px-3 py-2 overflow-x-hidden">
      <div class="flex flex-row justify-start items-center gap-4 text-xl text-white ">
        <div class="size-9">
          <img
          src="../../assets/images/logo.png"
          class="w-9 h-9 rounded-full border shadow-md ring-1 ring-pink-600 bg-white"
          alt="Logo"
        />
        </div>
        <!-- title -->
        <p>Admin</p>
      </div>
    </div>
    <!-- End Block Header -->

    <!-- Block Menu app -->
    <h1 class="px-4 py-2 text-base">Menu</h1>

    <!-- Block Menu -->
    <div class="px-2 flex flex-col gap-2 flex-grow">
      <MenuSlot :icon="dashboardIcon" :title="'Dashboard'" :path="'home'" />
      <MenuSlot :icon="settingIcon" :title="'Setting'" :path="'setting'" />
      <MenuSlot :icon="infoIcon" :title="'About'" :path="'about'" />
    </div>
    <!-- End Block Menu -->

    <!-- Footer -->
    <div class="py-4 text-center border-t">
      <p class="line-clamp-1">Footer Content Here</p>
    </div>
    <!-- End Footer -->
  </div>
</template>
