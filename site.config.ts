import { siteConfig } from './lib/site-config'

export default siteConfig({
  // ID de 32 carateres limpo (sem hífens)
  rootNotionPageId: '3d98d0ec315c80d5b1aaf74bd5f84680',

  // Informação básica do site
  name: 'Diogo Brito Advisory',
  domain: 'dbrito-engineering.pt',
  author: 'Diogo Brito',
  description: 'Technical Due Diligence, Project Management & Real Estate Advisory Services in Algarve, Portugal.',

  // Redes Sociais (definidas como undefined em vez de null)
  twitter: undefined,
  github: undefined,
  linkedin: undefined,

  // Definições de Imagens e Layout
  defaultPageIcon: undefined,
  defaultPageBanner: undefined,
  pageUrlOverrides: undefined,

  // Funcionalidades
  isPreviewImageSupportEnabled: false,
  isSearchEnabled: false
})
