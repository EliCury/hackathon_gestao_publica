<script setup lang="ts">
const data = ref('')
const emissor = ref('')
</script>

<template>
  <section>
    <VRow>
      <VCol cols="8">
        <VRow>
          <VCol cols="6">
            <VTextField v-model="data" label="Data" class="mt-5" />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="4">
        <VRow cols="4">
          <VCol>
            <VTextarea v-model="emissor" label="Observação do emissor:" bg-color="#C1CADA" height="73px"
              class="mb-5 mt-5" />

            <VTextField v-model="emissor" label="Defina um prazo" bg-color="#C1CADA" />

            <VBtn color="primary" class="mt-5 mb-5" block>
              <VIcon class="mr-2" size="22" icon="tabler-download"></VIcon> Baixar Anexo
            </VBtn>

            <VTextarea label="Obervações:">

            </VTextarea>

            <VCol cols="12" class="px-0">
              <span>Adicionar marcadores</span>
            </VCol>

            <VRow class="mb-1">
              <VCol cols="3">
                <VBtn color="#D97E7E" class="mr-2 mb-2">
                </VBtn>
              </VCol>

              <VCol cols="3">
                <VBtn color="#DDCA20" class="mr-2 mb-2">
                </VBtn>
              </VCol>

              <VCol cols="3">
                <VBtn color="#8ADD20" class="mr-2 mb-2">
                </VBtn>
              </VCol>

              <VCol cols="3">
                <VBtn color="#20B0DD" class="mr-2 mb-2">
                </VBtn>
              </VCol>

            </VRow>

            <VCol cols="12" class="background mb-5">

              <span>
                <VIcon class="mr-2" size="22" icon="tabler-info-circle"></VIcon>
                As observações e marcações não ficarão visíveis no documento oficial.
              </span>
            </VCol>

            <VRow>
              <VCol cols="8">
                <VBtn color="primary" block>Devolver p/ alterações</VBtn>
              </VCol>
              <VCol cols="4">
                <VBtn color="primary" block>Assinar</VBtn>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </section>
</template>

<style>
.background {
  background-color: #C1CADA;
  border-radius: 6px;
  font-style: italic;
}
</style>
