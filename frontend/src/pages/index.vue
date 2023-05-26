<script setup lang="ts">
import axios from '@axios'
import Visualizar from '@/pages/comunicacao/recebido/index.vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useEmailStore } from '@/views/apps/email/useEmailStore'
import { formatDate } from '@core/utils/formatters'

const pesquisa = ref('')
const filtros = ref('')

const emailAberto = ref(false)

// Composables
const route = useRoute()
const store = useEmailStore()
const emailsLista = ref([])

// Ref
const q = ref('')

// ------------------------------------------------
// Email Selection
// ------------------------------------------------
const selectedEmails = ref<Email['id'][]>([])

// Email View
const openedEmail = ref<Email | null>(null)

const emailViewMeta = computed(() => {
  const returnValue = {
    hasNextEmail: false,
    hasPreviousEmail: false,
  }

  if (openedEmail.value) {
    const openedEmailIndex = store.emails.findIndex(
      e => e.id === (openedEmail.value as Email).id,
    )

    returnValue.hasNextEmail = !!store.emails[openedEmailIndex + 1]
    returnValue.hasPreviousEmail = !!store.emails[openedEmailIndex - 1]
  }

  return returnValue
})

// Fetch emails
const fetchEmails = async () => {
  selectedEmails.value = []
  
}

axios.get('comunicacao').then(res => {
  emailsLista.value = res.data
  console.log(res)
}).catch(e => {
  console.log(e)
})

/*
  ℹ️ You can optimize it so it doesn't fetch emails on each action.
    Currently, if you just star the email, two API calls will get fired.
      1. star the email
      2. Fetch all latest emails

    You can limit this to single API call by:
      - making API to star the email
      - modify the state (set that email's isStarred property to true/false) in the store instead of making API for fetching emails

  😊 For simplicity of the code and possible of modification, we kept it simple.
*/

// fetch emails on search & route change
watch([q, () => route.params.filter, () => route.params.label], fetchEmails, {
  immediate: true,
})

// Reset opened email (close email view) when route is changed
watch([() => route.params.filter, () => route.params.label], () => {
  openedEmail.value = null
})

const openEmail = (email: object) => {
  emailAberto.value = true
  axios.get(`comunicacao/${email.id}`).then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e)
  })
}

const resolveLabelColor = (label:any) => {
    if (label === 'aberto')
      return 'success'
    if (label === 'pendente')
      return 'primary'
    if (label === 'enviado')
      return 'warning'
    if (label === 'recebido')
      return 'error'

    return 'secondary'
  }
</script>

<template>
  <sector>
  <div v-if="!emailAberto">
    <VRow>
      <VCol cols="6">
        <VTextField
          v-model="pesquisa"
          prepend-inner-icon="tabler-search"
          variant="solo"
          label="Pesquisar"
        />
      </VCol>
      <VCol cols="6">
        <VTextField
          v-model="filtros"
          prepend-inner-icon="tabler-adjustments-alt"
          variant="solo"
          label="Filtros"
        />
      </VCol>
    </VRow>
    <VLayout class="email-app-layout mt-4 teste">
    <VMain>
      <VCard
        flat
        class="h-100 d-flex flex-column"
      >
        <!-- 👉 Action bar -->
        <div class="py-4 d-flex items-center">
          <VBtn
            color="default"
            size="small"
            class="mx-3"
          >
            Recebidas
          </VBtn>
          <VBtn
            color="default"
            size="small"
            class="mr-3"
          >
            Enviadas
          </VBtn>
          <VBtn
            color="default"
            size="small"
            class="mr-3"
          >
            Aguardando Assinatura
          </VBtn>
        </div>
        <VDivider />

        <!-- 👉 Emails list -->
        <PerfectScrollbar
          tag="ul"
          class="email-list"
        >
          <li
            v-for="email in emailsLista"
            v-show="emailsLista.length"
            :key="email.id"
            class="email-item d-flex align-center py-2 px-5 cursor-pointer"
            @click="openEmail(email)"
          >
              <h6 class="mx-2 text-body-1 font-weight-medium text-high-emphasis">
                {{ email.assunto }}
              </h6>
              -
              <h6 class="mx-2 text-body-1 font-weight-medium text-high-emphasis">
                {{ email.emissor }}
              </h6>

              <VSpacer />
              <div class="email-meta">
              <VBadge
                inline
                :color="resolveLabelColor(email.status)"
                dot
              />
              <small class="text-disabled ms-2">{{
                formatDate(email.data_criacao, { dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Sao_Paulo' })
              }}</small>
            </div>
            </li>
            <li
              v-show="!emailsLista.length"
              class="py-4 px-5 text-center"
            >
              <span class="text-high-emphasis">Nenhum registro encontrado.</span>
            </li>
        </PerfectScrollbar>
      </VCard>
    </VMain>
  </VLayout>
  </div>
  <Visualizar v-else/>
  </sector>
</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss";
@use "@core/scss/base/_mixins.scss";
@use "vuetify/lib/styles/tools/elevation" as elevation;

.teste {
  min-height: 500px;
}
// ℹ️ Remove border. Using variant plain cause UI issue, caret isn't align in center
.email-search {
  .v-field__outline {
    display: none;
  }
}

.email-app-layout {
  border-radius: vuetify.$card-border-radius;

  @include elevation.elevation(vuetify.$card-elevation);

  $sel-email-app-layout: &;

  @at-root {
    .skin--bordered {
      @include mixins.bordered-skin($sel-email-app-layout);
    }
  }
}

.email-list {
  white-space: nowrap;

  .email-item {
    transition: all 0.2s ease-in-out;
    will-change: transform, box-shadow;

    &.email-read {
      background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
    }

    & + .email-item {
      border-block-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    }
  }

  .email-item:hover {
    transform: translateY(-2px);

    @include elevation.elevation(3);

    .email-actions {
      display: block !important;
    }

    // .email-meta {
    //   display: none;
    // }

    + .email-item {
      border-color: transparent;
    }
  }
}

.email-compose-dialog {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 0;
  min-inline-size: 100%;

  @media only screen and (min-width: 800px) {
    min-inline-size: 712px;
  }
}
</style>