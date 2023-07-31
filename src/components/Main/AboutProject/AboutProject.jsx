import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section className="aboutproject" id="about-project">
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__line"></div>
      <div className="desc">
        <div className="desc__column">
          <h3 className="desc__title">Дипломный проект включал 5 этапов</h3>
          <p className="desc__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="desc__column">
          <h3 className="desc__title">На выполнение диплома ушло 5 недель</h3>
          <p className="desc__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline_color_green">
          <h3 className="timeline__title timeline__title_color_green">
            1 неделя
          </h3>
          <p className="timeline__text">Back-end</p>
        </div>
        <div className="timeline_color_grey">
          <h3 className="timeline__title timeline__title_color_grey">
            4 недели
          </h3>
          <p className="timeline__text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
