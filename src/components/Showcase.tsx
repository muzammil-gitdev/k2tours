const Showcase: React.FC = () => {
  return (
    <section className="section__container showcase__container">
      <div className="showcase__image">
        <img src="img/showcase1.jpeg" alt="showcase" />
      </div>
      <div className="showcase__content">
        <h4>Ignite Your Wanderlust with Every Bus Ride</h4>
        <p>
          Traveling by bus offers comfort and stunning views on your way to
          amazing destinations. With spacious seats and air conditioning, you
          can relax and enjoy the ride, whether you're heading to a vibrant city
          or a peaceful getaway. It’s the perfect way to travel affordably and
          conveniently while experiencing the beauty of the journey.
        </p>
        <p>
          Explore the World by Bus with Ease Hop on a bus and experience the joy
          of travel at your own pace. From comfortable seating to scenic routes,
          our buses offer the perfect way to explore cities, nature, and
          everything in between. Whether it's a quick trip or a long adventure,
          sit back, relax, and enjoy the ride.
        </p>
        <button className="btn showcase__btn">BOOK A Bus Now</button>
      </div>
    </section>
  );
};

export default Showcase;
