import { courses } from '../data/courses';
import CourseItem from '../components/CourseItem';

function HomePage() {
  return (
    <div className="Page u-wrap u-rise">
      <h1 className="Title--list">Cvičení</h1>
      <p className="Lead">Zadání, materiály a poznámky ze cvičení.</p>

      <section>
        <h2>Kurzy</h2>
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;