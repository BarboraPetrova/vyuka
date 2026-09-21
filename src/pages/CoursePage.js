import { Link, useParams } from 'react-router-dom';
import { courses, formatSemester, formatLectureNumber } from '../data/courses';
import BackLink from '../components/BackLink';
import NotFound from '../Notfound';

function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find((x) => x.id === courseId);

  if (!course) {
    return <NotFound message="Tento kurz neučím :/" />;
  }

  return (
    <div className="Page Page--course u-wrap u-rise">
      <BackLink />

      <div className="Course-shortcut u-code">{course.shortcut}</div>
      <h1 className="Title--course">{course.title}</h1>
      <div className="Course-meta Course-meta--detail">
        <span>{formatSemester(course)}</span>
        <span>{course.time}</span>
        <span>{course.class}</span>
      </div>

    <section>
        <h2>Rozpis cvičení</h2>
        <ul className="u-list-reset">
            {course.lectures.map(({ id, topic, date }) => (
            <li key={id}>
                <Link
                to={'/courses/' + course.id + '/lecture/' + id}
                className="Row-link"
                >
                <div className="Lecture-row">
                    <span className="Lecture-number u-code">
                    {formatLectureNumber(id)}
                    </span>
                    <h3 className="Lecture-topic">{topic}</h3>
                    <span className="Lecture-date u-muted">{date}</span>
                </div>
                </Link>
            </li>
            ))}
        </ul>
    </section>

    <section className="Text-block">
        <h2>Podmínky zápočtu</h2>
        {course.conditions.map((condition, index) => (
            <p key={index}>{condition}</p>
        ))}
    </section>

    <section className="Text-block">
        <h2>Úkoly</h2>
        {course.tasks.map((task, index) => (
            <p key={index}>{task}</p>
        ))}
    </section>

      <section>
        <h2>Zdroje</h2>
        <ul className="Source-links u-list-reset">
          {course.sources.map(({ name, url }) => (
            <li key={url}>
              <a
                className="Icon-right Icon-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      
    </div>
  );
}

export default CoursePage;