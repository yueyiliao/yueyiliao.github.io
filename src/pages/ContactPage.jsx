import { resumePath } from '../data/resume.js'

function ContactIcon({ path }) {
  return (
    <svg className="contact-footer-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <footer id="contact" className="portfolio-contact">
      <nav className="container contact-footer-links" aria-label="Contact links">
        <a href="mailto:yl9757@nyu.edu" aria-label="Email Yueyi Liao at yl9757@nyu.edu">
          <ContactIcon path="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm-2 2 10 7 10-7" />
          yl9757@nyu.edu
        </a>
        <a href="https://www.linkedin.com/in/yueyi-liao" target="_blank" rel="noreferrer">
          <ContactIcon path="M5 9v10M5 5h.01M10 19V9m0 4a4.5 4.5 0 0 1 9 0v6" />
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href={resumePath} target="_blank" rel="noreferrer">
          <ContactIcon path="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8m-8 4h8" />
          View / Download Resume <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </footer>
  )
}
