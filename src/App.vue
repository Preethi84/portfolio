<template> 
    <HeaderLayout></HeaderLayout>
    <section class="main-section">
      <router-view></router-view>
    </section>

</template>

<script setup>
import HeaderLayout from "@/layouts/HeaderLayout";

</script>

<style>

.main-section{
  padding-top: 10px;
}
</style>
