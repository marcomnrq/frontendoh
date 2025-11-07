<script setup lang="ts">
import { ref } from 'vue'
import { evaluarTarjeta, IEvaluacionResponse } from '../client/apiclient';

const edad = ref<number>(0);
const ingresos = ref<number>(0);
const resultado = ref<IEvaluacionResponse | null>(null);

async function onSubmit() {
  try {
    resultado.value = await evaluarTarjeta(edad.value, ingresos.value);
  } catch(e) {
    console.error(e);
    window.alert("Ocurrió un error.")
  }
}
</script>
<template>
  <form @submit.prevent="onSubmit">
    <label>Edad: </label>
    <input type="number" v-model="edad"/>

    <label>Ingresos: </label>
    <input type="number" v-model="ingresos"/>

    <button type="submit">
      Conocer mi oferta
    </button>
  </form>
  <div v-if="resultado">
    <h3>{{ resultado.status }}</h3>
    <h4>{{ resultado.mensaje }}</h4>
    <div v-if="resultado.data.aprobado">
      <p><strong>Línea aprobada: {{ resultado.data.linea }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
</style>
