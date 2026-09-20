import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import BackLink from "../components/BackLink";


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
                <a href={url} className="Source-link">
                    {name}
                </a>
            </li>
        )
    });   

    const lectures = course.lectures.map(({id, topic, date}) => {
        return (
            <li key={id}>
            <Link to={"/courses/" + course.id + "/lecture/" + id} >
                <div>
                    <span className="Lecture-number">{(Number(id) < 10) ? "0" + id : id}</span>
                    <h3>{topic}</h3>
                    <span>{date}</span>
                </div>
            </Link>
            </li>
        )
    });

    const conditions = course.conditions.map((condition) => {
        return (
            <p key={condition} className="Text-with-styling">{condition}</p>
        )
    });

    return (
        <div>
            <BackLink/>
            <span className="Course-shortcut">{course.shortcut}</span>
            <h1>{course.title}</h1> 
            <div className="Course-meta">
                <span>{course.semester === "Z" ? "Zimní semestr" : "Letní semestr"} {course.year}</span>
                <span>{course.time}</span>
                <span>{course.class}</span>
            </div>
            <div>
                <section>
                    <h2>Podmínky zápočtu</h2>
                    <div>
                        {conditions}
                    </div>
                </section>
                <section>
                    <h2>Zdroje</h2>
                    <ul className="Source-links">
                        {sources}
                    </ul>
                </section>
            </div>
            <section>
                <h2>Rozpis cvičení</h2>
                <ul className="Lecture-links">
                    {lectures}
                </ul>
            </section>
        </div>
    ) 
}

export default CoursePage;