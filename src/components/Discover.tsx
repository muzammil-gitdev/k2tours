interface DiscoverCard {
  icon: string;
  title: string;
  description: string;
}

const discoverCards: DiscoverCard[] = [
  {
    icon: "ri-roadster-line",
    title: "Your Road, Your Story",
    description:
      "Experience the freedom of travel with our comfortable and reliable bus trips. Enjoy stunning views along the way while relaxing in spacious seats. Whether it’s a short trip or a long journey, our buses ensure a smooth and enjoyable ride.",
  },
  {
    icon: "ri-anchor-line",
    title: "Coastal Wonders",
    description:
      "Embark on a journey through the mesmerizing coastal wonders. Enjoy the serene beauty of pristine beaches, stunning cliffs, and breathtaking ocean views, all from the comfort of our bus. Let the coastal breeze guide you to unforgettable destinations.",
  },
  {
    icon: "ri-building-line",
    title: "Historic Landmarks",
    description:
      "Explore the charm of historic landmarks on our specially curated bus tours. Our comfortable buses will take you through iconic sites, offering insights into their fascinating stories. Sit back, relax, and immerse yourself in the rich history that each destination holds.",
  },
];

const Discover: React.FC = () => {
  return (
    <section className="section__container discover__container">
      <h2 className="section__header">
        Discover Peace, Culture, and Devotion with Our Temple Bus Travels
      </h2>
      <p className="section__description">
        Witness Stunning Landscapes from the Comfort of Your Bus Seat
      </p>
      <div className="discover__grid swiper">
        <div className="swiper-wrapper">
          {discoverCards.map((card, index) => (
            <div className="swiper-slide discover__card" key={index}>
              <span>
                <i className={card.icon}></i>
              </span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Discover;
