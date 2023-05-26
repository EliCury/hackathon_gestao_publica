<script setup lang="ts">
import ConfirmaEnvio from '@/components/ConfirmaEnvio.vue'
import MensagemSucesso from '@/components/MensagemSucesso.vue'

const formcomunicado = reactive({
  data: ref(''),
  emissor: ref(''),
  receptor: ref(''),
  assunto: ref(''),
  conteudo: ref(''),
  emitido_por: ref(''),
  assinar: ref(''),
  enviar_assinatura: ref(''),
  adicionar_tags: ref(''),
  anexar_arquivos: ref(''),
  observacao: ref(''),
  estipular_prazo: ref(''),
  publico: ref(''),
  privado: ref(''),
})

const enviar = ref(false)
const assinar = ref(false)
const mensagemSucesso = ref(false)

const salvarCi = () => {
  enviar.value = false
  mensagemSucesso.value = true
  console.log('CI Salva')
}


</script>

<template>
  <section>
    <VCard title="Comunicação Interna">
      <VCardText class="pa-5">
        <VRow>
          <VCol cols="6" class="">
            <VTextField class="mb-4" v-model="formcomunicado.data" label="Data" type="date"/>
            <VTextField class="mb-4" v-model="formcomunicado.emissor" label="Emissor" />
            <VTextField class="mb-4" v-model="formcomunicado.receptor" label="Receptor" />
            <VTextField class="mb-4" v-model="formcomunicado.assunto" label="Assunto" />
            <VTextarea class="mb-4" v-model="formcomunicado.conteudo" label="Conteúdo" />
          </VCol>
          <VCol cols="6">
            <VTextarea class="mb-4" v-model="formcomunicado.observacao" label="Observação" />
            <span class="info-span mb-4">
              <VIcon class="mr-2" size="22" icon="tabler-info-circle"></VIcon>
              As observações não ficarão visiveis no documento oficial.
            </span>
            <VTextField class="mb-4" v-model="formcomunicado.estipular_prazo" label="Estipular Prazo" />
            <VRow>
              <VCol cols="6">
                <VCheckbox label="Publico"></VCheckbox>
              </VCol>
              <VCol cols="6">
                <VCheckbox label="Privado"></VCheckbox>
              </VCol>
            </VRow>
            <VTextField class="my-5" label="Anexar Arquivos" />
            <VTextField class="my-4" label="Adicionar Tags" />
            <span class="info-span mb-4">
              <VIcon class="mr-2" size="22" icon="tabler-info-circle"></VIcon>
              O que são tags?<br>

              <br><p>São palavras-chaves, ou etiquetas, que auxiliarão você a encontrar esta documentação quando necessário.</p>

              Além disso elas podem te ajudar a destinar corretamente suas documentações
            </span>
            <VRow>
              <VCol cols="6">
                <VBtn block @click="enviar=true, assinar = true">Assinar</VBtn>
              </VCol>
              <VCol cols="6">
                <VBtn block @click="enviar=true, assinar = false">Enviar Para Assinatura</VBtn>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VDialog  width="600" persistent v-model="enviar">
      <ConfirmaEnvio
        :assinar="assinar"
        @cancelar="enviar=false"
        @salvar="salvarCi"
      />
    </VDialog>
    <VDialog  width="600" v-model="mensagemSucesso">
      <MensagemSucesso/>
    </VDialog>
  </section>
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