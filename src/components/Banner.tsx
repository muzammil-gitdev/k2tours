interface BannerCard {
  value: string;
  label: string;
}

const bannerCards: BannerCard[] = [
  { value: "30+", label: "Years Experience" },
  { value: "1M+", label: "Happy Clients" },
  { value: "4.8", label: "Overrall Ratings" },
];

const Banner: React.FC = () => {
  return (
    <section className="section__container banner__container">
      {bannerCards.map((card, index) => (
        <div className="banner__card" key={index}>
          <h4>{card.value}</h4>
          <p>{card.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Banner;
