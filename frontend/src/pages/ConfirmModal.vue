<script setup lang="ts">
import airPlane from '@images/svg/air-plane.svg'
</script>

<template>
<div>
    <VCard >
        <VCardTitle class="bg-primary text-center ">
                Confirmar Envio
        </VCardTitle>

        <VRow align="center" justify="start" >
            <VCol cols="6">
                <VImg :src="airPlane" width="400"></VImg>
            </VCol>

            <VCol cols="6" >
                <span>Sua C.I. foi enviada com sucesso!</span>
            </VCol>
        </VRow>
    </VCard>
</div>
</template>


<style>


</style>
