import Features from "../../components/cards/Features"
import Banner from "../../components/Banner"
const featuresSection = {
    title: "Features",
    items: [
      {
        iconSrc: "./img/icon-chat.png",
        iconAlt: "Chat Icon",
        title: "You are our #1 priority",
        description:
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      },
      {
        iconSrc: "./img/icon-money.png",
        iconAlt: "Money Icon",
        title: "More savings means higher rates",
        description:
          "The more you save with us, the higher your interest rate will be!",
      },
      {
        iconSrc: "./img/icon-security.png",
        iconAlt: "Security Icon",
        title: "Security you can trust",
        description:
          "We use top of the line encryption to make sure your data and money is always safe.",
      },
    ],
  };
 


  const Home = () => {
    return (
      <main className="main">
      <Banner/>
      <section className="features" >
          {featuresSection.items.map((feature, index) => (
          <div className="feature-item" key={index}>
            <Features
              title={feature.title}
              image={feature.iconSrc}
              alt={feature.iconAlt}
              description={feature.description}
            />
          </div>
        ))}
      </section>
      
      </main>
    );
  };

export default Home