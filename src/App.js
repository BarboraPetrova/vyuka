import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import { useParams } from 'react-router-dom';
import LecturePage from './pages/LecturePage';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:courseId" element={<CoursePage />} />
      <Route path="/courses/:courseId/lecture/:lectureId" element={<LecturePage />} />
    </Routes>
  </div>
  )
}

export default App;