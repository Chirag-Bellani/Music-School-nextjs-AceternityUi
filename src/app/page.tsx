import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusciSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusciSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </>
  );
}
