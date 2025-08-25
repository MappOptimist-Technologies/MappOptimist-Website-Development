"use client"

import Image from "next/image";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import ComAcc1 from "../../../public/assets/images/ComAcc1.png";
import ComAcc2 from "../../../public/assets/images/ComAcc2.png";
import ComAcc3 from "../../../public/assets/images/ComAcc3.png";
import ComAcc4 from "../../../public/assets/images/ComAcc4.png";
import ComAcc5 from "../../../public/assets/images/ComAcc5.png";
import ComAcc6 from "../../../public/assets/images/ComAcc6.png";
import { useRouter } from 'next/navigation'

export default function CompanyAccomplishmentComponent() {
  const router = useRouter()
  const data = [
    { title: "AI-Project Developed", count: "30+", icon: ComAcc1 },
    { title: "Application Developed", count: "50+", icon: ComAcc2 },
    { title: "Website Developed", count: "70+", icon: ComAcc3 },
    { title: "Developers", count: "60+", icon: ComAcc4 },
    { title: "IoT & Embedded", count: "20+", icon: ComAcc5 },
    { title: "Happy Clients", count: "250+", icon: ComAcc6 },
  ]

  return (
    <section className="company-accomplishment-container">
      <div className="company-accomplishment-left">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 justify-content-center align-items-center">
          {data.map((item) => (
            <div key={item.title} className="accomplishment-col">
              <div className="accomplishment-card">
                <Image src={item.icon} className="card-img-icon" alt={item.title} width={64} height={64} />
                <div className="accomplishment-body">
                  <h5 className="accomplishment-title">{item.count}</h5>
                  <p className="accomplishment-text">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="company-accomplishment-right">
        <h1 className='accomplishment-right-title'>MappOptimist Technologies: Driving Global Business Innovation with AI-Powered custom Solutions</h1>
        <h1 className='accomplishment-right-description'>At MappOptimist Technologies, we specialize in delivering comprehensive IT solutions, including AI-driven projects, AI-powered software, AI-powered applications, website development, e-commerce website development, custom WordPress development, blockchain development, cybersecurity solutions, digital marketing solutions, and IT staff augmentation services. We adhere to industry-specific standards, combining them with our technical expertise, development proficiency, and comprehensive research to effectively address your business challenges.</h1>
        <ButtonWithIcon btnText={`Contact us`} onClick={() => { router.push("/contact") }} />
        <Image src={"/assets/images/accomplishmentRightBg.png"} alt="MappOptimist Technologies Accomplishment" className="accomplishmentRightBg" />
      </div>
    </section>
  );
}