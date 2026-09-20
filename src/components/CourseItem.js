import { Link } from 'react-router-dom';

function CourseItem({course}) {
  return (
    <Link to={"/courses/" + course.id}>
        <article className="Course-box">
        <span className="Course-shortcut">{course.shortcut}</span>
        <div className="Course-box__content">
            <h3 className="Course-name">{course.title}</h3>
            <div className="Course-meta">
                <span className="Course-semester">{((course.semester === "Z") ? "Zimní semestr" : "Letní semestr")} {course.year}</span>
                <span className="Course-time">{course.time}</span>
                <span className="Course-class">{course.class}</span>
            </div>
        </div>
        </article>
    </Link>
  )

}

export default CourseItem;