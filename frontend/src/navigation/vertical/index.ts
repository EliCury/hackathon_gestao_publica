import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Iniciar processo',
    icon: { icon: 'tabler-folder-plus' },
  },
  {
    title: 'Nova CI',
    to: { name: 'comunicacao-nova-ci' },
    icon: { icon: 'tabler-message-2-plus' },
  },
  {
    title: 'Novo Ofício',
    icon: { icon: 'tabler-file-plus' },
  },
  {
    title: 'Ofício',
    icon: { icon: 'tabler-file-invoice' },
  },
  {
    title: 'Processo',
    icon: { icon: 'tabler-folder' },
  },
  {
    title: 'Comunicação Geral',
    icon: { icon: 'tabler-speakerphone' },
  },
] as VerticalNavItems
