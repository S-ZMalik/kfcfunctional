import { FaPhoneAlt } from "react-icons/fa";
import {logo, delivery, navcup, pickup, hero1, hero2, hero3, hero4, hero5, hero6, everyday, Ala, midnight, promotion, sharing, snacks, signature, sell1, sell2, sell3, sell4, deal1, deal2, deal3, deal4, big1, app, google, side1, side2, side3, aboutfact1, aboutfact2, aboutfact3, aboutfact4, aboutbig1, aboutbig2, aboutbig3, aboutbig4, bhooke1, bhooke2, bhooke3, blog1, blog2, blog3, blog4, blog5, blog6, like1, like2, like3, like4, like5, like6, like7, like8, like9, like10, everyday5, sharing2, boxes7, combo2} from "../assets";
import { FaLocationDot } from "react-icons/fa6";

export const heroData = [
    hero1,
    hero2, 
    hero3,
    hero4,
    hero5,
    hero6
]

export const exploreData = [
    {
        id: Math.random(),
        img: everyday,
        title: "Everyday Values",
        link: '/explore-menu#section1' 
    },
    {
        id: Math.random(),
        img: Ala,
        title: "Ala-Carte-&-Combos",
        link: '/explore-menu#section2'  
    },
    {
        id: Math.random(),
        img: promotion,
        title: "Promotion",
        link: '/explore-menu#section3'  
    },
    {
        id: Math.random(),
        img: signature,
        title: "Signature Boxes",
        link: '/explore-menu#section4'  
    },
    {
        id: Math.random(),
        img: sharing,
        title: "Sharing",
        link: '/explore-menu#section5'  
    },
    {
        id: Math.random(),
        img: snacks,
        title: "Snacks-&-Beverages",
        link: '/explore-menu#section6'  
    },
    {
        id: Math.random(),
        img: midnight,
        title: "Midnight(Start at 12am)",
        link: '/explore-menu#section7'  
    }
]

export const sellerData = [
    {
        id: Math.random(),
        heading: "Krunch Burger",
        price: 290,
        img: sell1,
    },
    {
        id: Math.random(),
        heading: "Krunch Combo",
        price: 550,
        img: sell2,
    },
    {
        id: Math.random(),
        heading: "Home Wings Bucket",
        price: 650,
        img: sell3,
    },
    {
        id: Math.random(),
        heading: "Mighty Zinger",
        price: 730,
        img: sell4,
    }
]

export const dealData = [
    {
        id: Math.random(),
        img: everyday5,
        title: "Twister Combo",
        desc: "Twister + 1 Regular fries + 1 Regular drink",
        price: 390,
        quantity: 1,
        addWish: true
      },
      {
        id: Math.random(),
        img: combo2,
        title: "Zinger Stacker",
        desc: "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a sesame seed bun",
        price: 620,
        quantity: 1,
        addWish: true
      },
      {
        id: Math.random(),
        img: boxes7,
        title: "Crispy Duo Box",
        desc: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
        price: 1290,
        quantity: 1,
        addWish: true
      },
      {
        id: Math.random(),
        img: sharing2,
        title: "Family Festival 3",
        desc: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
        price: 2490,
        addWish: true,
        quantity: 1,
      }
]

// export const dealData = [
//     {
//         id: Math.random(),
//         img: deal1,
//         heading: "Twister Combo",
//         title: "Twister + 1 Regular fries + 1 Regular drink",
//         price: "670",
//         addWish: true
//     },
//     {
//         id: Math.random(),
//         img: deal2,
//         heading: "Zinger Stacker Combo",
//         title: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
//         price: "890",
//         addWish: true
//     },
//     {
//         id: Math.random(),
//         img: deal3,
//         heading: "Crispy Duo Box",
//         title: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
//         price: "1290",
//         addWish: true
//     },
//     {
//         id: Math.random(),
//         img: deal4,
//         heading: "Family Festival 3",
//         title: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
//         price: "2490",
//         addWish: true
//     }
// ]

export const sidebarTop = [
  {
    id: Math.random(),
    img: side1,
    list: "Store Locator",
    href: "/storeLocator"
  },
  {
    id: Math.random(),
    img: side2,
    list: "Track Order",
    href: "/trackorder"
  },
  {
    id: Math.random(),
    img: side3,
    list: "Explore Menu",
    href: "/explore-menu"
  }
]

