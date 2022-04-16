!<template>
  <v-flex>
        <Circuit
          v-for="circuit in circuits" 
          :key="circuit.id" 
          :circuit="circuit"
          class="mb-4"
        />
    </v-flex>
</template>

<script>
import Circuit from "./Circuit.vue"

export default {
  components:{Circuit},
  data(){
    return {
      circuits:[
        {id:1, name:"TBJ: Polarização Fixa"},
        {id:2, name:"TBJ: Polarização DTB"},
      ],
    }
  }
}
</script>

<style>

</style>