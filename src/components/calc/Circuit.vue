<template>
  <v-flex>
    <v-card>
      <v-card-title
        style="font-size: 1.5em"
        class="justify-center text-wrap"
        v-text="circuitInfo.name"
      />
      <v-img :src="circuitImg" height="300" contain></v-img>
    </v-card>
    <v-main class="mt-2 mx-1">
      <v-row class="my-0" no-gutters  v-if="this.circuitInfo.id > 1">
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="R1"
            suffix="kΩ"
            v-model="R1"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="R2"
            suffix="kΩ"
            v-model="R2"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Rb"
            suffix="kΩ"
            v-model="RB"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row  class="my-0" no-gutters>
        <v-col v-if="this.circuitInfo.id == 1">
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Rb"
            suffix="kΩ"
            v-model="RB"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Rc"
            suffix="kΩ"
            v-model="RC"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col v-if="this.circuitInfo.id > 1">
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Re"
            suffix="kΩ"
            v-model="RE"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Vcc"
            suffix="V"
            v-model="Vcc"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="β"
            v-model="Beta"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="ro"
            suffix="kΩ"
            v-model="Tro"
            type="number"
          ></v-text-field>  
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="re"
            suffix="Ω"
            v-model="Tre"
            type="number"
          ></v-text-field> 
        </v-col>
      </v-row>
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Ib"
            suffix="μA"
            v-model="IB"
            type="number"
            readonly
          ></v-text-field>  
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Ic"
            suffix="mA"
            v-model="IC"
            type="number"
            readonly
          ></v-text-field>  
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Ie"
            suffix="mA"
            v-model="IE"
            type="number"
            readonly
          ></v-text-field>  
        </v-col>
      </v-row>
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Zi"
            suffix="kΩ"
            v-model="Zin"
            type="number"
            readonly
          ></v-text-field>  
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Zo"
            suffix="kΩ"
            v-model="Zout"
            type="number"
            readonly
          ></v-text-field>  
        </v-col>
      </v-row>
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Av"
            v-model="Av"
            type="number"
            readonly
          ></v-text-field> 
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            rounded
            filled
            label="Ai"
            v-model="Ai"
            type="number"
            readonly
          ></v-text-field> 
        </v-col>
      </v-row>
    </v-main>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      circuitInfo: this.$route.params.circuit,
      circuitImg: require(`../../transistors/${this.$route.params.circuit.id}.png`),
      vCC: 0,
      tRe: 0,
      tRo: 0,
      rB: 0,
      rC: 0,
      rE: 0,
      r1: 0,
      r2: 0,
      beta: 0,
      iB: 0,
      iC: 0,
      iE: 0,
      zIn: 0,
      zOut: 0,
      aV: 0,
      aI: 0,
    };
  },
  computed:{
    Vcc:{
      get(){return Math.round(this.vCC*100)/100},
      set(val){this.vCC = val}
    },
    Tre:{
      get(){return Math.round(this.tRe*100000)/100},
      set(val){this.tRe = val},
    },
    Tro:{
      get(){return Math.round(this.tRo*100)/100},
      set(val){this.tRo = val},
    },
    RB:{
      get(){return Math.round(this.rB*100)/100},
      set(val){this.rB = val},
    },
    RC:{
      get(){return Math.round(this.rC*100)/100},
      set(val){this.rC = val},
    },
    RE:{
      get(){return Math.round(this.rC*100)/100},
      set(val){this.rC = val},
    },
    R1:{
      get(){return Math.round(this.r1*100)/100},
      set(val){this.r1 = val},
    },
    R2:{
      get(){return Math.round(this.r2*100)/100},
      set(val){this.r2 = val},
    },
    Beta:{
      get(){return this.beta},
      set(val){this.beta = val} 
    },
    IB:{
      get(){return Math.round(this.iB*100000)/100},
      set(val){this.iB = val} 
    },
    IC:{
      get(){return Math.round(this.iC*100)/100},
      set(val){this.iC = val} 
    },
    IE:{
      get(){return Math.round(this.iE*100)/100},
      set(val){this.iE = val} 
    },
    Zin:{
      get(){return Math.round(this.zIn*100)/100},
      set(val){this.zIn = val} 
    },
    Zout:{
      get(){return Math.round(this.zOut*100)/100},
      set(val){this.zOut = val},
    },
    Av: {
      get(){return Math.round(this.aV*100)/100},
      set(val){this.aV= val},
    },
    Ai: {
      get(){return Math.round(this.aI*100)/100},
      set(val){this.aI = val},
    },
  },
  watch:{
    vCC(){
      this.iB = this.analyse((this.vCC-0.7)/this.rB)   
    },
    rB(){
      this.iB = this.analyse((this.vCC-0.7)/this.rB) 
    },
    rC(){
      this.zOut = this.analyse(this.paralel(this.tRo,this.rC))
      this.aI =  -this.analyse(this.aV*this.zIn/this.rC)
    },
    r1(){
      this.rB = this.analyse(this.paralel(this.r1,this.r2))
    },
    r2(){
      this.rB = this.analyse(this.paralel(this.r1,this.r2))
    },
    beta(){ 
      this.iC = this.analyse((this.iB*this.beta))
      this.iE = this.analyse((this.iB*(Number(this.beta)+1)))
    },
    iB(){
      this.iC = this.analyse((this.iB*this.beta))
      this.iE = this.analyse((this.iB*(Number(this.beta)+1)))
    },
    iE(){
      this.tRe = this.analyse((0.026/this.iE))
    },
    tRe(){
      this.zIn = this.analyse((this.paralel(this.tRe*this.beta,this.rB*1000)))
      this.aV =  -this.analyse(this.zOut/this.tRe)
    },
    tRo(){
      this.zOut = this.analyse(this.paralel(this.tRo,this.rC))
    },
    zIn(){
      this.aI =  -this.analyse(this.aV*this.zIn/this.rC)
    },
    zOut(){
      this.aV =  -this.analyse(this.zOut/this.tRe)
    },
    aV(){
      this.aI =  -this.analyse(this.aV*this.zIn/this.rC)
    },
  },
  methods: {
    analyse(val) {
      return isNaN(val) || !isFinite(val) ? 0 : val;
    },
    paralel(r1, r2) {
      return (Number(r1) * Number(r2)) / (Number(r1) + Number(r2));
    },
  },
}
</script>

<style>
.v-card-title {
  align-content: center;
}
.inputNumber input[type="number"] {
  -moz-appearance: textfield;
}
.inputNumber input::-webkit-outer-spin-button,
.inputNumber input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>