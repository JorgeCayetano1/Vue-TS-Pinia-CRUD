<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';

const counter = useCounterSetupStore();

</script>

<template>
    <h1>El valor es: {{ counter.count }}</h1>
    <h3>Ultimo Cambio: {{ counter.lastChanged }}</h3>
</template>

<style scoped>

</style>