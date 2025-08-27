import Image from "next/image";
export default function OurExperienceComponent() {


  const data = [
    { title: "Startup", description: "Limited budget and resources? No problem! MappOptimist helps startups turn innovative ideas into real-world solutions with cost-effective tech support in AI, app development, and cloud computing." },
    { title: "Small Businesses", description: "Build a strong brand identity with our custom development solutions. We combine expertise in website design, e-commerce, and digital tools to help small businesses grow and thrive." },
    { title: "Enterprise Level Businesses", description: "Streamline operations and expand your reach with our enterprise-grade solutions. From IoT and machine learning to big data, we deliver innovative technologies to drive your business forward." },
    { title: "Agency level", description: "Boost your agency’s offerings with our cutting-edge expertise. We provide custom apps, web platforms, and AI-driven solutions to help you deliver top-notch results for your clients." },
  ]
  return (
    <section className="our-experience-container">
      <div className="our-experience-left">
        <div className="our-experience-content">
          <p className='our-experience-title'>Hire Mobile App Developers Who Are  Passionate to Turn Business Idea  into A Reality</p>
          <p className='our-experience-description'>Hire app developers to access <br /> our technical proficiency and <br /> stay ahead of the curve of the<br /> competition.</p>
        </div>
        <div className="our-experience-image">
          <Image src={"/assets/images/ex-man.png"} alt={`MappOptimist Technologies experiences`} className="our-experience-image-man float-end object-contain" fill unoptimized />
        </div>
      </div>
      <div className="our-experience-right">
        <div className="our-experience-scroll-track" >
          {data.map((item) => (
            <div key={item.title} className="our-experience-list-item">
              <p className='our-experience-list-title'>{item.title}</p>
              <p className='our-experience-list-description'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}