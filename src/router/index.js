import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HomePage from '@/views/HomePage.vue';
import LayananPublik from '../views/LayananPublik.vue';
import BeritaPage from '@/views/BeritaPage.vue';
import ProfilKelurahan from '@/views/ProfilKelurahan.vue';
import KontakPage from '@/views/KontakPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  {
    path: '/layanan-publik',
    name: 'layanan-publik',
    component: LayananPublik
  },
  {
    path: '/berita',
    name: 'berita',
    component: BeritaPage
  },
  {
    path: '/profil-kelurahan',
    name: 'profil-kelurahan',
    component: ProfilKelurahan
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: KontakPage
  }
]
})

export default router
