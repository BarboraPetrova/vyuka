import BackLink from './components/BackLink';

function NotFound({ message = 'Tuhle stránku neznám :/' }) {
  return (
    <div className="Page Page--course u-wrap u-rise">
      <BackLink />
      <h1 className="Title--course">{message}</h1>
    </div>
  );
}

export default NotFound;