<template>
  <div>
    <VCard title="Confirmação e envio">
      <VCardText>
        <VRow>
            <VCol cols="12">
                <VCheckbox label="Sim.">
                </VCheckbox>
            </VCol>

            <VCol cols="12">
                <span class="info-span">
                    <VIcon class="mr-2" size="22" icon="tabler-info-circle"></VIcon>
                    após assinado o documento não pode mais ser alterado ou excluido.
                </span>
            </VCol>

            <VCol cols="12">
                <span>Enviar Por:</span>
            </VCol>

        </VRow>
          <VRow>
              <VCol cols="12">
                  <VTextField label="Nome">

                  </VTextField>
              </VCol>

              <VCol cols="12">
                  <VTextField label="Função">

                  </VTextField>
              </VCol>

              <VCol cols="12">
                  <VTextField label="Competencia / Assunto">

                  </VTextField>
              </VCol>
          </VRow>

          <VRow>
              <VCol cols="6">
                  <VBtn color="primary" block >Cancelar</VBtn>
              </VCol>
              <VCol cols="6">
                  <VBtn color="primary" block>Enviar</VBtn>
              </VCol>
          </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
<script setup lang="ts">
</script>

<style>
.info-span {
    display: inline-block;
    align-items: center;
    font-style: italic;
    background-color: #C1CADA;
    padding: 7px;
    border-radius: 6px ;
}
</style>
