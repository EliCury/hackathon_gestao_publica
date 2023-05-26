<script setup lang="ts">
const emissor = ref('')
</script>

<template>
  <section>
    <VRow>
      <VCol cols="6">
        <VTextField
          v-model="emissor"
          label="Emissor"
        />
      </VCol>
      <VCol cols="6">
      </VCol>
    </VRow>
  </section>
</template>

<style>
</style>