import Image from "next/image";
import Link from "next/link";
import IndustriesDropImg from "../../../public/assets/images/industriesDropBgImg.jpeg";

const IndustriesDropdown = () => {

  return (
    <div className="dropdown-menu shadow service-dropdown-container">
      <div className="mega-content">
        <div className="d-flex flex-row service-dropdown-content">
          <div className="industries-dropdown-content-left">
            <div className="service-option-container">
              <div>
                <h1 className="industries-dropdown-title">Top AI & IT Solutions Company for Industry-Specific Needs</h1>
                <h3 className="industries-h3">We empower Healthcare, FinTech, E-commerce, Logistics, and more with cutting-edge digital solutions.</h3>
                <div className="d-flex gap-2 w-100 pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/retail-e-commerce">Retail & E-Commerce</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/healthcare">Healthcare</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/finance-banking">Finance & Banking</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/logistics-transportation">Logistics & Transportation</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/fashion-apparel">Fashion & Apparel</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/agriculture">Agriculture</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/education">Education</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/technology-startups">Technology & Startups</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/qsr-fb">QSR, F&B</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/tax-legal">Tax & Legal</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/government-public-sector">Government & Public Sector</Link>
                  </div>
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/business-process-automation">Business Process Automation</Link>
                  </div>
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between pt-3 pb-2">
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/ai-in-construction-real-estate">AI in Construction & Real Estate</Link>
                  </div>
                  {/* <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/ai-powered-finTech-software-solutions">AI & Emerging Technologies</Link>
                  </div> */}
                  <div className="w-33">
                    {/* <Link className="industries-h1" href="/industries-we-serve/political">Political</Link> */}
                  </div>
                  <div className="w-33">
                  </div>
                </div>
                {/* <div className="d-flex gap-2 w-100 justify-content-between pt-3">
                  <div className="w-33">
                    <Link className="industries-h1" href="/industries-we-serve/ai-powered-advertising-marketing-tech">AdTech & Marketing Tech</Link>
                  </div>
                  <div className="w-33">
                  </div>
                  <div className="w-33">
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="industries-dropdown-content-right">
            <div>
              <Image className="industries-img" src={IndustriesDropImg} alt="Industry specific solutions" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default IndustriesDropdown;