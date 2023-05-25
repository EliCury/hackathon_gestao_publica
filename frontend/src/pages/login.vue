<script setup lang="ts">
import authloginIlustration from '@images/pages/fundo01 1.svg'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const form = ref({
  matricula: '',
  password: '',
  remember: false,
})

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center">
      <VImg
        :src="authloginIlustration"
        class="auth-v1-top-shape d-none d-sm-block w-100 h-100"
      />
    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->

      <!-- 👉 Auth Card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
            </div>
          </template>

          <VCardTitle class="font-weight-bold text-h5 py-1">
            {{ themeConfig.app.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-1">
          <h5 class="text-h5 font-weight-semibold mb-1 text-center">
            Welcome to {{ themeConfig.app.title }}! 👋🏻
          </h5>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- Matricula-->
              <VCol cols="12">
                <VTextField
                  v-model="form.matricula"
                  prepend-inner-icon="tabler-user"
                  label="Matrícula"
                  type="email"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  prepend-inner-icon="tabler-lock"
                  label="Senha"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>
                <VCol cols="12">
                    <VBtn
                        block
                        type="submit"
                    >
                        Entrar
                    </VBtn>
                </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

.bg {
  background: #00102C;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
