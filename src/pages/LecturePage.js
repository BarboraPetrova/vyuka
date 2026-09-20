import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import BackLink from "../components/BackLink";

    



function LecturePage() {
    const { courseId ,lectureId } = useParams();
    const course = courses.find((x) => x.id === courseId);
    const lecture = course.lectures.find((x) => (x.id === lectureId));

    return (
        <div>
            <BackLink course={course} />
            <h1>{lecture.topic}</h1>
            <span>{(Number(lectureId) < 10) ? "0" + lectureId : lectureId}</span>
            <span>{lecture.date}</span>
        </div>

    )
}

export default LecturePage;