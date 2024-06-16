
<template>
  <div class="card">
    <Timeline :value="events" align="alternate" class="w-full md:w-80">
      <template #content="slotProps">
          {{ slotProps.item.status }}
      </template>
  </Timeline>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Timeline from "primevue/timeline";
const events = ref([
  { status: 'Software Engineer', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
  { status: 'Software Engineer', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  { status: 'Intern', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
]);

</script>
