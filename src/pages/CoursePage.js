import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";

function ErrorMessage(){
    return (<h1>Tento kurz neučím :/</h1>)
}

function CoursePage (){
    const { courseId } = useParams();
    const course = courses.find((x) => (x.id === courseId));

    if (course === undefined){
        return <ErrorMessage />;
    }
    
    const sources = course.sources.map(({name, url}) => {
        return (
            <li key={url}>
                <a href={url}>
                    {name}
                </a>
            </li>
        )
    });   

    const lectures = course.lectures.map(({id, topic, date}) => {
        return (
            <li key={id}>
            <Link to={"/courses/" + course.id + "/lecture/" + id} >
                <h3>{topic}</h3>
                <span>{date}</span>
            </Link>
            </li>
        )
    });

    return (
        <div>
            <h1>{course.title}</h1> 
            <span>{course.shortcut}</span>
            <span>{course.semester === "Z" ? "Zimní semestr" : "Letní semestr"} {course.year}</span>
            <span>{course.time}</span>
            <span>{course.class}</span>
            <div>
                <div>
                    <h2>Podmínky zápočtu</h2>
                    <p>{course.conditions}</p>
                </div>
                <div>
                    <h2>Zdroje</h2>
                    <ul>
                        {sources}
                    </ul>
                </div>
            </div>
            <div>
                <ul>
                    {lectures}
                </ul>
            </div>
        </div>
    ) 
}

export default CoursePage;