import { siteConfig } from './lib/site-config'

export default siteConfig({
  // ID de 32 carateres limpo (sem hífens e sem o URL todo)
  rootNotionPageId: '3d98d0ec315c80d5b1aaf74bd5f84680',

  // Informação básica do site
  name: 'Diogo Brito Advisory',
  domain: 'dbrito-engineering.pt',
  author: 'Diogo Brito',
  description: 'Technical Due Diligence, Project Management & Real Estate Advisory Services in Algarve, Portugal.',

  // Redes Sociais (deixe null se não usar)
  twitter: null,
  github: null,
  linkedin: null,

  // Definições de Imagens e Layout
  defaultPageIcon: null,
  defaultPageBanner: null,
  pageUrlOverrides: null,

  // Funcionalidades
  isPreviewImageSupportEnabled: false, // Mantenha false para evitar erros no build
  isSearchEnabled: false
})
