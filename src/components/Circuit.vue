<template>
  <v-card 
    height="400"
    @click="analysis"
  >
      <v-img
        height="400"
        :src="circuitImg"
        contain
      >
        <v-card-title><strong>{{circuit.name}}</strong></v-card-title>    
      </v-img>
  </v-card>
</template>

<script>
export default {
    
    props:['circuit'],
    data(){
      return{
        circuitImg: require(`../transistors/${this.circuit.id}.png`)
      }
    },
    methods:{
      analysis(){
        this.$emit("changePage")
        this.$router.push({name:'Analysis', params:{circuit: this.circuit}})
      },
    },
}
</script>

<style>

</style>