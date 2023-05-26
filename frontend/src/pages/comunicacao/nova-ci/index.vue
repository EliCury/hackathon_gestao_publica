<script setup lang="ts">
const data = ref('')
const emissor = ref('')
</script>

<template>
  <section>
    <VCard title="Comunicação Interna">
        <VRow>
					<VCol cols="6">
						<VTextField
							v-model="data"
							label="Data"
						/>
					</VCol>
					<VCol cols="6">
					</VCol>
        </VRow>
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
    </VCard>
  </section>
</template>

<style>
</style>