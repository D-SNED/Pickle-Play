import pickleplaypaddles from "../assets/images/pickleplaypaddles.png";
import anna from "../assets/images/anna.jpg";
import john from "../assets/images/john.jpg";
import amanda from "../assets/images/amanda.jpg";
import derek from "../assets/images/derek.jpg";
import chris from "../assets/images/chris.jpg";
import players from "../assets/icons/players.svg";
import trophy from "../assets/icons/trophy.svg";
import world from "../assets/icons/world.svg";

export const navLinksLoggedIn = [
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
    id: "Logout",
    url: "/logout",
  },
];

export const navLinksNotLoggedIn = [
  {
    id: "Home",
    url: "/",
  },
  {
    id: "About",
    url: "/about",
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
    quote: "Clear eyes, full hearts, can't lose.",
    name: "John Gordon",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: john,
  },
  {
    quote: "Train like a savage, create like an artist.",
    name: "Anna Thorndike",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: anna,
  },
  {
    quote: "The due date is the do date.",
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
    quote: "If I hear the music, I'm gonna dance.",
    name: "Christopher Bush",
    designation: "Software Engineering Student",
    company: "Hack Reactor",
    image: chris,
  },
];