// export const sideBarList = [
//     "About Us",
//     "FeedBack",
//     "Terms & Conditions",
//     "Privacy Policy",
//     "Contact Us",
//     "Mitao Bhook",
//     'Mitao bhook - Scholarship',
//     "Careers"
// ]
export const sideBarList = [
    {
        id: Math.random(),
        list: "About Us",
        href: "/about"
    },
    {
        id: Math.random(),
        list: "FeedBack",
        href: "/feedback"
    },
     {
        id: Math.random(),
        list: "Terms & Conditions",
        href: "/termsconditions"
    },
    {
        id: Math.random(),
        list: "Privacy Policy",
        href: "/privacy"
    },
    {
        id: Math.random(),
        list: "Contact Us",
        href: "/contact"
    },
    {
        id: Math.random(),
        list: "Mitao Bhook",
        href: "/mitao-bhook"
    },
    {
        id: Math.random(),
        list: "Mitao bhook - Scholarship",
        href: "/scholarship"
    },
    {
        id: Math.random(),
        list: "Careers",
        href: "/careers"
    }
]


export const basketData = [
    {
        id: Math.random(),
        year: "1890",
        para: "Herland Sanders was born"
    },
    {
        id: Math.random(),
        year: "1930",
        para: "Sanders Court & Cafe was opened in front of his gas station in Corbin Kentucky"
    },
    {
        id: Math.random(),
        year: "1940",
        para: "Colonel Sanders develops the Original Recipe from 11 secret herbs and spices"
    },
    {
        id: Math.random(),
        year: "1952",
        para: "The Colonel begins franchising his business travelling from town to town and cooking for restaurant owners"
    },
    {
        id: Math.random(),
        year: "1957",
        para: "Kentucky Fried Chicken is first sold in buckets"
    },
    {
        id: Math.random(),
        year: "1964",
        para: "More than 600 franchised outlets in the USA, Canda and UK"
    },
    {
        id: Math.random(),
        year: "1974",
        para: "KFC first launches in Kuwait"
    },
    {
        id: Math.random(),
        year: "1980",
        para: "Colonel Sanders passes away at the age of 90. His legacy lives on."
    },
    {
        id: Math.random(),
        year: "Today",
        para: "Today we have more than 25,000 KFC restaurants in over 145 countries and territories around the world."
    }
]

export const aboutFact = [
   {
    id: Math.random(),
    img: aboutfact1,
    year: "1997",
    para: "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi."
   },
   {
    id: Math.random(),
    img: aboutfact2,
    year: "128",
    para: "Today KFC has grown to over 128 restaurants across the country."
   },
   {
    id: Math.random(),
    img: aboutfact3,
    year: "8",
    para: "Giving back to the community, KFC runs 9 restaurants operated by deaf, Hearing With Heart team members."
   },
   {
    id: Math.random(),
    img: aboutfact4,
    year: "9000 +",
    para: "Our Finger Lickin’ Chicken is brought to you by the hardwork of a team of 9000+ people across Pakistan"
   }
]

export const aboutColData = [
    {
        id: Math.random(),
        img: aboutbig1,
        para: "Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students"
    },
    {
        id: Math.random(),
        img: aboutbig2,
        para: "Proudly running the Deaf Reach KFC Campus and providing education and training to 340 deaf students"
    },
    {
        id: Math.random(),
        img: aboutbig3,
        para: "Sponsoring higher education of 200+ students across HEC recognized universities in Pakistan"
    },
    {
        id: Math.random(),
        img: aboutbig4,
        para: "Supporting TEGS – KFC Campus to provide quality education to students in Lahore"
    }
]

export const bhookData = [
    bhooke1,
    bhooke2,
    bhooke3
]

export const careerBlogData = [
    {
        id: Math.random(),
        img: blog1,
        heading: "Believe in All People",
        para: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do."
    },
    {
        id: Math.random(),
        img: blog2,
        heading: "Recognize",
        para: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do."
    },
    {
        id: Math.random(),
        img: blog3,
        heading: "Run Great Restaurants",
        para: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do."
    },
    {
        id: Math.random(),
        img: blog4,
        heading: "Go for Breakthrough",
        para: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do."
    },
    {
        id: Math.random(),
        img: blog5,
        heading: "Build Know How",
        para: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do."
    },
    {
        id: Math.random(),
        img: blog6,
        heading: "Work as a Team",
        para: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do."
    }
]

export const bucketData = [
    {
        id: Math.random(),
        img: like1,
        title: "One Piece Chicken (One Piece)",
        price: 290,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like2,
        title: "Hot Shots (9 Pcs)",
        price: 450,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like3,
        title: "Spicy Nuggets (6 Pcs)",
        price: 530,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like4,
        title: "Hot Wings Bucket (10 Pcs)",
        price: 650,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like5,
        title: "Corn On The Cob (1 Pc)",
        price: 270,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like6,
        title: "Coleslaw (Coleslaw)",
        price: 120,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like7,
        title: "Dinner Roll (1 Pc)",
        price: 50,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like8,
        title: "One Piece Chicken (One Piece)",
        price: 290,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like9,
        title: "7UP Regular (7UP Regular)",
        price: 150,
        quantity: 1
    },
    {
        id: Math.random(),
        img: like10,
        title: "Mountain Dew Regular (Regular)",
        quantity: 1,
        price: 290
    }
]