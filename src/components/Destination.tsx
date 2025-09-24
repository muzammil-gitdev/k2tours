interface DestinationCard {
  imgSrc: string;
  title: string;
  location: string;
  rating: string;
}

const destinations: DestinationCard[] = [
  {
    imgSrc: "../src/assets/images/card.jpg",
    title: "Serenity at Skardu City",
    location: "Skardu, Gilgit-Baltistan, Pakistan",
    rating: "4.7",
  },
  {
    imgSrc: "../src/assets/images/card2.jpg",
    title: "A view of Mighty Indus",
    location: "Gahkuch, Ghizer, Pakistan",
    rating: "4.8",
  },
  {
    imgSrc: "../src/assets/images/card3.webp",
    title: "Calm in Gilgit City",
    location: "Gilgit City, Gilgit-Baltitan, Pakistan",
    rating: "4.5",
  },
];

const Destination: React.FC = () => {
  return (
    <section className="section__container destination__container" id="tour">
      <h2 className="section__header">Popular Destination</h2>
      <p className="section__description">
        Discover the Most Loved Destination Around the Globe
      </p>
      <div className="destination__grid">
        {destinations.map((dest, index) => (
          <div className="destination__card" key={index}>
            <img src={dest.imgSrc} alt={dest.title} />
            <div className="destination__card__details">
              <div>
                <h4>{dest.title}</h4>
                <p>{dest.location}</p>
              </div>
              <p className="destination__ratings">{dest.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
