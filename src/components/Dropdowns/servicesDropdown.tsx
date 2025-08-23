import Image from "next/image";
import ServiceDropImg from "../../../public/assets/images/serviceDropImg.jpeg";
import Link from "next/link";

const ServicesDropdown = () => {
  return (
    <div className="dropdown-menu shadow service-dropdown-container">
      <div className="mega-content">
        <div className="d-flex flex-row service-dropdown-content">
          <div className="industries-dropdown-content-left">
            <div className="service-option-container">
              <div>
                <h1 className="industries-dropdown-title">Top Scalable AI-Powered Software Solutions for Global Business Growth</h1>
                <h3 className="industries-h3">From idea to launch, MappOptimist Technologies transforms your vision into AI-powered apps, websites, and smart enterprise solutions — trusted by clients worldwide.</h3>
                <div className="d-flex gap-2 w-100 pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/ai-machine-learning-development-services">AI/ML Project Development</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/mobile-app-development-services">Mobile Application Development</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/website-development-services">Website Development</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/custom-software-development-services">Custom Software Development</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/blockchain-solution-development-services">BlockChain Development</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/cybersecurity-services">Cybersecurity Services</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/digital-marketing-solution-services">Digital Marketing Services</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/services/it-staff-augmentation-services">IT Staff Augmentation Services</Link>
                  </div>
                  <div className="w-33">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="industries-dropdown-content-right">
            <div>
              <Image className="industries-img" src={ServiceDropImg} alt="Industry specific solutions" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default ServicesDropdown;