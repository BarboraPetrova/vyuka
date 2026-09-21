import { Link } from 'react-router-dom';
import { formatSemester } from '../data/courses';

function CourseItem({ course }) {
  return (
    <Link to={'/courses/' + course.id} className="Row-link">
      <article className="Course-box">
        <span className="Course-shortcut u-code">{course.shortcut}</span>
        <div className="Course-box__content">
          <h3 className="Course-name Icon-right Icon-arrow-right">
            {course.title}
          </h3>
          <div className="Course-meta u-muted">
            <span>{formatSemester(course)}</span>
            <span>{course.time}</span>
            <span>{course.class}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CourseItem;