const tradList = {
  tabTitle0: {
    fr: 'Prévisualisation',
    en: 'Preview'
  },
  tabTitle1: {
    fr: 'Votre instance Tracim',
    en: 'Your Tracim instance'
  },
  labelHelpBtn: {
    fr: "Besoin d'aide ?",
    en: 'Need for help ?'
  },
  labelSelectLang: {
    fr: 'Langue',
    en: 'Language'
  },
  btnReset: {
    fr: 'Réinitialiser les couleurs',
    en: 'Reset colors'
  },
  btnValidate: {
    fr: 'Générer votre thème',
    en: 'Generate your theme'
  },
  btnAdvOptClose: {
    fr: ' Plus de couleurs',
    en: ' More colors'
  },
  btnAdvOptOpen: {
    fr: ' Moins de couleurs',
    en: ' Less colors'
  },
  colorPickerLabel: {
    fr: 'Choisissez votre couleur',
    en: 'Pick your color'
  },
  dialogHelp: {
    fr: 'Aide',
    en: 'Help'
  },
  dialogReset: {
    fr: 'Etes-vous sur ?',
    en: 'Are you sure ?'
  },
  dialogBuild: {
    fr: 'Vous êtes sur le point de générer et télécharger le nouveau thème (fichier css)',
    en: 'You are about to generate and download the new theme (css file)'
  },
  dialogBuildSaas: {
    fr: 'Vous êtes sur le point de générer et appliquer le theme à votre instance de Tracim',
    en: 'You are about to generate and apply the theme to your Tracim instance'
  },
  dialogBtnValidate: {
    fr: 'Valider',
    en: 'Ok'
  },
  dialogBtnCancel: {
    fr: 'Annuler',
    en: 'Cancel'
  },
  previewHome: {
    fr: 'Accueil',
    en: 'Home'
  },
  previewCalendar: {
    fr: 'Calendrier',
    en: 'Calendar'
  },
  previewSearchInput: {
    fr: 'Rechercher ...',
    en: 'Search...'
  },
  previewWorkspaceTitle: {
    fr: 'Espace de travail',
    en: 'Workspace'
  },
  previewWorkspace0: {
    fr: 'Projets interne',
    en: 'Internal projects'
  },
  previewWorkspace0Sub0: {
    fr: 'Amélioration des process',
    en: 'Process improvement'
  },
  previewWorkspace0Sub1: {
    fr: 'Etude : paiement à 60 jours',
    en: 'Research : 60 days payments'
  },
  previewWorkspace1: {
    fr: 'Projets client',
    en: "Client's project"
  },
  previewWorkspace2: {
    fr: 'Projets étude',
    en: 'Research project'
  },
  previewWorkspace3: {
    fr: 'Finances',
    en: 'Finances'
  },
  previewWorkspace4: {
    fr: 'Feuiles de suivi',
    en: 'Tracking sheets'
  },
  previewContentTitle: {
    fr: 'Tableau de bord',
    en: 'Dashboard'
  },
  previewContentSubTitle: {
    fr: 'Bienvenu',
    en: 'Welcome'
  },
  previewSidebarRightBtn0: {
    fr: 'Mon profil',
    en: 'My profil'
  },
  previewSidebarRightBtn1: {
    fr: 'Mot de passe',
    en: 'Password'
  },
  previewSidebarRightSeparator: {
    fr: 'Voir ...',
    en: 'See...'
  },
  previewSidebarRightBtn2: {
    fr: 'Non lus',
    en: 'Unread'
  },
  previewSidebarRightBtn3: {
    fr: 'Activités',
    en: 'Activities'
  },
  previewSidebarRightBtn4: {
    fr: 'Espaces',
    en: 'Spaces'
  },
  hour: {
    fr: 'heure',
    en: 'hour'
  },
  hours: {
    fr: 'heures',
    en: 'hours'
  },
  day: {
    fr: 'jour',
    en: 'day'
  },
  days: {
    fr: 'jours',
    en: 'days'
  },
  previewUnreadTitle: {
    fr: 'Non lus',
    en: 'Unread'
  },
  previewUnread0Name: {
    fr: 'Team building',
    en: 'Team building'
  },
  previewUnread1Name: {
    fr: 'Transition vers saas',
    en: 'Transition to saas'
  },
  previewUnread2Name: {
    fr: "Recherche d'investisseurs",
    en: 'Search for investors'
  }
}

import { store } from './store.js'

let lang = store.getState().lang
store.subscribe(() => (lang = store.getState().lang))

function __ (tradId) { return tradList[tradId][lang] }

export default __

/*
// legacy :
tradList = {
  fr: {
    tabTitle0: 'Prévisualisation',
    tabTitle1: 'Votre instance Tracim'
  },
  en: {
    tabTitle0: 'Preview',
    tabTitle1: 'Your Tracim instance'
  }
}
function __ () { return tradList[lang] }
// usage in jsx : { __().tabTitle0 }
*/
