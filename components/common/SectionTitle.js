function SectionTitle({ title, preTitle, alignment, subTitle, showMark, children }) {
  return (
    <div className={`section-title ${alignment}`} data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
      <span className="pre-title">{preTitle}</span>
      <h2 className="title">{title}{children}</h2>
      {showMark && <span className="shape-line"><i className="icon-19"></i></span>}
      {subTitle && <p v-html="subTitle">{subTitle}</p>}
    </div >
  );
}

export default SectionTitle;