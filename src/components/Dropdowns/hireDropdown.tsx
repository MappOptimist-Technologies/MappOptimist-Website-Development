import Image from "next/image";
import HireResourcesDropImg from "../../../public/assets/images/hireResourcesDropImg.jpeg";
import Link from "next/link";

const HireResoursesDropdown = () => {
  return (
    <div className="dropdown-menu shadow service-dropdown-container">
      <div className="mega-content">
        <div className="d-flex flex-row service-dropdown-content">
          <div className="industries-dropdown-content-left">
            <div className="service-option-container">
              <div>
                <h1 className="industries-dropdown-title">Hire Top Tech Talent at MappOptimist Technologies</h1>
                <h3 className="industries-h3">MappOptimist Technologies stands as a trusted partner for companies looking to hire top-tier resources across diverse technical domains.</h3>
                <div className="d-flex gap-2 w-100 pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/ai-ml-engineer">AI/ML Engineer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/data-engineering">Data Engineering</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/big-data-technology">Big Data Technology</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/application-developer">Application Developer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/frontend-developer">Frontend Developer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/backend-developer">Backend Developer</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/website-developer">Website Developer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/blockchain-developer">Blockchain developer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/cybersecurity-developer">CyberSecurity Developer</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/devops-developer">DevOps Developer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/devsec-ops-developer">DevSec-Ops Developer</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/wordpress-developer">WordPress Developer</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/hire-resources/e-commerce-developer">e-Commerce Developer</Link>
                  </div>
                  <div className="w-33">
                  </div>
                  <div className="w-33">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="industries-dropdown-content-right">
            <div>
              <Image className="industries-img" src={HireResourcesDropImg} alt="Industry specific solutions" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default HireResoursesDropdown;