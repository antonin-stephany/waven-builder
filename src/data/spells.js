export default [
  {
    value: 'fleche-affligeante',
    label: `Flèche Affligeante`,
    classes: 'cra',
    hero: '',
    description:
      'Inflige 6 dégâts magiques. COMBO : +1 AURA MIRE ARDENTE à votre héros',
    element: 'fire',
    cost: 2,
    gift_ap: 1,
    load: 0,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +1 Jauge FEU',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fleche-mordante',
    label: `Flèche Mordante`,
    classes: 'cra',
    hero: '',
    description: 'Inflige 2 dégâts magiques. ARCHER',
    element: 'fire',
    cost: 2,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : VOL DE VIE',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fleche-huilee',
    label: `Flèche Huilée`,
    classes: 'cra',
    hero: '',
    description: 'Inflige 14 dégâts magiques et applique HUILÉ',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Piochez 1 sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fleche-immolante',
    label: `Flèche Immolante`,
    classes: 'cra',
    hero: '',
    description: 'Inflige 21 dégâts magiques',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : +5% de MAGIE FEU à votre héros jusqu’à la fin du combat',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fleche-agressive',
    label: `Flèche Agressive`,
    classes: 'cra',
    hero: '',
    description: 'Inflige 21 dégâts magiques dans la zone [Carré 1]',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +50% aux DÉGÂTS de ce sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fleche-enflammee',
    label: `Flèche Enflammée`,
    classes: 'cra',
    hero: '',
    description: 'Inflige 26 dégâts magiques et applique HUILÉ',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : Piochez 1 sort FEU. La cible déclenche EXPLOSION (8)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fleche-detonante',
    label: `Flèche Détonante`,
    classes: 'cra',
    hero: '',
    description:
      'Inflige 22 dégâts magiques. COMBO : Inflige 10 dégâts magiques aux adversaires autour de la cible',
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : +5% de MAGIE FEU à votre héros jusqu’à la fin du combat',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'impact-ardent',
    label: `Impact Ardent`,
    classes: 'cra',
    hero: 'arc-piven',
    description:
      'Inflige 21 dégâts magiques aux adversaires autour de votre héros. ARCHER',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Déclenche EXPLOSION (8)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'impact-nebuleux',
    label: `Impact Nébuleux`,
    classes: 'cra',
    hero: 'arc-piven',
    description:
      'Inflige 32 dégâts magiques aux adversaires adjacents à votre héros et les REPOUSSE de 2 cases',
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : Ce sort revient dans votre main. Il coûte -1 PA',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'brasero',
    label: `Brasero`,
    classes: 'cra',
    hero: 'bunelame',
    description:
      'Inflige 20 dégâts magiques. Si vous avez 2 sorts ou moins dans votre main : VOL DE VIE',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +50% aux DÉGÂTS de ce sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'bumbon',
    label: `Bumbon`,
    classes: 'cra',
    hero: 'bunelame',
    description:
      'Inflige 17 dégâts magiques. Si vous avez 2 sorts ou moins dans votre main : Déclenche REBOND (10)',
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +50% aux DÉGÂTS de ce sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cremation',
    label: `Crémation`,
    classes: 'cra',
    hero: 'expingole',
    description:
      'Inflige 9 dégâts magiques à un adversaire et 3 dégâts magiques autour de lui par AURA MIRE que possède votre héros',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +1 AURA MIRE ARDENTE',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'alteration',
    label: `Altération`,
    classes: 'cra',
    hero: 'expingole',
    description:
      'Inflige 21 dégâts magiques +3 dégâts magiques par AURA MIRE que possède votre héros',
    element: 'wind',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +1 AURA MIRE NÉBULEUSE',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'shiruken-ardent',
    label: `Shiruken Ardent`,
    classes: 'cra',
    hero: 'shiru-shaden',
    description:
      'Téléporte votre héros sur une case adjacente à un adversaire jusqu’à 2 cases et lui inflige 11 dégâts magiques. COMBO : Déclenche EXPLOSION (13)',
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : ARCHER',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'shiruken-nebuleux',
    label: `Shiruken Nébuleux`,
    classes: 'cra',
    hero: 'shiru-shaden',
    description:
      'Inflige 30 dégâts magiques à un adversaire adjacent de votre héros. COMBO : Téléporte votre héros derrière la cible',
    element: 'wind',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : ARCHER',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'poing-fulgurant',
    label: `Poing Fulgurant`,
    classes: 'cra',
    hero: 'voldorak-vo',
    description:
      'Inflige 25 dégâts magiques à un adversaire aligné. COMBO : +10 dégâts magiques',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Déclenche EXPLOSION (8)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'poing-turbulent',
    label: `Poing Turbulent`,
    classes: 'cra',
    hero: 'voldorak-vo',
    description:
      'Inflige 30 dégâts magiques à un adversaire aligné. COMBO : REPOUSSE la cible de 2 cases',
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Déclenche REBOND (10)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'bruler',
    label: `Brûler`,
    classes: 'iop',
    hero: '',
    description:
      'Inflige 7 dégâts magiques. Si la cible est HUILÉE : +1 AURA ÉPÉE DE FEU à votre héros',
    element: 'fire',
    cost: 2,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +1 AURA ÉPÉE DE FEU',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fulgur',
    label: `Fulgur`,
    classes: 'iop',
    hero: '',
    description:
      'Inflige 14 dégâts magiques. MÊLÉE : +5% de RIPOSTE à votre héros jusqu’à son prochain tour',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : Inflige 30% des dégâts magiques autour de la cible',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'masser',
    label: `Masser`,
    classes: 'iop',
    hero: '',
    description: 'Inflige 10 dégâts magiques et applique HUILÉ',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Piochez 1 sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'charge-explosive',
    label: `Charge Explosive`,
    classes: 'iop',
    hero: '',
    description:
      'Votre héros CHARGE un personnage aligné jusqu’à 3 cases et lui inflige 29 dégâts magiques',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Déclenche EXPLOSION (8)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'corriger',
    label: `Corriger`,
    classes: 'iop',
    hero: '',
    description:
      'Inflige 18 dégâts magiques. S’il y a au moins 1 adversaire autour de votre héros : +1 AURA ÉPÉE DE FEU',
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +1 Jauge FEU',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'inspiration',
    label: `Inspiration`,
    classes: 'iop',
    hero: '',
    description:
      'Inflige 21 dégâts magiques. Si la cible est HUILÉE : Déclenche EXPLOSION(13)',
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+25% aux dégâts d’EXPLOSION',
      },
      {
        description: 'CRITIQUE : +50% aux DÉGÂTS de ce sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'blamer',
    label: `Blâmer`,
    classes: 'iop',
    hero: '',
    description: 'Inflige 26 dégâts magiques et applique HUILÉ',
    element: 'fire',
    cost: 6,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : Piochez 1 sort. +25% aux dégâts de votre prochain sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'fievre',
    label: `Fièvre`,
    classes: 'iop',
    hero: 'bouvaloir-orok',
    description:
      'Inflige 17 dégâts magiques. +50% aux dégâts de votre prochain sort de CHARGE',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux dégâts de votre prochain sort de CHARGE',
      },
      {
        description: 'CRITIQUE : Piochez votre prochain sort de CHARGE',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'accalmie',
    label: `Accalmie`,
    classes: 'iop',
    hero: 'bouvaloir-orok',
    description:
      'Inflige 14 dégâts magiques aux adversaires adjacents à votre héros',
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Piochez votre prochain sort de CHARGE',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'brulure-revigorante',
    label: `Brûlure Revigorante`,
    classes: 'iop',
    hero: 'glaive-stalaktoss',
    description:
      'Inflige 19 dégâts magiques. Si votre héros est DÉPHASÉ : +50% de DRAIN pour le tour',
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+50% de DRAIN pour le tour',
      },
      {
        description: 'CRITIQUE : +50% aux DÉGÂTS de ce sort',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'trouble',
    label: `Trouble`,
    classes: 'iop',
    hero: 'glaive-stalaktoss',
    description:
      'Inflige 8 dégâts magiques. Si votre héros est DÉPHASÉ : REPOUSSE de 1 case',
    element: 'wind',
    cost: 2,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: 'REPOUSSE la cible de 1 case supplémentaire',
      },
      {
        description: 'CRITIQUE : Ce sort revient dans votre main',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'brulure-spectrale',
    label: `Brûlure Spectrale`,
    classes: 'iop',
    hero: 'lamarguedon-spectral',
    description:
      'Téléporte votre ÂME SPECTRALE sur une case autour de votre héros. Elle inflige 13 dégâts magiques autour d’elle',
    element: 'fire',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : +25% à l’AT de votre héros pour le tour',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'prise-spectrale',
    label: `Prise Spectrale`,
    classes: 'iop',
    hero: 'lamarguedon-spectral',
    description:
      'Inflige 11 dégâts magiques aux adversaires autour de votre héros, puis échange sa position avec celle de votre ÂME SPECTRALE',
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description:
          'CRITIQUE : Inflige 50% de l’AT de votre ÂME SPECTRALE autour d’elle',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'estoc-detonant',
    label: `Estoc Détonant`,
    classes: 'iop',
    hero: 'flamboyante-kasai',
    description:
      'Inflige 26 dégâts magiques. Si la cible est HUILÉE : Déclenche EXPLOSION (13)',
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Applique HUILÉ',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'estoc-tonnerre',
    label: `Estoc Tonnerre`,
    classes: 'iop',
    hero: 'flamboyante-kasai',
    description:
      'Inflige 30 dégâts magiques à un adversaire adjacent. Si la cible est ÉVENTÉE : Déclenche REBOND(10)',
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Applique ÉVENTÉ',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'touche-huilee',
    label: `Touche Huilée`,
    classes: 'iop',
    hero: 'justelame-brutale',
    description:
      'Inflige 12 dégâts magiques. MÊLÉE : Inflige 15% de dégâts magiques autour de votre héros',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Déclenche EXPLOSION (8)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'touche-venteuse',
    label: `Touche Venteuse`,
    classes: 'iop',
    hero: 'justelame-brutale',
    description:
      'Inflige 20 dégâts magiques. MÊLÉE : +15% aux DÉGÂTS de ce sort',
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: 'CRITIQUE : Déclenche REBOND (10)',
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cure-alternative',
    label: `Cure Alternative`,
    classes: 'eniripsa',
    hero: '',
    description: 'Inflige 7 dégâts magiques. VOL DE VIE.',
    element: 'fire',
    cost: 2,
    gift_ap: 2,
    load: 0,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +25% d'AT à vos personnages pour le tour`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'premiere-cure-caustique',
    label: `Première Cure Caustique`,
    classes: 'eniripsa',
    hero: '',
    description: 'Inflige 3 dégâts magiques et applique HUILÉ',
    element: 'fire',
    cost: 2,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cure-devorante',
    label: `Cure Dévorante`,
    classes: 'eniripsa',
    hero: '',
    description:
      'Soigne un allié de 9 PV et inflige 6 dégâts magiques à un adversaire autour de lui. SOUTIEN : +8 dégâts magiques',
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% aux SOINS CC de ce sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cure-incandescente',
    label: `Cure Incandescente`,
    classes: 'eniripsa',
    hero: '',
    description: `Inflige 9 dégâts magiques. +50% d'AT à un de vos compagnons pour le tour`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cure-corrosive',
    label: `Cure Corrosive`,
    classes: 'eniripsa',
    hero: '',
    description: `Inflige 28 dégâts magiques. Si la cible est HUILÉE : +1 Jauge FEU`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'laboratoire-de-flamme',
    label: `Laboratoire De Flamme`,
    classes: 'eniripsa',
    hero: '',
    description: `Construit un LABORATOIRE DE FLAMME jusqu'à 2 cases de votre héros. Détruit votre précédent LABORATOIRE DE FLAMME`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: 'APPARITION : +50% de BL à votre LABORATOIRE DE FLAMME',
      },
      {
        description: `CRITIQUE : +1 AURA CŒUR DE FLAMME`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cure-fulgurante',
    label: `Cure Fulgurante`,
    classes: 'eniripsa',
    hero: '',
    description: `Inflige 27 dégâts magiques`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'coupe-saignante',
    label: `Coupe Saignante`,
    classes: 'eniripsa',
    hero: 'scalpel-de-l-apostruker',
    description: `Inflige 9 dégâts magiques. VOL DE VIE`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA CŒUR DE FLAMME`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'coupe-mordante',
    label: `Coupe Mordante`,
    classes: 'eniripsa',
    hero: 'scalpel-de-l-apostruker',
    description: `Inflige 27 dégâts magiques à l'adversaire ayant le plus de PV et soigne de 7 PV les alliés adjacents`,
    element: 'wind',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA CŒUR DE VENT`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'phase-enivrante',
    label: `Phase Enivrante`,
    classes: 'eniripsa',
    hero: 'gemme-dephasante',
    description: `Inflige 20 dégâts magiques. Si votre héros est DÉPHASÉ : inflige 8 dégâts magiques aux adversaires autour de la cible`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% d'AT à vos personnages pour le tour`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'phase-petulante',
    label: `Phase Pétulante`,
    classes: 'eniripsa',
    hero: 'gemme-dephasante',
    description: `Inflige 14 dégâts magiques. Si votre héros est DÉPHASÉ : Échange sa position avec celle de la cible`,
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Ce sort revient dans votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'faveur-nocturne',
    label: `Faveur Nocturne`,
    classes: 'eniripsa',
    hero: 'ambre-tamashi',
    description: `Inflige 20 dégâts magiques aux adversaires autour d'un de vos NOCTURIEN, puis le sacrifie`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Le NOCTURIEN déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'liaison-nocturne',
    label: `Liaison Nocturne`,
    classes: 'eniripsa',
    hero: 'ambre-tamashi',
    description: `Échange la position de votre héros avec celle d'un NOCTURIEN allié. Inflige 21 dégâts magiques à un adversaire adjacent au NOCTURIEN`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Le NOCTURIEN déclenche REBOND (10)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'kokoro-brulant',
    label: `Kokoro Brûlant`,
    classes: 'eniripsa',
    hero: 'pinceau-kokoro',
    description: `Inflige 12 dégâts magiques aux adversaires autour d'un allié. SOUTIEN : VOL DE VIE`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge Feu`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'kokoro-vaporeux',
    label: `Kokoro Vaporeux`,
    classes: 'eniripsa',
    hero: 'pinceau-kokoro',
    description: `Infligé 28 dégâts magiques à un adversaire adjacent à un allié. SOUTIEN : déclenche REBOND (10)`,
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge Air`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'aiguillon-perforant',
    label: `Aiguillon Perforant`,
    classes: 'eniripsa',
    hero: 'lame-voracius',
    description: `Inflige 24 dégâts magiques. Si la cible est HUILÉE : +15 dégâts magiques`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Applique HUILÉ`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'aiguillon-turbulent',
    label: `Aiguillon Turbulent`,
    classes: 'eniripsa',
    hero: 'lame-voracius',
    description: `Inflige 34 dégâts magiques à un adversaire adjacent à votre héros. Si la cible est ÉVENTÉE : la REPOUSSE de 3 cases`,
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Apllique ÉVENTÉ`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'contusion',
    label: `Contusion`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 7 dégâts magiques et applique HUILÉ`,
    element: 'fire',
    cost: 2,
    gift_ap: 1,
    load: 0,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez 1 sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'escarre',
    label: `Escarre`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 2 dégâts magiques. MUTILATION : Inflige 8 dégâts magiques autour de la cible`,
    element: 'fire',
    cost: 2,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +25% d'AT à votre héros pour le tour`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'hemorragie',
    label: `Hémorragie`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 15 dégâts magiques à la cible et 5 dégâts magiques aux personnages autour`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA POING DE FLAMME à votre héros`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'pacte-de-sang',
    label: `Pacte De Sang`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 18 dégâts magiques`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA POING DE FLAMME à votre héros`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'sang-pour-sang',
    label: `Sang Pour Sang`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 19 dégâts magiques. +50% de DRAIN pour le tour`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% de DRAIN pour le tour`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'commotion',
    label: `Commotion`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 24 dégâts magiques et applique HUILÉ`,
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez 1 sort. VOL DE VIE`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'exaltation',
    label: `Exaltation`,
    classes: 'sacrieur',
    hero: '',
    description: `Inflige 12 dégâts magiques. Si la cible est HUILÉE : +2 AURAS POING DE FLAMME à votre héros`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% aux DÉGÂTS de ce sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'tonfa-fulgurant',
    label: `Tonfa Fulgurant`,
    classes: 'sacrieur',
    hero: 'baton-tonfavik',
    description: `Inflige 16 dégâts magiques. Si votre héros possède de l'AR : +5 dégâts magiques`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (13)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'tonfa-accablant',
    label: `Tonfa Accablant`,
    classes: 'sacrieur',
    hero: 'baton-tonfavik',
    description: `Inflige 12 dégâts magiques. Si votre héros possède de l'AR : Inflige 8 dégâts magiques à ses adversaires adjacents`,
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche REBOND (10)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'absorption-cendree',
    label: `Absorption Cendrée`,
    classes: 'sacrieur',
    hero: 'gantares-des-cendres',
    description: `Inflige 5 dégâts magiques à votre héros et 15 dégâts magiques à un adversaire. Si l'adversaire est autour de votre héros : VOL DE VIE`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% aux DÉGÂTS CC de ce sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'douleur-cendree',
    label: `Douleur Cendrée`,
    classes: 'sacrieur',
    hero: 'gantares-des-cendres',
    description: `Inflige 3 dégâts magiques à votre héros et 15 dégâts magiques à un adversaire. Si l'adversaire est autour de votre héros : +7 dégâts magiques`,
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% aux DÉGÂTS CC de ce sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'errance-debridee',
    label: `Errance Débridée`,
    classes: 'sacrieur',
    hero: 'ombraden',
    description: `Téléporte votre héros jusqu'à 2 cases et inflige 21 dégâts magiques autour`,
    element: 'fire',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez votre prochain sort de déplacement`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'errance-alternee',
    label: `Errance Alternée`,
    classes: 'sacrieur',
    hero: 'ombraden',
    description: `Inflige 20 dégâts magiques à un adversaire adjacent et le REPOUSSE de 2 cases. Votre héros avance d'autant`,
    element: 'wind',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez votre prochain sort de déplacement`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'chatiment-de-masse',
    label: `Châtiment De Masse`,
    classes: 'sacrieur',
    hero: 'pilobouli',
    description: `Inflige 13 dégâts magiques dans la zone`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA POING DE FLAMME à votre héros`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'chatiment-volontaire',
    label: `Châtiment Volontaire`,
    classes: 'sacrieur',
    hero: 'pilobouli',
    description: `Inflige 5 dégâts magiques à votre héros et 42 dégâts magiques à un adversaire adjacent`,
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA POING DE VENT à votre héros`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'oeil-pour-oeil',
    label: `Œil Pour Œil`,
    classes: 'sacrieur',
    hero: 'darde-kan',
    description: `Inflige 18 dégâts magiques. Si vous avez au moins un compagnon en jeu : VOL DE VIE`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge Feu`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'oeil-tatoue',
    label: `Œil Tatoué`,
    classes: 'sacrieur',
    hero: 'darde-kan',
    description: `Inflige 20 dégâts magiques. Si vous avez au moins un compagnon en jeu : votre héros est insensible aux dégâts de la prochaine attaque subie`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge Air`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'piege-ploz',
    label: `Piège Ploz`,
    classes: 'sram',
    hero: '',
    description: `Construit un PIÈGE SRAM jusqu’à 3 cases de votre héros`,
    element: 'fire',
    cost: 2,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: 'PORTÉE : +2 cases',
      },
      {
        description: `CRITIQUE : Votre PIÈGE SRAM déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'detour-mortel',
    label: `Détour Mortel`,
    classes: 'sram',
    hero: '',
    description: `Inflige 18 dégâts magiques. TRAPPEUR : Ajoute une POUSSETTE à votre main`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge FEU`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'sixieme-sens',
    label: `Sixième Sens`,
    classes: 'sram',
    hero: '',
    description: `Inflige 12 dégâts magiques et applique HUILÉ`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez 1 sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'assassin-des-flammes',
    label: `Assassin Des Flammes`,
    classes: 'sram',
    hero: '',
    description: `Inflige 16 dégâts magiques. Si la cible est HUILÉE : +2 AURAS TRAPPE DES FLAMMES à votre héros`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +25% aux dégâts de vos PIÈGES jusqu’au prochain tour`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'jusqu-en-enfer',
    label: `Jusqu'en Enfer`,
    classes: 'sram',
    hero: '',
    description: `Inflige 18 dégâts magiques. TRAPPEUR : VOL DE VIE`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +25% aux dégâts de vos PIÈGES jusqu’au prochain tour`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'frappe-de-la-st-valentin',
    label: `Frappe De La St Valentin`,
    classes: 'sram',
    hero: '',
    description: `Inflige 25 dégâts magiques et applique HUILÉ`,
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez 1 sort. Ajoute une POUSSETTE à votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'sans-eclaboussure',
    label: `Sans Éclaboussure`,
    classes: 'sram',
    hero: '',
    description: `Inflige 27 dégâts magiques`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA TRAPPE DES FLAMMES`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'cisaille-huilee',
    label: `Cisaille Huilée`,
    classes: 'sram',
    hero: 'cisaille-orishi',
    description: `Inflige 6 dégâts magiques dans la zone [Croix 1]. Si la case centrale est libre : Construit un PIÈGE SRAM`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez votre prochain sort de PIÈGE`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'double-cisaille-venteuse',
    label: `Double-Cisaille Venteuse`,
    classes: 'sram',
    hero: 'cisaille-orishi',
    description: `Construit 2 PIÈGES SRAM adjacents jusqu’à 3 cases de votre héros. REPOUSSE de 1 case les personnages adjacents`,
    element: 'wind',
    cost: 6,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: 'REPOUSSE de 1 case supplémentaire',
      },
      {
        description: `CRITIQUE : Piochez votre prochain sort de PIÈGE`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'traque-devorante',
    label: `Traque Dévorante`,
    classes: 'sram',
    hero: 'ecorcheur-shugen',
    description: `Votre héros traverse une ligne jusqu’à 3 cases. Il inflige 10 dégâts magiques aux adversaires traversés`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'traque-sournoise',
    label: `Traque Sournoise`,
    classes: 'sram',
    hero: 'ecorcheur-shugen',
    description: `Échange la position de votre héros avec celle d’un de vos PIÈGES. Inflige 20 dégâts magiques aux adversaires adjacents à votre case d’arrivée`,
    element: 'wind',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche REBOND (10)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'amorce-furieuse',
    label: `Amorce Furieuse`,
    classes: 'sram',
    hero: 'lame-ourai',
    description: `Inflige 12 dégâts magiques aux adversaires autour d’un de vos PIÈGES. TRAPPEUR : VOL DE VIE`,
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Ajoute une POUSSETTE à votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'amorce-electrique',
    label: `Amorce  Électrique`,
    classes: 'sram',
    hero: 'lame-ourai',
    description: `Inflige 24 dégâts magiques aux adversaires adjacents à votre héros. TRAPPEUR : REPOUSSE les cibles de 1 case`,
    element: 'wind',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Ajoute une POUSSETTE à votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'malediction-du-sourokan',
    label: `Malédiction Du Sourokan`,
    classes: 'sram',
    hero: 'surin-sourokan',
    description: `Inflige 28 dégâts magiques. TRAPPEUR : -25% d'AT à la cible pour le tour`,
    element: 'fire',
    cost: 5,
    gift_ap: 1,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'huitieme-sourokan',
    label: `Huitième Sourokan`,
    classes: 'sram',
    hero: 'surin-sourokan',
    description: `Inflige 16 dégâts magiques aux adversaires autour de votre héros. TRAPPEUR : +9 dégâts magiques`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche REBOND (10)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'frappe-frenetique',
    label: `Frappe Frénétique`,
    classes: 'sram',
    hero: 'ken-kartana',
    description: `Votre héros se téléporte sur un de vos PIÈGES et inflige 10 dégâts magiques autour de lui`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA TRAPPE DES FLAMMES`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'frappe-balayante',
    label: `Frappe Balayante`,
    classes: 'sram',
    hero: 'ken-kartana',
    description: `Téléporte votre héros sur un de vos PIÈGES. Il attire les adversaires alignés jusqu’à 2 cases et leur inflige 17 dégâts magiques`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA TRAPPE DES VENTS`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'flammeche',
    label: `Flammèche`,
    classes: 'xelor',
    hero: '',
    description: `Inflige 11 dégâts magiques et applique HUILÉ`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez 1 sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'midi-pile',
    label: `Midi Pile`,
    classes: 'xelor',
    hero: '',
    description: `Inflige 23 dégâts magiques`,
    element: 'fire',
    cost: 3,
    gift_ap: 1,
    load: 0,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge FEU`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'sinistro-feu',
    label: `Sinistro Feu`,
    classes: 'xelor',
    hero: '',
    description: `Construit un SINISTRO FEU jusqu’à 3 cases de votre héros. Détruit votre précédent SINISTRO FEU. - OU - Transforme votre SINISTRO FEU en HYDRUILLE`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: 'APPARITION : +50% de BL à votre SINISTRO FEU',
      },
      {
        description: `CRITIQUE : +1 AURA HIBOU DE FLAMME`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'chronophagie',
    label: `Chronophagie`,
    classes: 'xelor',
    hero: '',
    description: `Inflige 18 dégâts magiques autour d’un de vos MÉCANISMES. REMBOBINAGE`,
    element: 'fire',
    cost: 4,
    gift_ap: 1,
    load: 0,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'teleportation-longue',
    label: `Téléportation Longue`,
    classes: 'xelor',
    hero: '',
    description: `Téléporte votre héros jusqu’à 3 cases OU autour d’un de vos MÉCANISMES. Inflige 12 dégâts aux adversaires autour de votre héros`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 Jauge FEU`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'aiguille-ardente',
    label: `Aiguille Ardente`,
    classes: 'xelor',
    hero: '',
    description: `Inflige 22 dégâts magiques. Si la cible est HUILÉE : +1 AURA HIBOU DE FLAMME à votre héros`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +50% aux DÉGÂTS CC de ce sort`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'flammes-cendrees',
    label: `Flammes Cendrées`,
    classes: 'xelor',
    hero: '',
    description: `Inflige 22 dégâts magiques et applique HUILÉ`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Piochez 1 sort. Ajoute une PAGE DU GRIMOIRE DES FLAMMES aléatoire à votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'teleport-compulsif',
    label: `Téleport Compulsif`,
    classes: 'xelor',
    hero: 'aiguille-pikuxala',
    description: `Inflige 16 dégâts magiques, puis téléporte votre héros jusqu’à 2 cases`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'teleport-offensif',
    label: `Téléport Offensif`,
    classes: 'xelor',
    hero: 'aiguille-pikuxala',
    description: `Téléporte votre héros jusqu’à 2 cases et inflige 18 dégâts magiques aux adversaires adjacents`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Déclenche REBOND (10)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'sablier-ardent',
    label: `Sablier Ardent`,
    classes: 'xelor',
    hero: 'sabliaton-jikan',
    description: `Inflige 24 dégâts magiques. Si la cible est HUILÉE : +16 dégâts magiques`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Applique HUILÉ`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'sablier-electrique',
    label: `Sablier Électrique`,
    classes: 'xelor',
    hero: 'sabliaton-jikan',
    description: `Inflige 32 dégâts magiques. Si la cible est ÉVENTÉE : REPOUSSE de 2 cases`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Applique ÉVENTÉ`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'protocole-explosion',
    label: `Protocole : Explosion`,
    classes: 'xelor',
    hero: 'regulant-gurpapa',
    description: `Inflige 15 dégâts magiques autour de votre héros ou d’un de vos MÉCANISMES. Si vous avez au moins 2 MÉCANISMES en jeu : +5 dégâts magiques`,
    element: 'fire',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Vos MÉCANISMES déclenchent EXPLOSION (8)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'protocole-regulation',
    label: `Protocole : Régulation`,
    classes: 'xelor',
    hero: 'regulant-gurpapa',
    description: `Inflige 19 dégâts magiques. Si vous avez au moins 2 MÉCANISMES en jeu : +6 dégâts magiques`,
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Vos MÉCANISMES déclenchent REBOND (10)`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'style-flamme',
    label: `Style Flamme`,
    classes: 'xelor',
    hero: 'synchronisateur-tako',
    description: `Inflige 14 dégâts magiques. CHRONO : +10 dégâts magiques autour de la cible`,
    element: 'fire',
    cost: 5,
    gift_ap: 0,
    load: 2,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA HIBOU DE FLAMME`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'style-vent',
    label: `Style Vent`,
    classes: 'xelor',
    hero: 'synchronisateur-tako',
    description: `Inflige 23 dégâts magiques. CHRONO : REPOUSSE la cible de 2 cases`,
    element: 'wind',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : +1 AURA HIBOU DE VENT`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'declic-explosif',
    label: `Déclic Explosif`,
    classes: 'xelor',
    hero: 'catalysateur-pramium',
    description: `Inflige 14 dégâts magiques aux adversaires autour de votre héros et d’un de vos MÉCANISMES`,
    element: 'fire',
    cost: 4,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Ajoute une ACTIVATION à votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
  {
    value: 'declic-aerien',
    label: `Déclic Aérien`,
    classes: 'xelor',
    hero: 'catalysateur-pramium',
    description: `Échange la position de votre héros avec celle d’un de vos MÉCANISMES et inflige 7 dégâts magiques autour d’eux`,
    element: 'wind',
    cost: 3,
    gift_ap: 0,
    load: 1,
    gifts: [
      {
        description: '+30% aux DÉGÂTS de ce sort',
      },
      {
        description: `CRITIQUE : Ajoute une ACTIVATION à votre main`,
      },
      {
        description: '+15% CC à ce sort',
      },
    ],
  },
];
