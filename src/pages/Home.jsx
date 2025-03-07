import React from "react";
import FileUpload from "../components/FileUplode/FileUplode";
import Container from "../components/Container/Container";
import logo from "./logoo.png";
import Comp_logo from "../components/company_logo/logo";
import Socials from "./Socials.png";
import tick from "./tick.png";
import Testimonials from "./Testimonial";
import WhyChoose from "./WhyChoose";
import PricingPlans from "./PricingPlans";
import FAQAccordion from "./FAQAccordion";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="glow glow-left"></div>
      <div className="glow glow-right"></div>

      <div>
        <nav className="flex justify-around p-5 bg-blue-900 text-white">
          <h3>No Sign up required</h3>
        </nav>
        <div className="small-div">
          <img src={logo} alt="My Image" />
          <a href="#features">Features</a>
          <a href="#why-choose-us">Why Choose Us</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <div className="resize">
            <img src={Socials} alt="My Image" />
            <button className="Get-started">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero-text">
        <h1 className="text-4xl font-bold text-center">
          AI-Powered Unified Platform;
          <span className="text-blue-600"> Create </span> Effortlessly
        </h1>
      </div>
      <div className="pera">
        <h3>
          Fast, Smart & Secure –Works with Google Drive, Dropbox, Salesforce &
          Your Favorite Business Tools
        </h3>
      </div>
      <div className="resizee">
        <div className="text-group">
          <img src={tick} alt="tick" />
          <h3>ESIGN Complaint</h3>
        </div>
        <div className="text-group">
          <img src={tick} alt="tick" />
          <h3>UETA Approved</h3>
        </div>
        <div className="text-group">
          <img src={tick} alt="tick" />
          <h3>eIDAS Certified</h3>
        </div>
      </div>

      <FileUpload />
      <div className="container-section">
        <div className="glow glow-left"></div>
        <div className="glow glow-right"></div>
        <Container />
      </div>

      <Comp_logo />
      <Testimonials />
      <div className="container-section">
        <div className="glow glow-left"></div>
        <div className="glow glow-right"></div>
        <WhyChoose />
      </div>

      <PricingPlans />
      <FAQAccordion />
      <Footer />
    </>
  );
};

export default Home;
