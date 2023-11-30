import States from "../../Components/States/States";
import TeachOn from "../../Components/TeachOn/TeachOn";
import TopCourses from "../../Components/TopCourses/TopCourses";
import Banner from "./Banner/Banner";
import Collaborates from "./Collaborates/Collaborates";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <TopCourses></TopCourses>
            <Collaborates></Collaborates>
            <States></States>
            <TeachOn></TeachOn>
        </div>
    );
};

export default Home;