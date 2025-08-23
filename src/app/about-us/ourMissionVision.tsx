import Image from "next/image";
import React from "react";
import Vision from "../../assests/vision.png";
import Mission from "../../assests/mission.png";

const MissionVision = () => {
  const data = [
    {
      id: 1,
      title: "Our Mission",
      subtitle: "At MappOptimist Technologies, our mission is to harness the power of artificial intelligence, blockchain, and cutting-edge technologies to deliver innovative solutions that drive business success. We are committed to empowering organizations across various industries by providing tailored IT services, including AI-driven projects, custom software development, cybersecurity solutions, and digital marketing strategies. Our goal is to foster growth, enhance efficiency, and create lasting value for our clients in the ever-evolving digital landscape.",
      image: Mission,
      aos: "fade-right"
    },
    {
      id: 2,
      title: "Our Vision",
      subtitle: "We believe in charting the path to technological innovation in every aspect. From driving business growth to pioneering cutting-edge solutions that transform industries, we catalyze the tech revolution.",
      image: Vision,
      aos: "fade-left"
    }
  ]
  return (
    <>
      <div className="container our-mission-container gap-4 mt-4 p-0" >
        {data.map((a) => (
          <div data-aos={a.aos} key={a.title} className="position-relative our-mission-card" >
            <div className="our-mission-card-margin">
              <h2>
                {a.title}
              </h2>
              <p>
                {a.subtitle}
              </p>
            </div>
            <div className="position-absolute justify-content-center d-flex" style={{ bottom: '0', right: '0', left: '0' }}>
              <Image
                src={a.image} alt="Mission Illustration" width={300} height={200}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ aspectRatio: '4 / 3', position: 'relative', marginTop: "3rem" }}>
        <Image
          src="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751959918/MappOptimist_Roadmap_1_z20cvz.png"
          alt="MappOptimist Roadmap"
          layout='fill'
          objectFit='cover'
        />
      </div>
    </>
  );
};
export default MissionVision;
