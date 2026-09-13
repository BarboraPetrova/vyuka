import '../App.css';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';

function CourseItem({course}) {
  return (
    <Link to={"/courses/" + course.id}>
        <div>
        <span className="Course-shortcut">{course.shortcut}</span>
        <h3 className="Course-name">{course.title}</h3>
        <div>
            <span className="Course-semester">{((course.semester === "Z") ? "Zimní semestr" : "Letní semestr")} {course.year}</span>
            <span className="Course-time">{course.time}</span>
            <span className="Course-class">{course.class}</span>
        </div>
        </div>
    </Link>
  )

}

function HomePage() {
  return (
  <div className="App">
    <header className="App-header">
      <h1 className="title">Cvičení</h1>
      <div>Zadání, materiály a poznámky ze cvičení.</div>
    </header>
    <main>
      <h2>Kurzy</h2>
      {courses.map(course => (
        <CourseItem 
          course={course}
          key={course.shortcut}/>
      ))}
    </main>
  </div>
  )
}

export default HomePage;