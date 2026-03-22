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
    destinations:"Paris",
    description: "Experience the city of lights",
    price: 1350,
    image: parisPack,
  },
  {
    id: 2,
    title: "Tokyo Explorer",
    destinations:"Tokyo",
    description: "Discover ancient and modern Japan",
    price: 2350,
    image: tokyoPack,
  },
  {
    id: 3,
    title: "New York City Break",
    destinations:"New York",
    description: "The city that never sleeps",
    price: 300,
    image: newyorkPack,    
  },
];