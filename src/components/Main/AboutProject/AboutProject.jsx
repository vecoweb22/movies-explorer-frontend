import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section className="aboutproject" id="about-project">
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__line"></div>
      <div className="desc">
        <div className="desc__column">
          <h2 className="desc__title">Дипломный проект включал 5 этапов</h2>
          <p className="desc__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="desc__column">
          <h2 className="desc__title">На выполнение диплома ушло 5 недель</h2>
          <p className="desc__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline_color_green">
          <h2 className="timeline__title timeline__title_color_green">
            1 неделя
          </h2>
          <p className="timeline__subtitle">Back-end</p>
        </div>
        <div className="timeline_color_grey">
          <h2 className="timeline__title timeline__title_color_grey">
            4 недели
          </h2>
          <p className="timeline__subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
