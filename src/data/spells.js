export default [
    {
        value: 'fleche-affligeante',
        label: `Flèche Affligeante`,
        classes: 'cra',
        hero:'',
        description:'Inflige 6 dégâts magiques. COMBO : +1 AURA MIRE ARDENTE à votre héros.',
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
        description:'Inflige 14 dégâts magiques et applique HUILÉ.',
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
                description:'CRITIQUE : Déclenche EXPLOSION (8).',         
            },{
                description: '+15% CC à ce sort',
            }
        ]
    },{
        value: 'bruler',
        label: `Brûler`,
        classes: 'iop',
        hero:'',
        description:'Inflige 7 dégâts magiques. Si la cible est HUILÉE : +1 AURA ÉPÉE DE FEU à votre héros.',
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
        description:'Inflige 14 dégâts magiques. MÊLÉE : +5% de RIPOSTE à votre héros jusqu’à son prochain tour.',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Inflige 30% des dégâts magiques autour de la cible.',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'masser',
        label: `Masser`,
        classes: 'iop',
        hero:'',
        description:'Inflige 10 dégâts magiques et applique HUILÉ.',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : Piochez 1 sort.',         
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
                description:`CRITIQUE : +25% d'AT à vos personnages pour le tour.`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'premiere-cure-caustique',
        label: `Première Cure Caustique`,
        classes: 'eniripsa',
        hero:'',
        description:'Inflige 3 dégâts magiques et applique HUILÉ.',
        element: 'fire',
        cost: 2,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : Déclenche EXPLOSION (8).`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    },{
        value: 'cure-devorante',
        label: `Cure Dévorante`,
        classes: 'eniripsa',
        hero:'',
        description:'Soigne un allié de 9 PV et inflige 6 dégâts magiques à un adversaire autour de lui. SOUTIEN : +8 dégâts magiques.',
        element: 'fire',
        cost: 3,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:`CRITIQUE : +50% aux SOINS CC de ce sort.`,         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    }
]