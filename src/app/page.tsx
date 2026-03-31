import Background from "../components/Homepage/Background";
import ServiceSection from "../components/Homepage/ServiceSection";
import AboutSection from "../components/Homepage/AboutUs";
import CourseCategory from "../components/Homepage/CourseCategory";
import PopularCourses from "../components/Homepage/PopularCourses";
import Instructors from "../components/Homepage/Instructors";
import Testimonials from "../components/Homepage/Testimonials";
import Footer from "../components/Homepage/Footer";
import Header from "../components/Homepage/Header";

export default function Home() {
  return (
    <main>
     
      <Background />
      <ServiceSection />
      <AboutSection />
      <CourseCategory />
      <PopularCourses />
      <Instructors />
      <Testimonials />
      <Footer />
    </main>
  );
}
