import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import { useParams } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:courseId" element={<CoursePage />} />
    </Routes>
  </div>
  )
}

export default App;