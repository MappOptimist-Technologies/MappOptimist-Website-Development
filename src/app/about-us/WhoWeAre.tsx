import Image from "next/image";
import Who3 from "../../assests/who3.png";
import Who4 from "../../assests/who4.png";

export default function AboutUs () {
  return (
    <div className="wo-about-main">
      <div className="container" data-aos="fade-up">
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <p className="text-dark wo-about-title-text ">
            Who are we?</p>
          <p className="wo-about-subtitle-text text-black">
            Since our inception in 2020 in Delhi, India, we have been committed to delivering innovative and customized solutions that drive business success.
          </p>
        </div>
        <p className="wo-about-subtitle-text text-black">
          Our team comprises IIT-qualified and experienced developers who are passionate about leveraging technology to empower businesses. We pride ourselves on our ability to deliver tailored solutions that align with our clients&apos; business objectives and drive success. </p>
        <p className="wo-about-subtitle-text text-black">
          At MappOptimist, we are committed to staying ahead of the curve in technology trends and advancements. Our team is constantly learning and expanding our knowledge to ensure that we are equipped to tackle any IT challenge that comes our way. Whether you&apos;re a small business or a large enterprise, we have the expertise and experience to help you leverage technology to drive growth and success.</p>
        <p className="wo-about-subtitle-text text-black">
          Our journey is marked by a relentless pursuit of excellence and a commitment to delivering solutions that not only meet but exceed our clients&apos; expectations. We believe that our success is intertwined with the success of our clients, and we are dedicated to building long-term partnerships that foster mutual growth and success.</p>
        <div className="company-vision-margin">
          <div className="company-vision-container" data-aos="fade-top">
            <Image
              data-aos="fade-right"
              src={ Who3 } alt="Teamwork" className="img-fluid company-vision-image" />
            <div className="company-vision-second-image">
              <Image data-aos="fade-left" src={ Who4 } alt="Sub Group Study" className="img-fluid company-vision-second-image-style" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
