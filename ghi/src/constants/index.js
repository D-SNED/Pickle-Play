import pickleplaypaddles from "../assets/images/pickleplaypaddles.png";
import anna from "../assets/images/anna.jpg";
import john from "../assets/images/john.jpg";
import amanda from "../assets/images/amanda.jpg";
import derek from "../assets/images/derek.jpg";
import chris from "../assets/images/chris.jpg";
import players from "../assets/icons/players.svg";
import trophy from "../assets/icons/trophy.svg";
import world from "../assets/icons/world.svg";

export const navLinks = [
  {
    id: "Home",
    url: "/",
  },
  {
    id: "About",
    url: "/about",
  },
  {
    id: "Profile",
    url: "/profile",
  },
  {
    id: "Players",
    url: "/players",
  },
  {
    id: "Teams",
    url: "/teams",
  },
  {
    id: "Tournaments",
    url: "/tournaments",
  },
  {
    id: "Locations",
    url: "/locations",
  },
  {
    id: "Signup",
    url: "/signup",
  },
  {
    id: "Login",
    url: "/login",
  },
  {
    id: "Logout",
    url: "/logout",
  },
];

export const services = [
  {
    title: "Players",
    description:
      "Connect with local players and expand your pickleball network.",
    icon: players,
  },
  {
    title: "Teams",
    description: "Join or create teams to enhance your pickleball experience.",
    icon: pickleplaypaddles,
  },
  {
    title: "Tournaments",
    description:
      "Participate in thrilling pickleball tournaments and showcase your skills.",
    icon: trophy,
  },
  {
    title: "Locations",
    description:
      "Discover new pickleball courts and explore different playing venues.",
    icon: world,
  },
];

export const ourteams = [
  {
    quote: "Inhale confidence, exhale doubt.",
    name: "John Gordon",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: john,
  },
  {
    quote:
      "Never say never, because limits, like fears, are often just an illusion",
    name: "Anna Thorndike",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: anna,
  },
  {
    quote: "Become the hardest working person you know.",
    name: "Amanda Taing",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: amanda,
  },
  {
    quote: "If you're not first, you're last.",
    name: "Derek Snediker",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: derek,
  },
  {
    quote: "If it doesn't challenge you, it won't change you.",
    name: "Christopher Bush",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: chris,
  },
];
