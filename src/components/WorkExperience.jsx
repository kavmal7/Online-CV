import SectionHeading from './SectionHeading';

export default function WorkExperience({ copy }) {
  return (
    <section id="work-experience" className="section shell" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" number="02" title={copy.title} intro={copy.intro} />
      <div className="experience-list">
        {copy.items.map((item) => <article className="experience-row" key={item.company}>
          <div className="entry-meta"><p>{item.date}</p><p>{item.location}</p></div>
          <div className="entry-content"><h3>{item.company}</h3><p className="role">{item.role}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
        </article>)}
      </div>
    </section>
  );
}
