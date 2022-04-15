<template>
    <v-app-bar
      class="flex-grow-0"
      dense
      dark
      color="yellow darken-2"
      elevation="4"
    >
      <v-btn icon @click="back"><v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-spacer/>
    </v-app-bar>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.push({name: 'Main Page'})
    },
  },
}
</script>

<style>

</style>