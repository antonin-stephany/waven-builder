export default [
    {
        value: 'fleche-affligeante',
        label: `Flèche Affligeante`,
        classes: 'cra',
        hero:'',
        description:'Inflige 6 dégâts magiques. COMBO : +1 AURA MIRE ARDENTE à votre héros.',
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
        value: 'bruler',
        label: `Brûler`,
        classes: 'iop',
        hero:'',
        description:'Inflige 7 dégâts magiques. Si la cible est HUILÉE : +1 AURA ÉPÉE DE FEU à votre héros.',
        cost: 2,
        gift_ap: 0,
        load: 1,
        gifts: [
            {
                description:'+30% aux DÉGÂTS de ce sort',
            },{
                description:'CRITIQUE : +1 AURA ÉPÉE DE FEU',         
            },{
                description: '+15% CC à ce sort',
            }
        ]   
    }
]