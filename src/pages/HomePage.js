import '../App.css';
import { courses } from '../data/courses';

import CourseItem from '../components/CourseItem';



function HomePage() {
  return (
  <div className="App">
    <div className="App-header">
      <h1 className="title">Cvičení</h1>
      <p>Zadání, materiály a poznámky ze cvičení.</p>
    </div>
    <section>
      <h2>Kurzy</h2>
      {courses.map(course => (
        <CourseItem 
          course={course}
          key={course.shortcut}/>
      ))}
    </section>
  </div>
  )
}

export default HomePage;