export default [
    {
        value: 'fleche-affligeante',
        label: `Flèche Affligeante`,
        classes: 'cra',
        hero:'',
        description:'Inflige 6 dégâts magiques. COMBO : +1 AURA MIRE ARDENTE à votre héros',
        element: 'fire',
        cost: 2,
        gift_ap: 1,
        load: 0,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +1 Jauge FEU',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'fleche-mordante',
        label: `Flèche Mordante`,
        classes: 'cra',
        hero:'',
        description:'Inflige 2 dégâts magiques. ARCHER',
        element: 'fire',
        cost: 2,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : VOL DE VIE',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'fleche-huilee',
        label: `Flèche Huilée`,
        classes: 'cra',
        hero:'',
        description:'Inflige 14 dégâts magiques et applique HUILÉ',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Piochez 1 sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'fleche-immolante',
        label: `Flèche Immolante`,
        classes: 'cra',
        hero:'',
        description:'Inflige 21 dégâts magiques',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +5% de MAGIE FEU à votre héros jusqu’à la fin du combat',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'fleche-agressive',
        label: `Flèche Agressive`,
        classes: 'cra',
        hero:'',
        description:'Inflige 21 dégâts magiques dans la zone [Carré 1]',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +50% aux DÉGÂTS de ce sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'fleche-enflammee',
        label: `Flèche Enflammée`,
        classes: 'cra',
        hero:'',
        description:'Inflige 26 dégâts magiques et applique HUILÉ',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Piochez 1 sort FEU. La cible déclenche EXPLOSION (8)',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'fleche-detonante',
        label: `Flèche Détonante`,
        classes: 'cra',
        hero:'',
        description:'Inflige 22 dégâts magiques. COMBO : Inflige 10 dégâts magiques aux adversaires autour de la cible',
        element: 'fire',
        cost: 5,
        gift_ap: 1,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +5% de MAGIE FEU à votre héros jusqu’à la fin du combat',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'impact-ardent',
        label: `Impact Ardent`,
        classes: 'cra',
        hero:'arc-piven',
        description:'Inflige 21 dégâts magiques aux adversaires autour de votre héros. ARCHER',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Déclenche EXPLOSION (8)',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'impact-nebuleux',
        label: `Impact Nébuleux`,
        classes: 'cra',
        hero:'arc-piven',
        description:'Inflige 32 dégâts magiques aux adversaires adjacents à votre héros et les REPOUSSE de 2 cases',
        element: 'wind',
        cost: 6,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Ce sort revient dans votre main. Il coûte -1 PA',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'brasero',
        label: `Brasero`,
        classes: 'cra',
        hero:'bunelame',
        description:'Inflige 20 dégâts magiques. Si vous avez 2 sorts ou moins dans votre main : VOL DE VIE',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +50% aux DÉGÂTS de ce sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'bumbon',
        label: `Bumbon`,
        classes: 'cra',
        hero:'bunelame',
        description:'Inflige 17 dégâts magiques. Si vous avez 2 sorts ou moins dans votre main : Déclenche REBOND (10)',
        element: 'wind',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +50% aux DÉGÂTS de ce sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'cremation',
        label: `Crémation`,
        classes: 'cra',
        hero:'expingole',
        description:'Inflige 9 dégâts magiques à un adversaire et 3 dégâts magiques autour de lui par AURA MIRE que possède votre héros',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +1 AURA MIRE ARDENTE',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'alteration',
        label: `Altération`,
        classes: 'cra',
        hero:'expingole',
        description:'Inflige 21 dégâts magiques +3 dégâts magiques par AURA MIRE que possède votre héros',
        element: 'wind',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +1 AURA MIRE NÉBULEUSE',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'shiruken-ardent',
        label: `Shiruken Ardent`,
        classes: 'cra',
        hero:'shiru-shaden',
        description:'Téléporte votre héros sur une case adjacente à un adversaire jusqu’à 2 cases et lui inflige 11 dégâts magiques. COMBO : Déclenche EXPLOSION (13)',
        element: 'fire',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : ARCHER',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'shiruken-nebuleux',
        label: `Shiruken Nébuleux`,
        classes: 'cra',
        hero:'shiru-shaden',
        description:'Inflige 30 dégâts magiques à un adversaire adjacent de votre héros. COMBO : Téléporte votre héros derrière la cible',
        element: 'wind',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : ARCHER',         
            },{
                description:'+15% CC à ce sort',
            }
        ]
    },{
        value: 'poing-fulgurant',
        label: `Poing Fulgurant`,
        classes: 'cra',
        hero:'voldorak-vo',
        description:'Inflige 25 dégâts magiques à un adversaire aligné. COMBO : +10 dégâts magiques',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Déclenche EXPLOSION (8)',         
            },{
                description:'+15% CC à ce sort',
            }
        ]
    },{
        value: 'poing-turbulent',
        label: `Poing Turbulent`,
        classes: 'cra',
        hero:'voldorak-vo',
        description:'Inflige 30 dégâts magiques à un adversaire aligné. COMBO : REPOUSSE la cible de 2 cases',
        element: 'wind',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Déclenche REBOND (10)',         
            },{
                description:'+15% CC à ce sort',
            }
        ]
    },{
        value: 'bruler',
        label: `Brûler`,
        classes: 'iop',
        hero:'',
        description:'Inflige 7 dégâts magiques. Si la cible est HUILÉE : +1 AURA ÉPÉE DE FEU à votre héros',
        element: 'fire',
        cost: 2,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +1 AURA ÉPÉE DE FEU',         
            },{
                description:'+15% CC à ce sort',
            }
        ]   
    },{
        value: 'fulgur',
        label: `Fulgur`,
        classes: 'iop',
        hero:'',
        description:'Inflige 14 dégâts magiques. MÊLÉE : +5% de RIPOSTE à votre héros jusqu’à son prochain tour',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Inflige 30% des dégâts magiques autour de la cible',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'masser',
        label: `Masser`,
        classes: 'iop',
        hero:'',
        description:'Inflige 10 dégâts magiques et applique HUILÉ',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Piochez 1 sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'charge-explosive',
        label: `Charge Explosive`,
        classes: 'iop',
        hero:'',
        description:'Votre héros CHARGE un personnage aligné jusqu’à 3 cases et lui inflige 29 dégâts magiques',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Déclenche EXPLOSION (8)',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'corriger',
        label: `Corriger`,
        classes: 'iop',
        hero:'',
        description:'Inflige 18 dégâts magiques. S’il y a au moins 1 adversaire autour de votre héros : +1 AURA ÉPÉE DE FEU',
        element: 'fire',
        cost: 5,
        gift_ap: 1,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +1 Jauge FEU',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'inspiration',
        label: `Inspiration`,
        classes: 'iop',
        hero:'',
        description:'Inflige 21 dégâts magiques. Si la cible est HUILÉE : Déclenche EXPLOSION(13)',
        element: 'fire',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'25% aux dégâts d’EXPLOSION',
            },{
                description:'CRITIQUE : +50% aux DÉGÂTS de ce sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'blamer',
        label: `Blâmer`,
        classes: 'iop',
        hero:'',
        description:'Inflige 26 dégâts magiques et applique HUILÉ',
        element: 'fire',
        cost: 6,
        gift_ap: 1,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Piochez 1 sort. +25% aux dégâts de votre prochain sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'fievre',
        label: `Fièvre`,
        classes: 'iop',
        hero:'bouvaloir-orok',
        description:'Inflige 17 dégâts magiques. +50% aux dégâts de votre prochain sort de CHARGE',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux dégâts de votre prochain sort de CHARGE',
            },{
                description:'CRITIQUE : Piochez votre prochain sort de CHARGE',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'accalmie',
        label: `Accalmie`,
        classes: 'iop',
        hero:'bouvaloir-orok',
        description:'Inflige 14 dégâts magiques aux adversaires adjacents à votre héros',
        element: 'wind',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Piochez votre prochain sort de CHARGE',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'brulure-revigorante',
        label: `Brûlure Revigorante`,
        classes: 'iop',
        hero:'glaive-stalaktoss',
        description:'Inflige 19 dégâts magiques. Si votre héros est DÉPHASÉ : +50% de DRAIN pour le tour',
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'50% de DRAIN pour le tour',
            },{
                description:'CRITIQUE : +50% aux DÉGÂTS de ce sort',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'trouble',
        label: `Trouble`,
        classes: 'iop',
        hero:'glaive-stalaktoss',
        description:'Inflige 8 dégâts magiques. Si votre héros est DÉPHASÉ : REPOUSSE de 1 case',
        element: 'wind',
        cost: 2,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'REPOUSSE la cible de 1 case supplémentaire',
            },{
                description:'CRITIQUE : Ce sort revient dans votre main',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'brulure-spectrale',
        label: `Brûlure Spectrale`,
        classes: 'iop',
        hero:'lamarguedon-spectral',
        description:'Téléporte votre ÂME SPECTRALE sur une case autour de votre héros. Elle inflige 13 dégâts magiques autour d’elle',
        element: 'fire',
        cost: 6,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +25% à l’AT de votre héros pour le tour',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'prise-spectrale',
        label: `Prise Spectrale`,
        classes: 'iop',
        hero:'lamarguedon-spectral',
        description:'Inflige 11 dégâts magiques aux adversaires autour de votre héros, puis échange sa position avec celle de votre ÂME SPECTRALE',
        element: 'wind',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Inflige 50% de l’AT de votre ÂME SPECTRALE autour d’elle',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'estoc-detonant',
        label: `Estoc Détonant`,
        classes: 'iop',
        hero:'flamboyante-kasai',
        description:'Inflige 26 dégâts magiques. Si la cible est HUILÉE : Déclenche EXPLOSION (13)',
        element: 'fire',
        cost: 5,
        gift_ap: 1,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Applique HUILÉ',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'estoc-tonnerre',
        label: `Estoc Tonnerre`,
        classes: 'iop',
        hero:'flamboyante-kasai',
        description:'Inflige 30 dégâts magiques à un adversaire adjacent. Si la cible est ÉVENTÉE : Déclenche REBOND(10)',
        element: 'wind',
        cost: 6,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Applique ÉVENTÉ',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'touche-huilee',
        label: `Touche Huilée`,
        classes: 'iop',
        hero:'justelame-brutale',
        description:'Inflige 12 dégâts magiques. MÊLÉE : Inflige 15% de dégâts magiques autour de votre héros',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Déclenche EXPLOSION (8)',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'touche-venteuse',
        label: `Touche Venteuse`,
        classes: 'iop',
        hero:'justelame-brutale',
        description:'Inflige 20 dégâts magiques. MÊLÉE : +15% aux DÉGÂTS de ce sort',
        element: 'wind',
        cost: 6,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Déclenche REBOND (10)',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'cure-alternative',
        label: `Cure Alternative`,
        classes: 'eniripsa',
        hero:'',
        description:'Inflige 7 dégâts magiques. VOL DE VIE.',
        element: 'fire',
        cost: 2,
        gift_ap: 2,
        load: 0,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +25% d'AT à vos personnages pour le tour`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'premiere-cure-caustique',
        label: `Première Cure Caustique`,
        classes: 'eniripsa',
        hero:'',
        description:'Inflige 3 dégâts magiques et applique HUILÉ',
        element: 'fire',
        cost: 2,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Déclenche EXPLOSION (8)`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'cure-devorante',
        label: `Cure Dévorante`,
        classes: 'eniripsa',
        hero:'',
        description:'Soigne un allié de 9 PV et inflige 6 dégâts magiques à un adversaire autour de lui. SOUTIEN : +8 dégâts magiques',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +50% aux SOINS CC de ce sort`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'cure-incandescente',
        label: `Cure Incandescente`,
        classes: 'eniripsa',
        hero:'',
        description:`Inflige 9 dégâts magiques. +50% d'AT à un de vos compagnons pour le tour`,
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Déclenche EXPLOSION (8)`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'cure-corrosive',
        label: `Cure Corrosive`,
        classes: 'eniripsa',
        hero:'',
        description:`Inflige 28 dégâts magiques. Si la cible est HUILÉE : +1 Jauge FEU`,
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Déclenche EXPLOSION (8)`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'laboratoire-de-flamme',
        label: `Laboratoire De Flamme`,
        classes: 'eniripsa',
        hero:'',
        description:`Construit un LABORATOIRE DE FLAMME jusqu'à 2 cases de votre héros. Détruit votre précédent LABORATOIRE DE FLAMME`,
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'APPARITION : +50% de BL à votre LABORATOIRE DE FLAMME',
            },{
                description:`CRITIQUE : +1 AURA CŒUR DE FLAMME`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'cure-fulgurante',
        label: `Cure Fulgurante`,
        classes: 'eniripsa',
        hero:'',
        description:`Inflige 27 dégâts magiques`,
        element: 'fire',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Déclenche EXPLOSION (8)`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'coupe-saignante',
        label: `Coupe Saignante`,
        classes: 'eniripsa',
        hero:'scalpel-de-l-apostruker',
        description:`Inflige 9 dégâts magiques. VOL DE VIE`,
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +1 AURA CŒUR DE FLAMME`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'coupe-mordante',
        label: `Coupe Mordante`,
        classes: 'eniripsa',
        hero:'scalpel-de-l-apostruker',
        description:`Inflige 27 dégâts magiques à l'adversaire ayant le plus de PV et soigne de 7 PV les alliés adjacents`,
        element: 'wind',
        cost: 5,
        gift_ap: 1,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +1 AURA CŒUR DE VENT`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'phase-enivrante',
        label: `Phase Enivrante`,
        classes: 'eniripsa',
        hero:'gemme-dephasante',
        description:`Inflige 20 dégâts magiques. Si votre héros est DÉPHASÉ : inflige 8 dégâts magiques aux adversaires autour de la cible`,
        element: 'fire',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +50% d'AT à vos personnages pour le tour`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'phase-petulante',
        label: `Phase Pétulante`,
        classes: 'eniripsa',
        hero:'gemme-dephasante',
        description:`Inflige 14 dégâts magiques. Si votre héros est DÉPHASÉ : Échange sa position avec celle de la cible`,
        element: 'wind',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Ce sort revient dans votre main`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'faveur-nocturne',
        label: `Faveur Nocturne`,
        classes: 'eniripsa',
        hero:'ambre-tamashi',
        description:`Inflige 20 dégâts magiques aux adversaires autour d'un de vos NOCTURIEN, puis le sacrifie`,
        element: 'fire',
        cost: 5,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Le NOCTURIEN déclenche EXPLOSION (8)`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'liaison-nocturne',
        label: `Liaison Nocturne`,
        classes: 'eniripsa',
        hero:'ambre-tamashi',
        description:`Échange la position de votre héros avec celle d'un NOCTURIEN allié. Inflige 21 dégâts magiques à un adversaire adjacent au NOCTURIEN`,
        element: 'wind',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Le NOCTURIEN déclenche REBOND (10)`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'kokoro-brulant',
        label: `Kokoro Brûlant`,
        classes: 'eniripsa',
        hero:'pinceau-kokoro',
        description:`Inflige 12 dégâts magiques aux adversaires autour d'un allié. SOUTIEN : VOL DE VIE`,
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +1 Jauge Feu`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'kokoro-vaporeux',
        label: `Kokoro Vaporeux`,
        classes: 'eniripsa',
        hero:'pinceau-kokoro',
        description:`Infligé 28 dégâts magiques à un adversaire adjacent à un allié. SOUTIEN : déclenche REBOND (10)`,
        element: 'wind',
        cost: 6,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +1 Jauge Air`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'aiguillon-perforant',
        label: `Aiguillon Perforant`,
        classes: 'eniripsa',
        hero:'lame-voracius',
        description:`Inflige 24 dégâts magiques. Si la cible est HUILÉE : +15 dégâts magiques`,
        element: 'fire',
        cost: 4,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Applique HUILÉ`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'aiguillon-turbulent',
        label: `Aiguillon Turbulent`,
        classes: 'eniripsa',
        hero:'lame-voracius',
        description:`Inflige 34 dégâts magiques à un adversaire adjacent à votre héros. Si la cible est ÉVENTÉE : la REPOUSSE de 3 cases`,
        element: 'wind',
        cost: 6,
        gift_ap: 0,
        load: 2,
        gifts: [
            {
                description:'30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Apllique ÉVENTÉ`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    }
]