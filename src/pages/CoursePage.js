import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CoursePage (){
    const { courseId } = useParams();

    return (
        <p>{courseId}</p>
    )
}

export default CoursePage;