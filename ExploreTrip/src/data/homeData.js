import parisImg from "../assets/paris.jpg";
import tokyoImg from "../assets/tokyo.jpg";
import newyorkImg from "../assets/newyork.jpg";
import parisPack from "../assets/paris-pack.jpg";
import tokyoPack from "../assets/tokyo-pack.jpg";
import newyorkPack from "../assets/newyork-pack.jpg";


export const destinations = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    image: parisImg,
  },
  {
    id: 2,
    city: "Tokyo",
    country: "Japan",
    image: tokyoImg,
  },
  {
    id: 3,
    city: "New York",
    country: "USA",
    image: newyorkImg,
  },
];

export const packages = [
  {
    id: 1,
    title: "7-Day Paris Adventure",
    description: "Experience the city of lights",
    price: "$1,499",
    image: parisPack,
  },
  {
    id: 2,
    title: "Tokyo Explorer",
    description: "Discover ancient and modern Japan",
    price: "$2,199",
    image: tokyoPack,
  },
  {
    id: 3,
    title: "New York City Break",
    description: "The city that never sleeps",
    price: "$899",
    image: newyorkPack,    
  },
];