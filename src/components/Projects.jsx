import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { projectUrls } from '../content';

export default function Projects({ copy }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="projects" className="section shell" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" number="01" title={copy.title} intro={copy.intro} />
      <div className="project-grid">
        {copy.items.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className={`project-visual visual-${project.id}`} aria-hidden="true">
              <span className="visual-index">0{index + 1}</span>
              <div className="method-diagram">{project.diagram.map((step) => <span key={step}>{step}</span>)}</div>
            </div>
            <div className="project-body">
              <p className="eyebrow project-kind">{project.kind}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-detail"><h4>{copy.contribution}</h4><p>{project.contribution}</p></div>
              <div className="project-detail finding"><h4>{index === 0 ? copy.thesisOutcome : copy.outcome}</h4><p>{project.outcome}</p></div>
              <ul className="tags" aria-label={project.title}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <div className="project-link">
                {projectUrls[project.id] ? <a className="text-link" href={projectUrls[project.id]} target="_blank" rel="noreferrer" aria-label={`${copy.source}: ${project.title}`}>{copy.source}<span aria-hidden="true">↗</span></a>
                  : <><span className="project-status">{project.status}</span><a className="text-link" href="mailto:kavyamal74@gmail.com?subject=Biomedical%20AI%20research">{copy.enquiry}<span aria-hidden="true">↗</span></a></>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="text-link more-projects" aria-expanded={expanded} aria-controls="more-projects" onClick={() => setExpanded(!expanded)}>{expanded ? copy.less : copy.more}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
      <div id="more-projects" className="archive-grid" hidden={!expanded}>
        {copy.other.map((project) => <article className="archive-item" key={project.id}><h3><a href={projectUrls[project.id]} target="_blank" rel="noreferrer">{project.title}<span aria-hidden="true"> ↗</span></a></h3><p>{project.description}</p></article>)}
      </div>
    </section>
  );
}
