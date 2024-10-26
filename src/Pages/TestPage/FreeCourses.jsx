import { Link } from "react-router-dom";


const FreeCourses = () => {
    return (
        <div className="text-center min-h-screen">
            <h1 className="text-3xl font-bold text-yellow-700">This is Free Courses Page</h1>
            <Link to='/'><button className="btn my-12 btn-primary">Back to Home</button></Link>
        </div>
    );
};

export default FreeCourses;