import { useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Destination from "./components/Destination";
import Journey from "./components/Journey";
import Showcase from "./components/Showcase";
import Banner from "./components/Banner";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import "./index.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Initialize ScrollReveal
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__btns", {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal(".destination__card", {
      ...scrollRevealOption,
      interval: 500,
    });
    ScrollReveal().reveal(".showcase__image img", {
      ...scrollRevealOption,
      origin: "left",
    });
    ScrollReveal().reveal(".showcase__content h4", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".showcase__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".showcase__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal(".banner__card", {
      ...scrollRevealOption,
      interval: 500,
    });
    ScrollReveal().reveal(".discover__card", {
      ...scrollRevealOption,
      interval: 500,
    });
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <Destination />
      <Journey />
      <Showcase />
      <Banner />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
