<template>
  <v-app
  class="body">
    <Header
      class="mb-4"
    />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components:{Header},
}
</script>

<style>

</style>
