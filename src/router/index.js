import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorkExperience from '@/components/WorkExperience.vue';
import ContactDetails from '@/components/ContactDetails.vue'; 

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/work',
    name: 'WorkExperience',
    component: WorkExperience
  },

  {
    path: '/contact',
    name: 'ContactDetails',
    component: ContactDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



export default router
