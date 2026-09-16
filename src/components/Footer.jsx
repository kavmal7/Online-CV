export default function Footer({ copy }) {
  return (
    <footer id="footer" aria-labelledby="contact-title">
      <div className="shell">
        <h2 id="contact-title">{copy.title}</h2>
        <a className="contact-email" href="mailto:kavyamal74@gmail.com">kavyamal74@gmail.com<span aria-hidden="true"> ↗</span></a>
        <div className="footer-bottom"><div className="social-links">
          <a href="https://www.linkedin.com/in/kavya-malhotra" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/kavmal7" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://git.app.uib.no/Kavya.Malhotra" target="_blank" rel="noreferrer">GitLab ↗</a>
        </div><a href="#about">{copy.top} ↑</a></div>
      </div>
    </footer>
  );
}
