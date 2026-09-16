import { certificates } from '../certificates';

export default function Certifications({ copy, language }) {
  return (
    <div id="certifications" className="certifications">
      <div><h3>{copy.title}</h3><p>{copy.intro}</p></div>
      <details><summary>{copy.show}</summary><ul className="certificate-list">
        {certificates.map((certificate) => <li key={certificate.certificateUrl}>
          <span><span lang="en">{certificate.name}</span><small>{certificate.institution}</small></span>
          <a href={certificate.certificateUrl} target="_blank" rel="noreferrer" aria-label={`${copy.certificate}: ${certificate.name}`} lang={language === 'no' ? 'nb' : 'en'}>{copy.certificate}<span aria-hidden="true"> ↗</span></a>
        </li>)}
      </ul></details>
    </div>
  );
}
