<script setup lang="ts">
const props = defineProps({
  assinar: { type: Boolean, required: false, default: false },
})

const emit = defineEmits(['cancelar, salvar'])

</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="pa-4 bg-primary text-center">{{props.assinar? 'Confirmação e envio' : 'Enviar para Assinatura'}}</VCardTitle>
      <VCardText class="py-4">
        <VRow v-if="props.assinar">
          <VCol cols="12">
            <span>Tem certeza que deseja assinar esse documento?</span>
            <VCheckbox label="Sim">
            </VCheckbox>
          </VCol>

          <VCol cols="12">
            <span class="info-span">
              <VIcon class="mr-2" size="22" icon="tabler-info-circle"></VIcon>
              Após assinado o documento não pode mais ser alterado ou excluído.
            </span>
          </VCol>

          
        </VRow>
        <VRow class="pt-4">
          <VCol cols="12">
            <span>Enviar Por:</span>
          </VCol>
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
            <VBtn color="primary" block @click="$emit('cancelar')">Cancelar</VBtn>
          </VCol>
          <VCol cols="6">
            <VBtn color="primary" block @click="$emit('salvar')">Enviar</VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style>
.info-span {
  display: inline-block;
  align-items: center;
  font-style: italic;
  background-color: #C1CADA;
  padding: 7px;
  border-radius: 6px;
}
</style>
