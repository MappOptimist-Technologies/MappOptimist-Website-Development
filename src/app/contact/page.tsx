import React from 'react';
import Navbar from '@/components/header/navbar';
import Image from "next/image";
import Footer from '@/components/Home/footer';
import SocialButton from '@/components/Buttons/SocialButtons';
import scrollGIF from "../../../public/assets/images/scrollGIF.gif";
import CompanyListSliderComponent from '@/components/Home/companySlider';
import contactUsGif from "../../../public/assets/images/contactUsGif.gif"
import phone from "../../../public/assets/images/phone.png";
import email from "../../../public/assets/images/email.png";
import ContactUsForm from '@/components/Home/contactUsForm';

export const metadata = {
  title: "Let's Build Something Amazing Together!",
  description: "Share your requirements, and we'll get back to you promptly with tailored solutions. Your ideas are safe with us—we sign an NDA for every project.",
  openGraph: {
    title: "Let's Build Something Amazing Together!",
    description:
      "Share your requirements, and we'll get back to you promptly with tailored solutions. Your ideas are safe with us—we sign an NDA for every project.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/contact`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752554893/Contact_us_cover_image_ktiqtu.png",
        width: 1200,
        height: 630,
        alt: "MappOptimist Technologies Contact Us Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/contact`,
  },
};

export default function ContactUsPage() {

  const icon = [
    { id: 0, image: phone, text: "+91 7011529345", name: "MappOptimist Technologies contact number" },
    { id: 1, image: email, text: "ashutosh@mappoptimist.com", name: "MappOptimist Technologies contact email" },
  ]

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className='contact-us-container mb-3'>
          <div className='contact-us-overlay' />
          <Navbar />
          <div className='career-content-container'>
            <h1>Let&#39;s Build Something Amazing Together!</h1>
            <h6>Share your requirements, and we&#39;ll get back to you promptly with tailored solutions. Your ideas are safe with us—we sign an NDA for every project.</h6>
          </div>
          <div className="container" style={{ zIndex: 2 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "45px 0px",
                zIndex: 2,
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <SocialButton icon={"linkedIn"} width={20} height={20} />
                <SocialButton icon={"youtube"} width={18} />
                <SocialButton icon={"instagram"} />
              </div>
              <div className="d-flex gap-3">
                <h5 className="">Scroll</h5>
                <Image src={scrollGIF}
                  alt="Scroll gif"
                  width={24}
                  height={24} />
              </div>
            </div>
          </div>
        </div>
        <ContactUsForm />
        <div className='py-4'>
          <CompanyListSliderComponent />
        </div>
        <section className="contact-us-location container">
          <div className='mb-5'>
            <h1>Global Locations</h1>
            <h3>Strategically positioned to address the toughest challenges and meet the demands of fastest-growing economies through technology innovation.</h3>
          </div>
          <iframe
            className="contact-us-map"
            title="Google Map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=27.141611,78.075861"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="contact-us-gif">
          <div className='container'>
            <div className='mb-5 contact-content'>
              <h1>Connect with the Top IT Consulting Company!</h1>
              <h3>Reach out to us with your unique development queries to bring your vision into reality with our development capabilities.</h3>
            </div>
            <div className='d-flex align-items-center justify-content-center contact-gif position-relative'>
              <img src={contactUsGif.src} alt="contact us background image" />
              <div className='d-flex icon-wrapper'>
                {icon.map((i) =>
                  <div key={i.text} className='contact-gif-overlay'>
                    <img loading='lazy' src={i.image.src} alt={i?.name} className="contact-gif-overlay-icons"
                    />
                    <h3>{i.text}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="career-media-coverage-section">
          <div className='career-media-coverage-container'>
            <MediaCoverageComponent />
          </div>
        </section> */}
        <div className="common-footer-container mt-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
