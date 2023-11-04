const sections = [
    {
        id: 1,
        title: 'Insira alguns dados básicos',
        textInputs: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email'
            }
        ]
    },
    {
        id: 2,
        title: 'Agora mais alguns dados sobre você',
        textInputs: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            }
        ]
    },
    {
        id: 3,
        title: 'Para finalizar, quais são os seus planos?',
        checkbox: [
            {
                id: 1,
                value: 'Sul america'
            },
            {
                id: 2,
                value: 'Unimed'
            }
        ]
    }
];

export { sections }