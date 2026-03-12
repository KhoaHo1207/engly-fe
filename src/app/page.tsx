import PopularCourses from "../components/Homepage/PopularCourses";
import Instructors from "../components/Homepage/Instructors";
import Testimonials from "../components/Homepage/Testimonials";
import Footer from "../components/Homepage/Footer";

export default function Home() {
  return (
    <main>
      <PopularCourses />
      <Instructors />
      <Testimonials />
      <Footer />
    </main>
  );
}
