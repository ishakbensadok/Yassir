import './section.styles.css';
function Section({ children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className='section__constraint'>{children}</div>
    </section>
  );
}

export default Section;
