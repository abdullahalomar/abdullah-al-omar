
import Blogs from '../Blogs/Blogs';
import Cover from '../Cover/Cover';
import Creative from '../Creative/Creative';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Updates from '../Updates/Updates';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Cover></Cover>
            <Creative></Creative>
            <Services></Services>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Updates></Updates>
            <Footer></Footer>
        </div>
    );
};

export default Home;