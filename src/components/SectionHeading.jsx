export default function SectionHeading({ id, number, title, intro }) {
  return (
    <div className="section-heading">
      <div className="section-title"><span className="section-number" aria-hidden="true">{number}</span><h2 id={id}>{title}</h2></div>
      {intro && <p>{intro}</p>}
    </div>
  );
}
