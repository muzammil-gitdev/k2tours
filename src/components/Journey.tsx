interface JourneyCard {
  icon: string;
  title: string;
  description: string;
}

const journeyCards: JourneyCard[] = [
  {
    icon: "ri-ticket-line",
    title: "Seamless Booking Process",
    description:
      "From booking tickets to tracking your bus in real-time, everything is just a click away. No more long queues or last-minute confusion — plan, book, and board with complete ease. Your journey, simplified.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Tailored Itineraries",
    description:
      "Everyone travels differently — that’s why we create plans just for you. From preferred timings to budget-friendly options and seat choices, enjoy a trip designed around your lifestyle.",
  },
  {
    icon: "ri-user-star-line",
    title: "Expert Local Insights",
    description:
      "From the best boarding points to local travel hacks, our insights are powered by real people who know the roads. It’s local knowledge, delivered straight to your screen.",
  },
];

const Journey: React.FC = () => {
  return (
    <section className="section__container journey__container" id="package">
      <h2 className="section__header">Bus Travel, the Easy Way!</h2>
      <p className="section__description">
        Effortless planning for Your Next Adventure
      </p>
      <div className="journey__grid">
        {journeyCards.map((card, index) => (
          <div className="journey__card" key={index}>
            <div className="journey__card__bg">
              <span>
                <i className={card.icon}></i>
              </span>
              <h4>{card.title}</h4>
            </div>
            <div className="journey__card__content">
              <span>
                <i className={card.icon}></i>
              </span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
