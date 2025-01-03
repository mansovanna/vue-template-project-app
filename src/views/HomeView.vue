<script setup>
import { RouterLink } from "vue-router";
import CardDepartmentSlot from "@/components/slot/CardDepartmentSlot.vue";
</script>

<template>
  <div class="w-full">
    <!-- Block Grid -->
    <div
      class="grid grid-cols-5 gap-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 max-2xl:grid-cols-5"
    >
      <RouterLink
        :to="{ name: 'department', params: { id: n } }"
        v-for="n in 10"
        :key="n"
        class="w-full"
      >
        <CardDepartmentSlot :index="n" />
      </RouterLink>
    </div>
    <!-- End Block Grid -->
  </div>
</template>
