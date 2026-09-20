import {Link} from "react-router-dom";

function BackLink({course}) {
    if (course){
        return (
        <div className="Back-link">
            <Link to={"/courses/" + course.id}>
                <span>{course.title}</span>
            </Link>
        </div>
    );
    } else {
        return (
            <div className="Back-link">
                <Link to={"/"}>
                    <span>Přehled kurzů</span>
                </Link>
            </div>
        )
    }
}

export default BackLink;