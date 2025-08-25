import React from 'react'
import Frame from "../../../public/assets/images/Hire_Developer_Images.png"
import Image from 'next/image'

function OurExperienceTwo() {

  const data = [
    { title: "Highly Skilled Talent Pool", description: "We provide access to a carefully vetted team of professionals with expertise in cutting-edge technologies, including AI/ML, Blockchain, Cybersecurity, Web Development, DevOps, and more. Our team consists of specialists from premier institutions like IITs and IISc, ensuring you work with the best minds in the industry." },
    { title: "Tailored Solutions", description: "We customize our offerings to align with your specific business requirements. Whether you need resources for short-term projects or long-term engagements, we provide scalable and flexible solutions." },
    { title: "End-to-End Support", description: "From onboarding to project completion, we offer 360-degree support to ensure a seamless experience. Our resources are proficient, adaptable, and committed to driving results for your business." },
    { title: "NDA and Confidentiality", description: "We value your trust and prioritize data security. Every engagement is backed by a Non-Disclosure Agreement (NDA), ensuring the confidentiality of your business information and intellectual property." },
    { title: "Agility and Innovation", description: "We leverage the latest technologies and agile methodologies to deliver innovative solutions that empower your business to stay ahead in the market." },
    { title: "Diverse Industry Expertise", description: "Our experience spans multiple industries, including healthcare, e-commerce, finance, logistics, gaming, and more. This enables us to provide industry-specific expertise for optimal outcomes." },
  ]

  return (
    <section className='our-experience-containerTwo'>
      <div className='our-experience-container-Two-Image'>
        <div className='our-experience-container-Two-left'>
          <Image className='our-experience-container-Two-Image-Frame' src={Frame.src} alt='experience reviews' />
        </div>
        <div className='our-experience-container-Two-right'>
          <div className='our-experience-container-Two-scroll-track'>
            {
              data?.map((i, index) =>
                <div className={`our-experience-container-Two-list-item ${index === 0 ? "primary-bg-color our-experience-container-first-list-item" : ""}`} key={i?.title}>
                  <h1>{i?.title}</h1>
                  <p>
                    {i?.description}
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurExperienceTwo
