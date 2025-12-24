import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DestinationCarousel from "../components/DestinationCarousel";
import ParallaxSection from "../components/ParallaxSection";
import { GallerySection } from "../components/GalerrySection";
import BackToTop from "../components/BackToTop";
import NewsletterFrom from "../components/NewsletterForm";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <DestinationCarousel className="my-24" />
      <ParallaxSection
        imageUrl={"/visit-palembang/images/gallery/bg_ampera.jpg"}
      >
        <h1 className="text-4xl font-bold mb-4">
          Haven’t decided yet? Let us inspire you even more.
        </h1>
        <NewsletterFrom />
      </ParallaxSection>

      <NextSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div className="hero h-[650px] pt-12 ">
        <video
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          className=" h-[690px] w-full object-cover "
          src="/visit-palembang/video/Wonderful_Palembang.mp4"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold shiny-text">
              Experience Culture. <br /> Embrace Nature.
            </h1>
            <p className="mb-5 text-gray-200 opacity-50 ">
              Journey through the vibrant traditions, breathtaking landscapes,
              unforgettable flavors, and the warm, welcoming soul of Palembang —
              where every moment becomes a memory.
            </p>
            <Link to="/dest" className="btn btn-ghost bg-red-400 ">
              Start Your Journey ▼
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NextSection() {
  return (
    <>
      <div className=" my-32 mx-12">
        <h1 className="font-dancing text-3xl">Gallery Media</h1>
        <div className="flex flex-wrap justify-between py-8">
          <h2 className="text-4xl md:text-6xl  text-red-600 mb-2">
            They loved it and <br /> you will too.
          </h2>
          <p className="text-sm md:text-2xl text-gray-500">
            Discover special stories from those who visited Palembang <br /> and
            were enchanted.We hope to see you here too!
          </p>
        </div>

        <GallerySection />
      </div>
    </>
  );
}
