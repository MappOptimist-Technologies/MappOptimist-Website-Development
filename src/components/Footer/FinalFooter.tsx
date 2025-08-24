"use client";

import Link from "next/link";
import { useState } from "react";

const ServicesSection = {
  title: "Services",
  items: [
    "AI & ML Project Development",
    "Mobile Application Development",
    "Website Development",
    "Custom Software Development",
    "BlockChain Development",
    "Digital Marketing Services",
    "IT Staff Augmentation",
  ],
};

const routes = [
  "ai-machine-learning-development-services",
  "mobile-app-development-services",
  "website-development-services",
  "custom-software-development-services",
  "blockchain-solution-development-services",
  "digital-marketing-solution-services",
  "it-staff-augmentation-services",
];

const Footer = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwh3V0ukY2Xeg1DnnNK7bq5r2CA3rzM6UulexRtAMVhFoJuQ9Q4y6O5fcoLy-djrWAO/exec", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("✅ Subscribed successfully!");
        e.currentTarget.reset(); // clear input
      } 
    } catch (err) {
      setStatus("⚠️ Error connecting to server");
    }
  };

  return (
    <footer className="container">
      {/* Heading */}
      <p className="top-it-consulting">
        Top IT Consulting Company Delivering Custom Innovative Solutions
      </p>

      <div className="row">
        <div className="col-12 col-sm-4 col-md-4">
          <h6 className="footer-about-sevices-title pb-2">About</h6>
          <div className="footer-about-section">
            <Link
              href="/about-us"
              className="text-black footer-about-sevices-link pb-3"
            >
              Who we are
            </Link>
            <Link
              href="/services"
              className="text-black footer-about-sevices-link pb-3"
            >
              Services we offer
            </Link>
            <Link
              href="/industries-we-serve"
              className="text-black footer-about-sevices-link"
            >
              Industries we serve
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-8 col-md-8 footer-sevices-container">
          <h6 className="footer-about-sevices-title pb-2">
            {ServicesSection?.title}
          </h6>
          <div className="row">
            {ServicesSection?.items.map((item, idx) => (
              <div
                key={idx}
                className="col-12 col-sm-6 col-md-6 col-lg-6 pb-3"
              >
                <Link
                  href={`/services/${routes[idx]}`}
                  className="text-black footer-about-sevices-link"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Images */}
      <div className="row mb-4">
        {[
          { lat: 28.49729931936116, lng: 77.16365133224348 }, // Office 1
          { lat: 19.076, lng: 72.8777 }, // Office 2
        ].map((location, idx) => (
          <div key={idx} className="col-6 col-sm-6 col-md-6">
            <iframe
              className="footer-map"
              title={`Google Map ${idx + 1}`}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.lat},${location.lng}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="border-top pt-5 text-center">
        <p className="fw-semibold">Subscribe to our newsletter</p>

        <div className="container">
          <form
            className="row justify-content-center gx-2 gy-2"
            onSubmit={handleSubmit}
          >
            <div className="col-12 col-sm-8 col-md-4">
              <input
                type="email"
                name="email"
                className="form-control py-2 px-3 border-primary w-100"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="col-12 col-sm-4 col-md-2">
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill text-white py-2"
              >
                Subscribe
              </button>
            </div>
          </form>
          {status && <p className="mt-3">{status}</p>}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-muted small mt-4 py-3">
        &copy; {new Date().getFullYear()} MappOptimist Technologies. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
