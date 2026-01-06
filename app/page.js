import HeroSection from "../components/HomePage/HeroSection";
import HomeBookingForm from "../components/HomePage/HomeBookingForm";
import Locations from "../components/HomePage/Locations";
import PromoStrip from "../components/HomePage/PromoStrip";
import Testimonials from "../components/HomePage/Testimonials";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";

export default function Home() {
    return (
        <main className="p-6">
            <HeroSection />
            <PromoStrip />
            <HomeBookingForm />
            <WhyChooseUs />
            <Testimonials/>
            <Locations />
        </main>
    )
}