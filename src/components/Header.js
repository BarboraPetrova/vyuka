import { NavLink } from 'react-router-dom';
import { courses } from '../data/courses';

function Header() {
  return (
    <header className="Header">
      <div className="Header-inner u-wrap">
        <NavLink to="/">bc. Barbora Petrová - výuka</NavLink>
        <nav className="Header-nav">
          <ul className="u-list-reset">
            {courses.map((course) => (
              <li key={course.id}>
                <NavLink to={'/courses/' + course.id}>
                    {course.navLabel ?? course.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;