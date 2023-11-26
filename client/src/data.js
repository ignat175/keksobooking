const OFFER_TYPES = [
    {id: 1, name: 'Бунгало'},
    {id: 2, name: 'Квартира'},
    {id: 3, name: 'Отель'},
    {id: 4, name: 'Дом'},
    {id: 5, name: 'Дворец'},
];

const generateCard = () => ({
    author: {
        avatar: 'img/avatars/user04.png'
    },
    offer: {
        title: 'Квартира студия в престижном районе',
        address: 'Харлампиева, 42-65',
        price: 88000,
        type_id: OFFER_TYPES[0].id,
        rooms: 6,
        guests: 5,
        checkin: '7:00',
        checkout: '10:00',
        features: [
            'wifi',
            'washer',
            'elevator',
            'parking',
            'dishwasher',
            'conditioner'
        ],
        description: 'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
        photos: [
        ]
    },
    location: {
        lat: 35.66478515199194,
        lng: 139.7046871667523
    }
});

const generateCardList = (count) => {
    const cards = [];

    for (let i = 0; i < count; i++) {
        cards.push(generateCard());
    }

    return cards;
};

export {generateCardList};
