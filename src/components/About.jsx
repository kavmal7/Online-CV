const logo = `${import.meta.env.BASE_URL}km-logo.png`;

export default function About({ copy }) {
  return (
    <section id="about" className="shell hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-rule" />{copy.eyebrow}</p>
        <h1 id="hero-title">Kavya Malhotra</h1>
        <div className="hero-intro">
          {copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#projects">{copy.projects}<span aria-hidden="true">↗</span></a>
          <a className="text-link" href="mailto:kavyamal74@gmail.com">{copy.contact}<span aria-hidden="true">↗</span></a>
        </div>
        <p className="location">{copy.location}</p>
      </div>
      <div className="hero-mark" aria-hidden="true"><img src={logo} alt="" width="924" height="516" /></div>
      <div className="hero-bottom"><p>{copy.note}</p><button className="text-link print-button" onClick={() => window.print()}>{copy.print}<span aria-hidden="true">↓</span></button></div>
    </section>
  );
}
