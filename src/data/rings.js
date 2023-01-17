export default [
    { 
        value: 'ann-eau',
        label: `Ann'Eau`,
        description:'Quand vous invoquez un compagnon : +1 PA en réserve.',
        rare: 'Commun',
        stats: [
            {
                value: 2,
                description:'Magie Eau',    
            }
        ],
        gifts: [
            {
                value: 5,
                description:'Sagesse',
            },{
                value: 5,
                description:'de CC Magiques',         
            }
        ]
    },
    {
        value: 'anneau-bstine',
        label: `Anneau Bstiné`,
        description:'GRIMOIRE (12) : Confère 25% de PUISSANCE à votre héros.',
        rare: 'Commun',
        stats: [
            {
                value: 1,
                description:'Vitalité',    
            },{
                value: 1,
                description:'Puissance',    

            },{
                value: 1,
                description:'Auras',   
            }
        ],
        gifts: [
            {
                value: 10,
                description:'Puissance Compagnons',
            },{
                value: 5,
                description:'Gains Kamas',         
            }
        ]
    }
]