import bcrypt from "bcryptjs"

const data ={

    users:[
        {
            name:'Akshay',
            email:'admin1@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        },

        {
            name:'John',
            email:'user@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false,
        },
    ],
    products: [
        {
            name: "Free-Shirt",
            slug: 'free-shirt-1', // Updated slug
            category: 'Shirts',
            image: '/images/banner1.jpg',
            price: 700,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner1.jpg',
        },
        {   
            name: "Flexible-Shirt",
            slug: 'free-shirt-2', // Updated slug
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 1199,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: "Fit-Shirt",
            slug: 'fit-shirt-3',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 899,
            brand: 'Adidas',
            rating: 2.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner2.jpg',
        },
        {
            name: "Slim-Shirt",
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 1999,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner3.jpg',
        },
        {
            name: "Golf-Pants",
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 999,
            brand: 'Zara',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A popular Pants',
        },
        {
            name: "Fit-Pants",
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 799,
            brand: 'Levis',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular Pants',
        },
        {
            name: "Classic-Pants",
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 1299,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular Pants',
        },
        // New Product
        {
            name: "cargo-pants",
            slug: 'cargo-pants',
            category: 'pants',
            image: '/images/pants4.jpeg',
            price: 1299,
            brand: 'zara',
            rating: 4.0,
            numReviews: 7,
            countInStock: 30,
            description: 'A popular pants',
        }
    ]
}

export default data;