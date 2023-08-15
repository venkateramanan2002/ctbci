import aboutImg from "../images/about.jpeg";
import Title from "./Title";
export default function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      {/* <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div> */}

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          To promote the preservation and sustainable management of tropical biodiversity
through research, conservation initiatives, and community engagement, ensuring the long-term
health and vitality of ecosystems and the well-being of present and future generations
          </p>
          <p>
          Expertise in biodiversity conservation, strong community engagement, innovative
research approaches, and effective partnerships for sustainable impact
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
