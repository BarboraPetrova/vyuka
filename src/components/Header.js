import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { courses } from '../data/courses';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="Header">
      <div className="Header-inner u-wrap">
        <NavLink to="/" onClick={close}>
          bc. Barbora Petrová - výuka
        </NavLink>

        {/* Tlačítko je v DOM vždy, nad 640px ho schovává CSS. */}
        <button
          type="button"
          className={
            'Header-toggle Icon-left ' +
            (isOpen ? 'Icon-close' : 'Icon-hamburger')
          }
          aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={isOpen}
          aria-controls="Header-nav"
          onClick={() => setIsOpen((open) => !open)}
        />

        <nav
          id="Header-nav"
          className={'Header-nav' + (isOpen ? ' is-open' : '')}
        >
          <ul className="u-list-reset">
            {courses.map((course) => (
              <li key={course.id}>
                {/* Kliknutí na kurz menu zavře, jinak by zůstalo viset. */}
                <NavLink to={'/courses/' + course.id} onClick={close}>
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