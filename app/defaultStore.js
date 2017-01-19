export const defaultStore = {
  isFetching: false,
  lang: 'fr',
  showAdvancedOpt: false,
  activeTab: 0,
  config: {
    urlTracimInstance: '',
    isSaasInstance: false
  },
  color: [
    {
      name: 'brand-primary',
      hex: '#555555',
      label: {
        fr: 'Couleur principale',
        en: 'Primary color'
      },
      advancedOpt: false
    }, {
      name: 'brand-secondary',
      hex: '#f5f5f5',
      label: {
        fr: 'Couleur secondaire',
        en: 'Secondary color'
      },
      advancedOpt: false
    }, {
      name: 'text-menu',
      hex: '#ddd',
      label: {
        fr: 'Texte des menus',
        en: 'Menu text color'
      },
      advancedOpt: false
    }, {
      name: 'text-menu:hover',
      hex: '#333',
      label: {
        fr: 'Texte des menus au survol',
        en: 'Menu text color on hover'
      },
      advancedOpt: false
    }, {
      name: 'text-menu-bg:hover',
      hex: '#eee',
      label: {
        fr: 'Couleur de fond des menus au survol',
        en: 'Menu background color on hover'
      },
      advancedOpt: false
    }, {
      name: 'text-menu-clicked',
      hex: '#333',
      label: {
        fr: 'Couleur du texte du menu sélectionné',
        en: 'Selected menu color'
      },
      advancedOpt: false
    }, {
      name: 'text-menu-bg-clicked',
      hex: '#ddd',
      label: {
        fr: 'Couleur du fond du menu sélectionné',
        en: 'Selected menu background color'
      },
      advancedOpt: false
    }, {
      name: 'brand-success',
      hex: '#5cb85c',
      label: {
        fr: 'Messages de succès',
        en: 'Success messages'
      },
      advancedOpt: true
    }, {
      name: 'brand-info',
      hex: '#5bc0de',
      label: {
        fr: "Messages d'informations",
        en: 'Informative messages'
      },
      advancedOpt: true
    }, {
      name: 'brand-warning',
      hex: '#f0ad4e',
      label: {
        fr: "Messages d'alertes",
        en: 'Alert messages'
      },
      advancedOpt: true
    }, {
      name: 'brand-danger',
      hex: '#d9534f',
      label: {
        fr: 'Messages importants',
        en: 'Important messages'
      },
      advancedOpt: true
    }
  ]
}
