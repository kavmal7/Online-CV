import SectionHeading from './SectionHeading';

export default function Education({ copy }) {
  return (
    <section id="education" className="section shell" aria-labelledby="education-title">
      <SectionHeading id="education-title" number="03" title={copy.title} />
      <div className="education-grid">{copy.items.map((item) => <article key={item.institution}>
        <p className="eyebrow">{item.date}</p><h3>{item.institution}</h3>
        <p className="education-location">{item.location}</p>
        <p className="degree">{item.degree}</p><p className="study-status">{item.status}</p><p className="muted">{item.description}</p>
      </article>)}</div>
      <p className="section-note">{copy.note}</p>
    </section>
  );
}
