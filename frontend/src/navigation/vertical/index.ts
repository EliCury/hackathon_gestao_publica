import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Iniciar processo',
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Nova CI',
    to: { name: 'comunicacao-nova-ci' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Novo Ofício',
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Ofício',
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Processo',
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Comunicação Geral',
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
