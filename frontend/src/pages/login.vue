<script setup lang="ts">
import axios from '@axios'
import { VForm } from 'vuetify/components'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import authloginIlustration from '@images/pages/fundo01 1.svg'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { emailValidator, requiredValidator } from '@validators'

const route = useRoute()
const router = useRouter()
const ability = useAppAbility()

const refVForm = ref<VForm>()
const loading = ref(false)

const form = reactive({
  usuario: ref(''),
  senha: ref(''),
})

const permissions = user => {
  // if (user.is_superuser)
  return [{ action: 'manage', subject: 'all' }]
}

const login = () => {
  loading.value = true
  axios.post('auth/', { email: form.usuario, senha: form.senha })
    .then(r => {
      loading.value = false
      const user  = r.data[0]

      const userAbilities = permissions(r.data[0])

      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)
      localStorage.setItem('userData', JSON.stringify(user))

      // Redirect to `to` query if exist or redirect to index route
      router.replace(route.query.to ? String(route.query.to) : '/')
    })
    .catch(e => {
      loading.value = false
      console.error(e.response.data)
    })
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
}

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
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- Usuário-->
              <VCol cols="12">
                <VTextField
                  v-model="form.usuario"
                  prepend-inner-icon="tabler-user"
                  label="Usuário"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.senha"
                  prepend-inner-icon="tabler-lock"
                  label="Senha"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  :rules="[requiredValidator]"
                />
              </VCol>
                <VCol cols="12">
                    <VBtn
                        block
                        type="submit"
                        :loading="loading"
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
    action: read
    subject: Auth
    redirectIfLoggedIn: true
  </route>
