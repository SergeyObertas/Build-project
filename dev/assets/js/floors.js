const flatArray = [{
        id: 1,
        house: '3',
        floor: '1',
        rooms: '3',
        square: '84 м²',
        price: '1000$',
        priceTotal: '84000$',
        flatNumber: 1,
        status: 'booking',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 2,
        house: '3',
        floor: '1',
        rooms: '2',
        square: '63.3 м²',
        price: '1000$',
        priceTotal: '63300$',
        flatNumber: 2,
        status: 'sale',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 3,
        house: '3',
        floor: '1',
        rooms: '3',
        square: '81.9 м²',
        price: '1000$',
        priceTotal: '89900$',
        flatNumber: 3,
        status: 'sold',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 4,
        house: '3',
        floor: '1',
        rooms: '1',
        square: '50.4 м²',
        price: '1000$',
        priceTotal: '50400$',
        flatNumber: 4,
        status: 'discount',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 5,
        house: '3',
        floor: '1',
        rooms: '2',
        square: '67.1 м²',
        price: '1000$',
        priceTotal: '67100$',
        flatNumber: 5,
        status: 'free',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 6,
        house: '3',
        floor: '1',
        rooms: '1',
        square: '42.5 м²',
        price: '1000$',
        priceTotal: '42500$',
        flatNumber: 6,
        status: 'booking',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 7,
        house: '3',
        floor: '1',
        rooms: '1',
        square: '42.5 м²',
        price: '1000$',
        priceTotal: '42500$',
        flatNumber: 7,
        status: 'sold',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    },
    {
        id: 8,
        house: '3',
        floor: '1',
        rooms: '2',
        square: '61.3 м²',
        price: '1000$',
        priceTotal: '61300$',
        flatNumber: 8,
        status: 'free',
        descriprion: [{
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
            },
            {
                text: 'Lorem ipsum dolor sit amet.',
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ]
    }]


window.addEventListener('load', function() {

                                                
    document.querySelector('.floor-plan-page') ? installFloorplan() : null;

    function installFloorplan() {
        const flatInfo = document.querySelector('#flat-info')
        const flatGroup = document.querySelectorAll('.flat')
 
        console.table(flatInfo)

        function deleteActiveClass() {
            flatGroup.forEach(active => {
                active.classList.remove('active')
            })
        }

        const flatObj = [{
            id: 1,
            house: '34',
            floor: '1',
            rooms: '3',
            square: '84 м²',
            price: '1000$',
            priceTotal: '84000$',
            flatNumber: 1,
            status: 'booking',
            descriprion: [{
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, itaque.',
                },
                {
                    text: 'Lorem ipsum dolor sit amet.',
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error aut nihil doloremque. Corporis, similique.',
                },
                {
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                }
            ]
        },]
        
        const renderInfo = (flatInfoTemplate) => {
            const flatInformation = flatInfoTemplate.map(item =>{
                 return (`
                    <div class="flat-item flat-item--house">
                        Номер дома : <b id="house-number">${item.house}</b>
                    </div>
                    <div class="flat-item flat-item--floor">
                       Этаж: <b id="floor-number">${item.floor}</b>  
                    </div>
                    <div class="flat-item flat-item--rooms">
                       Кол-во комнат: <b id="rooms-quantity">${item.rooms}</b>
                    </div>
                    <div class="flat-item flat-item--square">
                      Площадб квартиры: <b id="flat-square">${item.square}</b> 
                    </div>
                    <div class="flat-item flat-item--price">
                        Цена за м²: <b id="price-meter">${item.price}</b>
                    </div>
                    <div class="flat-item flat-item--price-total">
                        Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
                    </div>
                    <div class="flat-item flat-item--number">
                        Номер квартиры: <b id="flat-number">${item.flatNumber}</b>
                    </div>
                    <div class="flat-item flat-item--status">
                        Статус квартиры: <b id="flat-status">${item.status}</b>
                    </div> 
                `)
            }).join("")


            flatInfo.innerHTML = flatInformation
        
        }

        renderInfo(flatObj)
        

        flatGroup.forEach(flat => {
            flat.addEventListener('click', () => {
                deleteActiveClass()
                flat.classList.add('active')


                let thisFlat = flat.getAttribute('data-number')
               

                let flatNumber = flatArray.filter(obj => obj.flatNumber.toString() === thisFlat)
                
                renderInfo(flatNumber)
            })
        })


    }
})