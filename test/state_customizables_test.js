const state_customizables_test = [{
    label: {
      fr: 'Design général',
      en: 'General design'
    },
    fields: [{
      name: 'brand-primary',
      hex: '#555555',
      label: {
        fr: 'Couleur principale',
        en: 'Primary color'
      }
    }, {
      name: 'brand-secondary',
      hex: '#f5f5f5',
      label: {
        fr: 'Couleur secondaire',
        en: 'Secondary color'
      }
    }]
  }, {
    label: {
      fr: 'Explorateur',
      en: 'Explorator'
    },
    fields: [{
      name: 'text-menu',
      hex: '#ddd',
      label: {
        fr: 'Texte des menus',
        en: 'Menu text color'
      }
    }]
  }, {
    label: {
      fr: 'Elément sélectionné',
      en: 'selected element'
    },
    fields: [{
      name: 'text-menu-clicked',
      hex: '#333',
      label: {
        fr: 'Couleur du texte du menu sélectionné',
        en: 'Selected menu color'
      }
    }, {
      name: 'text-menu-bg-clicked',
      hex: '#ddd',
      label: {
        fr: 'Couleur du fond du menu sélectionné',
        en: 'Selected menu background color'
      }
    }]
  }, {
    label: {
      fr: 'Element survolé',
      en: 'Hovored element'
    },
    fields: [{
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
    }]
  }]
export default state_customizables_test
