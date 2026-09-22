import { useParams } from 'react-router-dom';
import { courses, formatLectureNumber } from '../data/courses';
import BackLink from '../components/BackLink';
import NotFound from '../Notfound';
import { MathJax } from 'better-react-mathjax';

function LecturePage() {
  const { courseId, lectureId } = useParams();
  const course = courses.find((x) => x.id === courseId);
  const lecture = course?.lectures.find((x) => x.id === lectureId);

  if (!course || !lecture) {
    return <NotFound message="Takové cvičení tu není :/" />;
  }

  return (
    <div className="Page Page--lecture u-wrap u-rise">
      <BackLink course={course} />
      <div className="Course-shortcut u-code">{formatLectureNumber(lectureId)}</div>
      <h1 className="Title--lecture">{lecture.topic}</h1>
      <div className="Lecture-meta">
        <span className="u-muted">{lecture.date}</span>
      </div>

      <section className="Text-block">
        <h2>Obsah cvičení</h2>
        {lecture.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
    </section>

    <section className="Text-block">
        <h2>Úkoly</h2>
        <ol>
        {lecture.tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
        </ol>


    </section>

    </div>
  );
}

export default LecturePage;