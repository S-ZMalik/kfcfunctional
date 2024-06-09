import { Si42 } from "react-icons/si";
import {
  boxes4,
  boxes5,
  boxes6,
  boxes7,
  boxes8,
  combo1,
  combo2,
  combo3,
  combo4,
  combo5,
  combo6,
  combo7,
  combo8,
  everyday1,
  everyday10,
  everyday11,
  everyday2,
  everyday3,
  everyday4,
  everyday5,
  everyday6,
  everyday7,
  everyday8,
  everyday9,
  midnight1,
  midnight2,
  midnight3,
  mirinda,
  mountain,
  pepsi,
  promotion1,
  promotion2,
  promotion3,
  sharing1,
  sharing2,
  sharing3,
  sharing4,
  snacks1,
  snacks10,
  snacks11,
  snacks12,
  snacks13,
  snacks15,
  snacks16,
  snacks17,
  snacks18,
  snacks19,
  snacks2,
  snacks20,
  snacks21,
  snacks22,
  snacks23,
  snacks24,
  snacks25,
  snacks26,
  snacks27,
  snacks28,
  snacks29,
  snacks3,
  snacks4,
  snacks5,
  snacks6,
  snacks8,
  snacks9,
  up,
  water,
} from "../assets";
import { exploreData } from "./data";

export const everdayData = [
  {
    id: Math.random(),
    img: everyday1,
    title: "Kruch Burger",
    desc: "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: 290,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday2,
    title: "Zingeratha",
    desc: "Tender boneless strips, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
    price: 370,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday3,
    title: "Rice & Spice",
    desc: "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
    price: 370,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday4,
    title: "Boneless Strips",
    desc: "3 Chicken strips for a hassle free boneless experience",
    price: 390,
    quantity: 1,
    addWish: true
  },
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
    img: everyday6,
    title: "Krunch Burger + Drink",
    desc: "1 Krunch burger + 1 Regular drink",
    price: 400,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday7,
    title: "Twister",
    desc: "Tender boneless strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla",
    price: 550,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday8,
    title: "Krunch Combo",
    desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink ",
    price: 570,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday9,
    title: "Krunch Chicken Combo",
    desc: "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 Regular drink",
    price: 590,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday10,
    title: "Chicken & Chips",
    desc: "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
    price: 650,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: everyday11,
    title: "3 Pcs Chicken",
    desc: "3 pieces of Hot and Crispy Fried Chicken",
    price: 670,
    quantity: 1,
    addWish: true
  },
]



export const comboData = [
  {
    id: Math.random(),
    img: combo1,
    title: "Zinger Burger",
    desc: "Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
    price: 570,
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
    img: combo3,
    title: "Kentucky Burger",
    desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
    price: 620,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: combo4,
    title: "Mighty Zinger",
    desc: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
    price: 730,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: combo5,
    title: "Zinger Combo",
    desc: "Zinger burger + 1 Regular fries+ 1 Regular drink",
    price: 850,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: combo6,
    title: "Zinger Stacker Combo",
    desc: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
    price: 890,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: combo7,
    title: "Kentucky Burger Combo",
    desc: "Kentucky burger + 1 Regular fries+ 1 Regular drink",
    price: 890,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: combo8,
    title: "Mighty Zinger Combo",
    desc: "Mighty Zinger+ 1 Regular fries + 1 Regular drink",
    price: 990,
    quantity: 1,
    addWish: true
  },
]


export const promotionData = [
  {
    id: Math.random(),
    img: promotion1,
    title: "Strawberry Kreamery",
    desc: "Kreamery Sundae Strawberry",
    price: 100,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: promotion2,
    title: "Jalapeno Cheese Burger",
    desc: "KFC Jalapeno Cheese Burger - loaded with a rich cheddar cheese sauce, crispy krunch fillet, jalapenos and lettuce - all layered up in a soft triangle ciabatta bun.",
    price: 390,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: promotion3,
    title: "New Masala Strips & Fries",
    desc: "Enjoy 3 pieces of Masala Strips accompanied by fries served with honey mustard sauce",
    price: 550,
    quantity: 1,
    addWish: true
  },
]

export const boxesData = [
  {
    id: Math.random(),
    img: boxes4,
    title: "Crispy Box",
    desc: "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
    price: 670,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: boxes5,
    title: "Boneless Box",
    desc: "Hassle free boneless experience with 4 Chicken strips + 1 Coleslaw + 1 Regular fries + 1 Regular drink + 1 Dip + 1 Dinner roll",
    price: 690,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: boxes6,
    title: "Wow Box",
    desc: "Feel good with 1 Signature Zinger + 1 pc Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
    price: 990,
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
    img: boxes8,
    title: "Xtreme Duo Box",
    desc: "The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
    price: 1490,
    quantity: 1,
    addWish: true
  },
]

