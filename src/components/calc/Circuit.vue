<template>
  <v-flex>
    <v-card>
      <v-card-title
        style="font-size: 2em"
        class="justify-center text-wrap"
        v-text="circuitInfo.name"
      />
      <v-img :src="circuitImg" height="300" contain></v-img>
    </v-card>
    <v-main class="mt-2 mx-1">
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            dense
            rounded
            filled
            label="Vi"
            suffix="V"
            v-model="voltageIn"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            dense
            rounded
            filled
            label="Vo"
            suffix="V"
            v-model="voltageOut"
            type="number"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            dense
            rounded
            filled
            label="Av"
            v-model="voltageGain"
            type="number"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="my-0" no-gutters>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            dense
            rounded
            filled
            label="Ii"
            suffix="mA"
            v-model="currentIn"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            dense
            rounded
            filled
            label="Io"
            suffix="mA"
            v-model="currentOut"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            class="ml-1 inputNumber"
            dense
            rounded
            filled
            label="Ai"
            v-model="currentGain"
            type="number"
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
      iIn: 0,
      iOut: 0,
      vIn: 0,
      vOut: 0,
    };
  },
  methods: {
    analyse(val) {
      return isNaN(val) || !isFinite(val) ? 0 : val;
    },
    paralel(r1, r2) {
      return (r1 * r2) / (r1 + r2);
    },
  },
  computed: {
    currentIn: {
      get() {
        return Math.round(this.iIn * 100) / 100
      },
      set(val) {
        this.iIn = val
      },
    },
    currentOut: {
      get() {
        return Math.round(this.iOut * 100) / 100
      },
      set(val) {
        this.iOut = val
      },
    },
    currentGain: {
      get() {
        return Math.round(this.analyse(this.iOut / this.iIn) * 100) / 100;
      },
      set() {},
    },
     voltageIn: {
      get() {
        return Math.round(this.vIn * 100) / 100
      },
      set(val) {
        this.vIn = val
      },
    },
    voltageOut: {
      get() {
        return Math.round(this.vOut * 100) / 100
      },
      set(val) {
        this.vOut = val
      },
    },
    voltageGain: {
      get() {
        return Math.round(this.analyse(this.vOut / this.vIn) * 100) / 100;
      },
      set() {},
    },
  },
};
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