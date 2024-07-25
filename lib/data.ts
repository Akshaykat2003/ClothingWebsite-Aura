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
    products:[ 
    {
        name:"Free-Shirt",
        slug:'free-shirt',
        category:'Shirts',
        image:'/images/shirt1.jpg',
        price:70,
        brand:'Nike',
        rating:4.5,
        numReviews:8,
        countInStock:20,
        description:'A popular shirt',
        isFeatured:true,
        banner: '/images/banner1.jpg',
    },
    {
        name:"Fit-Shirt",
        slug:'fit-shirt',
        category:'Shirts',
        image:'/images/shirt2.jpg',
        price:80,
        brand:'Adidas',
        rating:2.5,
        numReviews:10,
        countInStock:20,
        description:'A popular shirt',
        isFeatured:true,
        banner: '/images/banner2.jpg',

    },
    {
        name:"Slim-Shirt",
        slug:'Slim-shirt',
        category:'Shirts',
        image:'/images/shirt3.jpg',
        price:90,
        brand:'Raymond',
        rating:4.5,
        numReviews:3,
        countInStock:20,
        description:'A popular shirt',
        
    },
    {
        name:"golf-Pants",
        slug:'golf-Pants',
        category:'Pants',
        image:'/images/pants1.jpg',
        price:95,
        brand:'Zara',
        rating:4.5,
        numReviews:3,
        countInStock:20,
        description:'A popular Pants',
    },
    {
        name:"Fit-Pants",
        slug:'Fit-Pants',
        category:'Pants',
        image:'/images/pants2.jpg',
        price:95,
        brand:'Levis',
        rating:4.5,
        numReviews:10,
        countInStock:20,
        description:'A popular Pants',
    },

    {
        name:"classic-Pants",
        slug:'classic-Pants',
        category:'Pants',
        image:'/images/pants3.jpg',
        price:95,
        brand:'Casely',
        rating:4.5,
        numReviews:10,
        countInStock:20,
        description:'A popular Pants',
    },



]
}

export default data;