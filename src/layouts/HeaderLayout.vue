<template>
  <div class="card header">
    <Menubar :model="items" class="header-nav">
        <template #item="{ item, props }">

        <RouterLink v-slot="{href, navigate}" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{item.label}}</span>
            </a>
        </RouterLink>
        </template>
    </Menubar>

   
</div>
</template>
<style scoped>
.header-nav{
    background: lightgrey;
}

</style>

<script setup>
import Menubar from 'primevue/menubar';

import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Work',
        icon: 'pi pi-star',
        route:'/work'
    },
    {
        label: 'Contact',
        icon: 'pi pi-phone',
        route:'/work'
    },
    {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        route:'/work'
    }
]);

</script>
