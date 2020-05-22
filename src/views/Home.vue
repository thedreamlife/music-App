<template>
  <div class="home">
    <m-header></m-header>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from '@/components/Header'
import NavBar from '@/components/navbar/NavBar.vue'
export default {
  name: 'Home',
 
  components: {
    MHeader,
    NavBar
  },
}
</script>
