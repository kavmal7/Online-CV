import SectionHeading from './SectionHeading';
import Languages from './Languages';
import Certifications from './Certifications';

export default function Additional({ copy, language }) {
  return (
    <section id="skills-hobbies" className="section shell" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" number="04" title={copy.skills.title} />
      <div className="skills-grid">{copy.skills.groups.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.text}</p></div>)}</div>
      <div className="personal-grid"><Languages copy={copy.languages} /><div><h3>{copy.skills.personalTitle}</h3><p>{copy.skills.personal}</p></div></div>
      <Certifications copy={copy.certifications} language={language} />
    </section>
  );
}
