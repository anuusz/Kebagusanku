<template>
  <NavbarComponent />
  <router-view />
  <!-- <FooterComponent /> -->
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>