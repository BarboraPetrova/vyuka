import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";

function LecturePage() {
    const { courseId ,lectureId } = useParams();
    const course = courses.find((x) => x.id === courseId);
    const lecture = course.lectures.find((x) => (x.id === lectureId));

    return (
        <h1>{lecture.topic}</h1>
    )
}

export default LecturePage;