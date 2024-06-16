<template>
  <div>
    <Card class="introduction">
      <template #title>Software Engineer</template>
      <template #content>
        <div class="introduction-content">
          <p>
            Hellow, developers. I'm Preethi, currently working as a software engineer in Adinsys Technologies.<br>
              As of the current stack, i'm working with Vue.js, Nuxt 3, Primevue and Fast API
          </p>
          <img src="../assets/profilepicture.jpg" alt="profile picture">
        </div>
      </template>
    </Card>
    <Divider />

    <Card class="m-5 work">
      <template #title>Work Experience</template>
      <template #content>
        <WorkExperience></WorkExperience>
      </template>
    </Card>

    <Divider />


    <Card class="contact-section">
      <template #title>Contact</template>
      <template #content>
        <ContactDetails></ContactDetails>
      </template>
    </Card>

    <Divider />


  </div>
 
</template>
<script setup>
import Card from 'primevue/card';  
import WorkExperience from './WorkExperience.vue';
import ContactDetails from './ContactDetails.vue';
import Divider from 'primevue/divider';
</script>
<style scoped>
.introduction{
  background: white  ;
}

.introduction-content{
  display: flex;
  justify-content: space-between;

  img{
    width: 300px;
    height: 400px;
    border-radius: 4px;
  }
}

.work{
  background: lightgrey
}

.contact-section{
  background: rgb(202, 198, 198);
}
</style>