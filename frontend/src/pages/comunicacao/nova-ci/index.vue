<script setup lang="ts">

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

});


</script>

<template>
	<section> 
		<VCard  title="Comunicação Interna">
			<VCardText class ="pa-5">
			<VRow >
				<VCol cols="6" class="">
					<VTextField class="mb-4" v-model="formcomunicado.data" label="Data" />
					<VTextField class="mb-4" v-model="formcomunicado.emissor" label="Emissor" />
					<VTextField class="mb-4" v-model="formcomunicado.receptor" label="Receptor" />
					<VTextField class="mb-4" v-model="formcomunicado.assunto" label="Assunto" />
					<VTextarea  class="mb-4" v-model="formcomunicado.conteudo" label="Conteúdo" />
					<VTextField class="mb-4" v-model="formcomunicado.emitido_por" label="Emetido Por:" />					
				</VCol>
				<VCol cols="6">
					<VTextarea  class="mb-4" v-model="formcomunicado.observacao" label="Observação" />
					<span class="info-span">
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
				</VCol>
			</VRow>
		</VCardText>
		</VCard>
	</section>
</template>

<style></style>