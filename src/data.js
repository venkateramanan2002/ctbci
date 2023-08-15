import tour1 from "./images/main4.webp";
import tour2 from "./images/achieve.jpg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "research" },
  { id: 4, href: "#tours", text: "News&Events" },
  { id: 5, href: "#tours", text: "resources" },
  { id: 6, href: "#tours", text: "peoples" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/CTBCindia", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com/CTBC_India", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.linkedin.com/company/centre-for-tropical-biodiversity-conservation-ctbc/", icon: "fab fa-linkedin" },
  { id: 4, href: "https://www.instagram.com/ctbcindia/", icon: "fab fa-instagram" },
  
  
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Activities",
    text: `The CTBC spent two days in Mysore- Bangalore Highway and released birds from the ghost nets.Conducted awareness classes on the carelessness and abandonment of fishing nets in ocean, rivers,lakes and its effect on biodiversity to the local people and fisherman community of the area.`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Achievements",
    text: `This initiative could provide water to many birds in summer. It was found that many birds were using the water points regularly. This initiative also helped to provide awareness to school children and the local community about conservation of birds.`,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Futuristic plans",
    text: `The CTBC plans to do continuous monitoring of birds and other marine organisms and their difficulties due to the ghost net and other abandoned fishing gears and to approach higher authorities
    to inform about this serious issue on biodiversity and initiate campaigns for amendment of laws and public petitioning which is required to solve the issue of ghost nets.`,
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    title: "Our Mission",
    date: "august 26th 2020",
    info: " Our Mission Is To Enhance The Quality Of Life And The Environment. By Working On Issues Of Natural Resource And Rural Development.",
    location: "India",
    duration: 6
  },
  {
    id: 2,
    image: tour2,
    title: "How We Work",
    date: "october 1th, 2020",
    info: " With Indigenous People And Local Communities As Our Primary Stakeholders, Our Work Extends To Various Aspects Of Development.",
    location: "Coimbatore",
    duration: 11
  },
  {
    id: 3,
    image: tour3,
    title: "Our History",
    date: "November 19, 1993",
    info: " CTBC Organization Was Established On November 19, 1993, With Its Base In Kotagiri.In The Nilgiris District Of Tamil Nadu.",
    location: "Kochi kerala",
    duration: 8
  },
  
];