export const sharingData = [
  {
    id: Math.random(),
    img: sharing1,
    title: "Value Bucket",
    desc: "Value BucketOur pride  and joy: hand-breaded and fried to perfection in house. 9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger lickin' good. Rs. 50 from Every Bucket Sold Goes to Mitao Bhook Foundation.",
    price: 1950,
    quantity: 1,
    addWish: true
  },
   {
    id: Math.random(),
    img: sharing3,
    title: "Family Festival 2",
    desc: "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
    price: 2090,
    quantity: 1,
    addWish: true
  },
  {
    id: Math.random(),
    img: sharing4,
    title: "Family Festival 2",
    desc: "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
    price: 2290,
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
  },
]

 
export const beveragesData = [
    {
      id: Math.random(),
      img: snacks1,
      title: "Dinner Roll",
      desc: "Soft and fluffy, it complements any meal perfectly",
      price: 50,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks2,
      title: "Mayo Dip",
      desc: "Creamy mayo for your dipping needs",
      price: 50,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks3,
      title: "Vietnamese Dip",
      desc: "Our spicy and sour signature sauce. Pair it with our fried chicken and fries for the win",
      price: 50,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks4,
      title: "Mineral Water 500ml",
      desc: "Mineral Water 500ml: Stay hydrated with our refreshing and pure mineral water in a convenient 500ml bottle",
      price: 90,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks5,
      title: "Coleslaw",
      desc: "Sliced cabbage and carrots tossed in mayo",
      price: 120,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks6,
      title: "Pepsi Regular",
      desc: "Pepsi Regular: Quench your thirst with the classic taste of Pepsi in a regular-sized bottle",
      price: 150,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks8,
      title: "7UP Regular",
      desc: "7UP Regular: Experience the crisp and refreshing taste of 7UP in a regular-sized bottle",
      price: 150,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks9,
      title: "Mirinda Regular",
      desc: "Mirinda Regular: Satisfy your taste buds with the vibrant and fizzy flavor of Mirinda in a regular-sized bottle",
      price: 150,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks10,
      title: "Mountain Dew Regular",
      desc: "Mountain Dew Regular: Energize yourself with the bold and exhilarating taste of Mountain Dew in a regular-sized bottle",
      price: 150,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks11,
      title: "1.5 Ltr Drink",
      desc: "Get a large serving of refreshment with our 1.5 Ltr Drink at KFC. Perfect for sharing, indulge in your favorite drink and enjoy the convenience of a larger size.",
      price: 250,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks12,
      title: "Corn On The Cob",
      desc: "Boiled sweet corn brushed with butter",
      price: 270,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks13,
      title: "One Piece Chicken",
      desc: "1 piece of Hot & Crispy Fried Chicken",
      price: 290,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks15,
      title: "Fries",
      desc: "Crispy and Golden Fries",
      price: 290,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks16,
      title: "Masala Fries",
      desc: "Masala Crispy and Golden Fries",
      price: 310,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks17,
      title: "Fries Bucket",
      desc: "Fries Bucket with Dip",
      price: 440,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks18,
      title: "Masala Fries Bucket",
      desc: "Masala Crispy and Golden Fries Bucket",
      price: 440,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks19,
      title: "Hot Shots",
      desc: "9 Pcs of hand-breaded Hot Shots",
      price: 450,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks20,
      title: "Chicky Meal 1",
      desc: "Krunch + Chicky Fries + Drink",
      price: 490,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks21,
      title: "Chicky Meal 2",
      desc: "4 Nuggets + 1 CHICKY FRIES+ Slice",
      price: 490,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks22,
      title: "Plain Nuggets",
      desc: "Plain Nuggets: Indulge in 6 pieces of tender and delicious chicken nuggets",
      price: 500,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks23,
      title: "Spicy Nuggets",
      desc: "Spicy Nuggets: Savor the flavor with 6 pieces of mouthwatering chicken spicy nuggets",
      price: 530,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks24,
      title: "Snack Bucket",
      desc: "4 Hot Wings + 4 Hot Shots + 2 Strips and 1 Dip. Satisfy your cravings with our snack bucket.",
      price: 590,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks25,
      title: "Buffalo Wings",
      desc: "8 Pcs of Hot Wings coated with a spicy Buffalo sauce, topped with chili flakes",
      price: 600,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks26,
      title: "Thai Sweet Chilli Wings",
      desc: "8 Pcs of Hot Wings coated with a Sweet Thai Chili sauce, topped with sesame seeds",
      price: 600,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks27,
      title: "Tangy Masala Wings",
      desc: "8 pcs of Hot Wings coated in a sweet and tangy sauce, dusted with chaat masala",
      price: 600,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks28,
      title: "Salsa Sprinkle Wings",
      desc: "8 Pcs Salsa Sprinkle Wings Bucket",
      price: 600,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: snacks29,
      title: "Hot Wings Bucket",
      desc: "10 Pcs of our Signature Hot & Crispy Wings",
      price: 650,
      quantity: 1,
      addWish: true
    },
  ]

  export const midnightData = [
    {
      id: Math.random(),
      img: midnight1,
      title: "Midinight Deal 1",
      desc: "1 Zinger burger + 1 regular drink",
      price: 470,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: midnight2,
      title: "Midnight Deal 2",
      desc: "2 Krunch burgers + 2 regular drinks",
      price: 570,
      quantity: 1,
      addWish: true
    },
    {
      id: Math.random(),
      img: midnight3,
      title: "Midnight Deal 3",
      desc: "Zinger + Drink",
      price: 660,
      quantity: 1,
      addWish: true
    },
  ]

export const drinkData = [
  {
    id: Math.random(),
    img: pepsi,
    title: "Pepsi Regular",
    price: 150,
    quantity: 1
  },
  {
    id: Math.random(),
    img: up,
    title: "Pepsi Regular",
    price: 150,
    quantity: 1
  },
  {
    id: Math.random(),
    img: mirinda,
    title: "Pepsi Regular",
    price: 150,
    quantity: 1
  },
  {
    id: Math.random(),
    img: mountain,
    title: "Pepsi Regular",
    price: 150,
    quantity: 1
  },
  {
    id: Math.random(),
    img: water,
    title: "Pepsi Regular",
    price: 150,
    quantity: 1
  }
]

export default exploreData