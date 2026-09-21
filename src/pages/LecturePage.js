import { useParams } from 'react-router-dom';
import { courses, formatLectureNumber } from '../data/courses';
import BackLink from '../components/BackLink';
import NotFound from '../Notfound';

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
    </div>
  );
}

export default LecturePage;