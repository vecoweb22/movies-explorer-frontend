import "./Techs.css";

function Techs(props) {
  return (
    <section className="techs" id="techs">
      <h2 className="section__title">Технологии</h2>
      <div className="section__line"></div>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techskill list">
        <h3 className="techskill__item">HTML</h3>
        <h3 className="techskill__item">CSS</h3>
        <h3 className="techskill__item">JS</h3>
        <h3 className="techskill__item">React</h3>
        <h3 className="techskill__item">Git</h3>
        <h3 className="techskill__item">Express.js</h3>
        <h3 className="techskill__item">mongoDB</h3>
      </ul>
    </section>
  );
}

export default Techs;
