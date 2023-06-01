const bcrypt = require('bcryptjs');
const productapi = {
    users: [
        {
            name: "tauseef",
            email: "ahmedtausef98@gmail.com",
            password: bcrypt.hashSync('m24alpha'),
            isAdmin: true
        },
        {
            name: "maria",
            email: "maria98@gmail.com",
            password: bcrypt.hashSync('maria98@'),
            isAdmin: false
        }
    ],

    products: [
        {
            // _id: '1',
            name: "rolex",
            slug: "rolex",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830668/onlineShop/product/productbig9_mwf9lq.jpg",
            category: "Automatic Watches",
            desc: "2.1inch dial",
            price: 5000,
            countInStock: 10,
            rating: 4,
            reviews: 250,


        },
        {
            // _id: '2',
            name: "Timex",
            slug: "Timex",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830667/onlineShop/product/productbig12_zbwzvr.jpg",
            category: "Automatic Watches",
            desc: "2.1inch dial",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {
            // _id: '3',
            name: "Seiko",
            slug: "Seiko",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830667/onlineShop/product/productbig11_yuethq.jpg",
            category: "Automatic Watches",
            desc: "2.1inch dial",
            price: 5000,
            countInStock: 10,
            rating: 3,
            reviews: 250,

        },
        {
            // _id: '4',
            name: "Tissot",
            slug: "Tissot",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830667/onlineShop/product/productbig10_odu9gx.jpg",
            category: "Digital Watches",
            desc: "2.1inch dial with diamond feel",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,
        },
        {
            // _id: '5',
            name: "TimexEasy Reader watch",
            slug: "TimexEasy Reader watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830665/onlineShop/product/product37_qeskg4.jpg",
            category: "Digital Watches",
            desc: "3.1inch dial good display",
            price: 5000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },
        {
            // _id: '6',
            name: "Orient",
            slug: "Orient",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830665/onlineShop/product/product36_q44ifs.jpg",
            category: "Hybrid Watches",
            desc: "2.1inch dial",
            price: 9000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },

        {
            // _id: '7',
            name: "Headphone",
            slug: "Headphone",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830666/onlineShop/product/product43_q5htim.jpg",
            category: "Wireless",
            desc: "Sony LinkBuds S Truly Wireless.",
            price: 9000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },
        {
            // _id: '8',
            name: "Tissot Tradition",
            slug: "Tissot Tradition",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830666/onlineShop/product/product46_e0jym3.jpg",
            category: "Noise-cancelling",
            desc: "Sennheiser. Sennheiser HD 800",
            price: 9000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },
        {
            // _id: '9',
            name: "JBL speaker",
            slug: "JBL speaker",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830665/onlineShop/product/product41_u7s39y.jpg",
            category: "Earbuds (In-ear)",
            desc: "Audio-Technica ATH-M50x",
            price: 9000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },
        // ===================================================================================================//

        {
            // _id: '10',
            name: "Wing chair",
            slug: "Wing chair",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830669/onlineShop/product/productbig5_zfqqth.jpg",
            category: "chair",
            desc: "relaxing Chair smooth Fabric",
            price: 19000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },

        {
            // _id: '11',
            name: "Executive chair",
            slug: "Executive chair",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830668/onlineShop/product/productbig6_ijj2gg.jpg",
            category: "chair",
            desc: "Executive chair smooth Fabric",
            price: 19000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },

        {
            // _id: '12',
            name: "Medical table",
            slug: "Medical table",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1675830668/onlineShop/product/productbig8_c6dkoc.jpg",
            category: "table",
            desc: "Vaunn Medical Adjustable Overbed Bedside Table With Wheel",
            price: 19000,
            countInStock: 10,
            rating: 4,
            reviews: 250,
        },

        {
            // _id: '13',
            name: "Crystal Embellished Watch",
            slug: "Crystal Embellished Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172630/watches/watches/w9_klp7ue.jpg",
            category: "watch",
            desc: "BLACK/GOLD CRYSTAL CHRONO-LOOK DIA",
            price: 5000,
            countInStock: 10,
            rating: 4,
            reviews: 250,

        },

        {
            // _id: '14',
            name: "Multi-Function Quartz Watch",
            slug: "Multi-Function Quartz Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172629/watches/watches/w10_tvovcr.jpg",
            category: "watch",
            desc: "silhouettes and cutting-edge design",
            price: 5000,
            countInStock: 10,
            rating: 4,
            reviews: 250,

        },
        {
            // _id: '15',
            name: "GUESS Men's Classic Black",
            slug: "GUESS Men's Classic Black",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172628/watches/watches/810pWjoKV2L._AC_UY741__kqdipt.jpg",
            category: "watch",
            desc: "ENAMEL BLACK DIAMOND DIAL",
            price: 80000,
            countInStock: 9,
            rating: 5,
            reviews: 250,

        },
        {
            // _id: '16',
            name: "Sport Men's Digital watch",
            slug: "Sport Men's Digital watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172629/watches/watches/w12_y3gm6p.jpg",
            category: "watch",
            desc: "Gold-tone resin case ring",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {
            // _id: '17',
            name: "Diesel Men's Quartz Watch",
            slug: "Diesel Men's Quartz Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172629/watches/watches/w4_wh6xcn.jpg",
            category: "watch",
            desc: " stainless steel iridescent black dial;",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {
            // _id: '18',
            name: "Timex Men's Expedition Watch",
            slug: "Timex Men's Expedition Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172629/watches/watches/w11_who5pr.jpg",
            category: "watch",
            desc: "Adjustable green 20 millimeter nylon strap;",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {
            // _id: '19',
            name: "Quartz Chronograph Watch",
            slug: "Quartz Chronograph Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172629/watches/watches/w1_yfsdlk.jpg",
            category: "watch",
            desc: " quartz movement chronograph analog display",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {    // _id: '20',
            name: "Invicta Men's Diver Quartz Watch",
            slug: "Invicta Men's Diver Quartz Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172630/watches/watches/w3_t1dkj3.jpg",
            category: "watch",
            desc: " quartz movement chronograph analog display",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {    // _id: '21',
            name: "Fossil Men's Neutral Watch",
            slug: "Fossil Men's Neutral Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172629/watches/watches/w2_ergbgf.jpg",
            category: "watch",
            desc: "Timeless watch inspired mid-century",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {    // _id: '22',
            name: "Guess Crystal Embellished Watch",
            slug: "Guess Crystal Embellished Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172630/watches/watches/w9_klp7ue.jpg",
            category: "watch",
            desc: "GOLD-TONE CRYSTAL CHRONO-LOOK DIAL",
            price: 5000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },

        {    // _id: '23',
            name: "Michael Kors Watch",
            slug: "Michael Kors Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172630/watches/watches/w5_c9vd97.jpg",
            category: "watch",
            desc: "ICONIC BLUE DIAL",
            price: 30000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },
        {    // _id: '24',
            name: "Armitron Men's Watch",
            slug: "Armitron Men's Watch",
            image: "https://res.cloudinary.com/dgn5kcomn/image/upload/v1677172630/watches/watches/w6_xug0gk.jpg",
            category: "watch",
            desc: "ICONIC BLUE DIAL",
            price: 40000,
            countInStock: 10,
            rating: 5,
            reviews: 250,

        },

    ]
}

module.exports = productapi