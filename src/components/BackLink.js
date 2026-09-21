import { Link } from 'react-router-dom';

function BackLink({ course }) {
  const target = course ? '/courses/' + course.id : '/';
  const label = course ? course.title : 'Přehled kurzů';

  return (
    <Link
      to={target}
      className={
        'Back-link u-label Icon-left Icon-arrow-left' +
        (course ? ' Back-link--lecture' : '')
      }
    >
      {label}
    </Link>
  );
}

export default BackLink;