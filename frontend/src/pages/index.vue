<script setup lang="ts">
import ApexChartAreaChart from '@/views/charts/apex-chart/ApexChartAreaChart.vue'
import ApexChartExpenseRatio from '@/views/charts/apex-chart/ApexChartExpenseRatio.vue'

</script>

<template>
  <section>
    <VRow>
      <VCol cols="6">
        <VCard class="w-100 h-100">
          <ApexChartExpenseRatio />
        </VCard>
      </VCol>
      <VCol cols="6">
        <VCard>
          <ApexChartAreaChart />
        </VCard>
      </VCol>
    </VRow>
    <VRow class="pt-10">
      <VCol cols="12" class="text-center">
        <VBtn>
          Exportar
        </VBtn>
      </VCol>
    </VRow>
  </section>
</template>