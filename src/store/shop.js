export default {
    state: {
        shopList: [
            {
                id: 1, 
                title: 'Nike Red', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/1.png'),
                gallery: [
                    {
                        name: 'Nike boots First',
                        img: require('../assets/img/1.png'),
                    },
                    {
                        name: 'Nike boots Second',
                        img: require('../assets/img/2.png'),
                    },
                    {
                        name: 'Nike boots Third',
                        img: require('../assets/img/3.png'),
                    },
                    
                ],
            },
            {
                id: 2, 
                title: 'Adidas', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/4.png'),
                gallery: [
                    {
                        name: 'Adidas boots First',
                        img: require('../assets/img/4.png'),
                    },
                    {
                        name: 'Adidas boots Second',
                        img: require('../assets/img/5.png'),
                    },
                    {
                        name: 'Adidas boots Third',
                        img: require('../assets/img/6.png'),
                    },
                    
                ],
            },
            {
                id: 3, 
                title: 'Levis', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/7.png'),
                gallery: [
                    {
                        name: 'Levis boots First',
                        img: require('../assets/img/7.png'),
                    },
                    {
                        name: 'Levis boots Second',
                        img: require('../assets/img/8.png'),
                    },
                    {
                        name: 'Levis boots Third',
                        img: require('../assets/img/9.png'),
                    },
                    
                ],
            },
            {
                id: 4, 
                title: 'Puma', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/10.png'),
                gallery: [
                    {
                        name: 'Puma boots First',
                        img: require('../assets/img/10.png'),
                    },
                    {
                        name: 'Puma boots Second',
                        img: require('../assets/img/11.png'),
                    },
                    {
                        name: 'Puma boots Third',
                        img: require('../assets/img/12.png'),
                    },
                    
                ],
            },

            {
                id: 5, 
                title: 'Reggi', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/1.png'),
                gallery: [
                    {
                        name: 'Puma boots First',
                        img: require('../assets/img/1.png'),
                    },
                    {
                        name: 'Puma boots Second',
                        img: require('../assets/img/2.png'),
                    },
                    {
                        name: 'Puma boots Third',
                        img: require('../assets/img/3.png'),
                    },
                    
                ],
            },

            {
                id: 6, 
                title: 'Fendi', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/9.png'),
                gallery: [
                    {
                        name: 'Puma boots First',
                        img: require('../assets/img/9.png'),
                    },
                    {
                        name: 'Puma boots Second',
                        img: require('../assets/img/10.png'),
                    },
                    {
                        name: 'Puma boots Third',
                        img: require('../assets/img/11.png'),
                    },
                    
                ],
            },

            {
                id: 7, 
                title: 'Kotlin', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/8.png'),
                gallery: [
                    {
                        name: 'Puma boots First',
                        img: require('../assets/img/8.png'),
                    },
                    {
                        name: 'Puma boots Second',
                        img: require('../assets/img/7.png'),
                    },
                    {
                        name: 'Puma boots Third',
                        img: require('../assets/img/6.png'),
                    },
                    
                ],
            },

            {
                id: 8, 
                title: 'Joja', 
                descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati et corporis eaque aspernatur! Quod at amet omnis minus sequi officia et laboriosam, quidem, quae accusamus nemo nulla autem saepe.',
                img: require('../assets/img/3.png'),
                gallery: [
                    {
                        name: 'Puma boots First',
                        img: require('../assets/img/3.png'),
                    },
                    {
                        name: 'Puma boots Second',
                        img: require('../assets/img/4.png'),
                    },
                    {
                        name: 'Puma boots Third',
                        img: require('../assets/img/5.png'),
                    },
                    
                ],
            },
        ],
    },
    mutations: {
       
    }, 
    actions: {
        
    },
    getters: {
        getShopList (state) {
            return state.shopList;
        },

        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id);
        },

    },
}

