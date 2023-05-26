<script setup lang="ts">
const data = ref('')
const emissor = ref('')
</script>

<template>
  <section>
    <VCard class="pa-4">
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
              <VTextarea v-model="emissor" label="Observações em gerais:" bg-color="#C1CADA" height="73px"
                class="mb-5 mt-5" />


              <VTextarea label="Obervações:">

              </VTextarea>


              <VCol cols="12 mt-5" class="background mb-5">

                <span>
                  <VIcon class="mr-2" size="22" icon="tabler-info-circle"></VIcon>
                  As observações e marcações não ficarão visíveis no documento ofícial.
                </span>
              </VCol>

              <VTextField v-model="emissor" label="Defina um prazo" bg-color="#C1CADA" />

              <VBtn color="primary" class="mt-5 mb-5" block>
                <VIcon class="mr-2" size="22" icon="tabler-download"></VIcon> Baixar Anexo
              </VBtn>

              <VCol>
                <VRow>
                  <VTextarea v-model="emissor" placeholder="Recebido em: 15/05/2023 ás 14:00 por:" height="73px"
                    class="mb-5 mt-5" />
                </VRow>
              </VCol>

              <VRow>
                <VCol cols="8">
                  <VBtn color="primary" block>Visualizar resposta</VBtn>
                </VCol>
                <VCol cols="4">
                  <VBtn color="primary" block>Voltar</VBtn>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </VCard>
  </section>
</template>

<style>
.background {
  background-color: #C1CADA;
  border-radius: 6px;
  font-style: italic;
}
</style>
