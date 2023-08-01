import Cover from '../Cover/Cover';
import Blogs from '../Blogs/Blogs';
import Creative from '../Creative/Creative';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Updates from '../Updates/Updates';


const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <Creative></Creative>
            <Services></Services>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Updates></Updates>
        </div>
    );
};

export default Home;