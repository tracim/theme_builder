const tradList = {
  fr: {
    tabTitle0: 'Prévisualisation',
    tabTitle1: 'Votre instance Tracim',
    labelSelectLang: 'Langue',
    btnReset: 'Réinitialiser les couleurs',
    btnValidate: 'Générer votre thème',
    btnAdvOpt: ' Autre',
    colorPickerLabel: 'Choisissez votre couleur',
    dialogReset: 'Etes-vous sur ?',
    dialogBuild: 'Etes-vous sur ?',
    dialogBtnValidate: 'Valider',
    dialogBtnCancel: 'Annuler',
    previewHome: 'Accueil',
    previewCalendar: 'Calendrier',
    previewSearchInput: 'Rechercher ...',
    previewWorkspaceTitle: 'Espace de travail',
    previewWorkspace0: 'Projets interne',
    previewWorkspace0Sub0: 'Amélioration des process',
    previewWorkspace0Sub1: 'Etude : paiement à 60 jours',
    previewWorkspace1: 'Projets client',
    previewWorkspace2: 'Projets étude',
    previewWorkspace3: 'Finances',
    previewWorkspace4: 'Feuiles de suivi',
    previewContentTitle: 'Tableau de bord',
    previewContentSubTitle: 'Bienvenu',
    previewSidebarRightBtn0: 'Mon profil',
    previewSidebarRightBtn1: 'Mot de passe',
    previewSidebarRightSeparator: 'Voir ...',
    previewSidebarRightBtn2: 'Non lus',
    previewSidebarRightBtn3: 'Activités',
    previewSidebarRightBtn4: 'Espaces'
  },
  en: {
    tabTitle0: 'Preview',
    tabTitle1: 'Your Tracim instance',
    labelSelectLang: 'Language',
    btnReset: 'Reset colors',
    btnValidate: 'Generate your theme',
    btnAdvOpt: ' More',
    colorPickerLabel: 'Pick your color',
    dialogReset: 'Are you sure ?',
    dialogBuild: 'Are you sure ?',
    dialogBtnValidate: 'Ok',
    dialogBtnCancel: 'Cancel',
    previewHome: 'Home',
    previewCalendar: 'Calendar',
    previewSearchInput: 'Search...',
    previewWorkspaceTitle: 'Workspace',
    previewWorkspace0: 'Internal projects',
    previewWorkspace0Sub0: 'Process improvement',
    previewWorkspace0Sub1: 'Research : 60 days payments',
    previewWorkspace1: "Client's project",
    previewWorkspace2: 'Research project',
    previewWorkspace3: 'Finances',
    previewWorkspace4: 'Tracking sheets',
    previewContentTitle: 'Dashboard',
    previewContentSubTitle: 'Welcome',
    previewSidebarRightBtn0: 'My profil',
    previewSidebarRightBtn1: 'Password',
    previewSidebarRightSeparator: 'See ...',
    previewSidebarRightBtn2: 'Unread',
    previewSidebarRightBtn3: 'Activities',
    previewSidebarRightBtn4: 'Spaces'
  }
}

import store from './store.js'

let lang = store.getState().lang
store.subscribe(() => (lang = store.getState().lang))

function __ () { return tradList[lang] }

export default __
