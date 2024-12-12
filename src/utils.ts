import webdev from "./assets/webdev.jpg";
import onlinestore from "./assets/onlinestore.jpg";
import mobiledev from "./assets/mobiledev.jpg";
import phoenix from "./assets/the phoenix project.jpeg";
import digital from "./assets/Digital-Marketing-for-Dummies-book-cover.jpg";

export const genres = [
  {
    id: 1,
    name: "Website Development",
  },
  {
    id: 2,
    name: "Online Store Design",
  },
  {
    id: 3,
    name: "Mobile App Development",
  },
  {
    id: 4,
    name: "Hosting Service",
  },
  {
    id: 5,
    name: "Domains Hosting / Reservation",
  },
];

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  img: string;
  price: string;
  summary: string;
}

export const books = [
  {
    id: 1,
    title: "Website Development",
    author: "",
    genre: "Business/Entrepreneurship",
    img: webdev,
    price: "$1200.00",
    summary:
      "Need a professional website to showcase your business or ideas? Our expert team specializes in crafting stunning, user-friendly websites tailored to your specific needs. We offer a comprehensive range of services, including:",
  },
  {
    id: 2,
    title: "Online Store Design",
    author: "",
    genre: "Psychology/Sales",
    img: onlinestore,

    price: "$1500.00",
    summary:
      "Looking to create a captivating online store that drives sales and enhances your brand image? Our expert design team specializes in crafting visually stunning and highly functional online stores that leave a lasting impression.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    author: "",
    genre: "Business/Marketing",
    img: mobiledev,

    price: "$2700.00",
    summary:
      "Need a mobile app to reach your target audience and streamline your business processes? Our skilled developers create innovative and user-friendly mobile apps for both iOS and Android platforms.",
  },
  {
    id: 4,
    title: "Domain and Web Management",
    author: "",
    genre: "Business/Technology",
    img: phoenix,

    price: "$900.00",
    summary: "",
  },
  {
    id: 5,
    title: "Business Development",
    author: "",
    genre: "Marketing/Technology",
    img: digital,

    price: "$1800.00",
    summary: "",
  },
];
