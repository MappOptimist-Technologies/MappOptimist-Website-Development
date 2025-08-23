"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import logo from "../../../public/assets/images/logo.png";
import indiaicon from "../../../public/assets/images/indiaicon.png";
import usicon from "../../../public/assets/images/usaiocn.png";
import ukicon from "../../../public/assets/images/ukicon.png";
import whatappicon from "../../../public/assets/images/whatsapp-icon.png";
import twittericon from "../../../public/assets/images/twitter.png";
import instagramicon from "../../../public/assets/images/instagramicon.png";
import facebookicon from "../../../public/assets/images/facebook.png";
import youtubeicon from "../../../public/assets/images/youtube-icon.png";

const Navbar: React.FC = () => {

  const submenuKeys = ["about", "services", "hire", "industries"] as const;
  type SubmenuKey = typeof submenuKeys[number];

  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const [activeSubMenu, setActiveSubMenu] = useState<SubmenuKey | null>(null);

  const openMain = () => {
    setIsMainVisible(true);
    setTimeout(() => setIsMainOpen(true), 10); // trigger CSS
  };

  const closeMain = () => {
    setIsMainOpen(false);
    setTimeout(() => {
      setIsMainVisible(false);
    }, 300); // after animation
  };

  const openSubmenu = (menu: keyof typeof menus) => {
    if (submenuKeys.includes(menu as SubmenuKey)) {
      setActiveSubMenu(menu as SubmenuKey);
      setIsSubmenuVisible(true);
      setTimeout(() => setIsSubmenuOpen(true), 10);
    }
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
    setTimeout(() => {
      setIsSubmenuVisible(false);
      setActiveSubMenu(null);
    }, 300);
  };

  const socialIcons = [
    { id: 1, img: whatappicon, alt: "WhatsApp" },
    { id: 2, img: twittericon, alt: "Twitter" },
    { id: 3, img: instagramicon, alt: "Instagram" },
    { id: 4, img: facebookicon, alt: "Facebook" },
    { id: 5, img: youtubeicon, alt: "YouTube" },
  ];

  const phoneNumbers = [
    { id: 1, icon: indiaicon, number: "+91 7777777777" },
    { id: 2, icon: usicon, number: "+1 8888888888" },
    { id: 3, icon: ukicon, number: "+44 9999999999" },
  ];

  type MainMenuItem = {
    id: number;
    name: string;
    submenu?: keyof typeof menus;
    link?: string;
  };

  const menus: Record<string, MainMenuItem[]> = {
    main: [
      { id: 1, name: "Home", link: "/" },
      { id: 1, name: "About Us", link: "/about-us" },
      { id: 2, name: "Services", link: "/services" },
      { id: 3, name: "Industries We Serve", link: "/industries-we-serve" },
      { id: 4, name: "Hire Resources", link: "/hire-resources/dev" },
      { id: 5, name: "Blogs", link: "/blogs" },
      { id: 6, name: "Contact", link: "/contact" },
    ],
    about: [
      { id: 1, name: "Who we are", link: "/about-us" },
      { id: 2, name: "Services we offers", link: "/services" },
      { id: 3, name: "Industries we serve", link: "/industries-we-serve" },
    ],
    services: [
      // { id: 1, name: "AI-as-a-Service (AIaaS)", link: "/services/ai-machine-learning-development-services" },
      { id: 2, name: "AI/ML Project Development", link: "/services/ai-machine-learning-development-services" },
      { id: 3, name: "Mobile Application Development", link: "/services/mobile-app-development-services" },
      { id: 4, name: "Website Development", link: "/services/website-development-services" },
      { id: 5, name: "Custom Software Development", link: "/services/custom-software-development-services" },
      { id: 6, name: "BlockChain Development", link: "/services/blockchain-solution-development-services" },
      { id: 7, name: "Cybersecurity Services", link: "/services/cybersecurity-services" },
      { id: 8, name: "Digital Marketing Services", link: "/services/digital-marketing-solution-services" },
      { id: 9, name: "IT Staff Augmentation Services", link: "/services/it-staff-augmentation-services" },
    ],
    hire: [
      { id: 1, name: "AI/ML Engineer", link: "/hire-resources/ai-ml-engineer" },
      { id: 2, name: "Data Engineering", link: "/hire-resources/data-engineer" },
      { id: 3, name: "Big Data Technology", link: "/hire-resources/big-data-technology" },
      { id: 4, name: "Application Developer", link: "/hire-resources/application-developer" },
      { id: 5, name: "Website Developer", link: "/hire-resources/website-developer" },
      { id: 6, name: "Frontend Developer", link: "/hire-resources/frontend-developer" },
      { id: 7, name: "Backend Developer", link: "/hire-resources/backend-developer" },
      { id: 8, name: "Blockchain Developer", link: "/hire-resources/blockchain-developer" },
      { id: 9, name: "CyberSecurity Developer", link: "/hire-resources/cybersecurity-developer" },
      { id: 10, name: "DevOps Developer", link: "/hire-resources/devops-developer" },
      { id: 11, name: "DevSec-Ops Developer", link: "/hire-resources/devsec-ops-developer" },
      { id: 12, name: "WordPress Developer", link: "/hire-resources/wordpress-developer" },
      { id: 13, name: "e-Commerce Developer", link: "/hire-resources/e-commerce-developer" },
    ],
    industries: [
      { id: 1, name: "Retail & E-Commerce", link: "/industries-we-serve/retail-e-commerce" },
      { id: 2, name: "Healthcare", link: "/industries-we-serve/healthcare" },
      { id: 3, name: "Finance & Banking", link: "/industries-we-serve/finance-banking" },
      { id: 4, name: "Logistics & Transportation", link: "/industries-we-serve/logistics-transportation" },
      { id: 5, name: "Fashion & Apparel", link: "/industries-we-serve/fashion-apparel" },
      { id: 6, name: "Agriculture", link: "/industries-we-serve/agriculture" },
      { id: 7, name: "Education", link: "/industries-we-serve/education" },
      { id: 8, name: "Technology & Startups", link: "/industries-we-serve/technology-startups" },
      { id: 9, name: "QSR, F&B", link: "/industries-we-serve/qsr-fb" },
      { id: 10, name: "Tax & Legal", link: "/industries-we-serve/tax-legal" },
      { id: 11, name: "Government & Public Sector", link: "/industries-we-serve/government-public-sector" },
      { id: 12, name: "Business Process Automation", link: "/industries-we-serve/business-process-automation" },
      { id: 13, name: "AI in Construction & Real Estate", link: "/industries-we-serve/ai-in-construction-real-estate" },
      // { id: 14, name: "AI & Emerging Technologies", link: "/industries-we-serve/ai-powered-finTech-software-solutions" },
      // { id: 15, name: "Political", link: "/industries-we-serve/political" },
      // { id: 16, name: "AdTech & Marketing Tech", link: "/industries-we-serve/ai-powered-advertising-marketing-tech" },
    ],
  };

  return (


    <nav className="navbar navbar-expand-xl customNav z-index-9" style={{ zIndex: 9999 }}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center d-block d-xl-none" onClick={() => { openMain() }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 34H38M10 24H38M10 14H38" stroke="white" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Link className="navbar-brand d-none d-xl-block" href="/" passHref>
          <Image
            src={logo}
            alt="logo"
            width={85}
            height={65}
            className="d-none d-xl-block"
          />
        </Link>
        <Link
          href="/" passHref
          className="ms-auto d-block d-xl-none">
          <Image
            src={logo}
            alt="logo"
            width={55}
            height={55}
          />
        </Link>

        <div className="navbar-collapse collapse d-none d-xl-block" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-scroll ms-auto">
            <li className="nav-item dropdown dropdown-mega position-static home-hover">
              <Link className="nav-link text-white" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static nav-left-margin">
              <Link className="nav-link text-white" href="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static nav-left-margin">
              <Link className="nav-link text-white" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static nav-left-margin">
              <Link className="nav-link text-white" href="/industries-we-serve">
                Industries We Serve
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static nav-left-margin">
              <Link className="nav-link text-white" href="/hire-resources/dev">
                Hire Resources
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static nav-left-margin">
              <Link className="nav-link text-white" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-mega position-static nav-left-margin">
              <Link className="nav-link text-white" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* BACKDROP */}
        {(isMainVisible || isSubmenuVisible) && (
          <div
            className="offcanvas-backdrop fade show"
            role="button"
            tabIndex={-1}
            onClick={() => {
              if (isSubmenuVisible) {
                closeSubmenu();
              } else {
                closeMain();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                if (isSubmenuVisible) {
                  closeSubmenu();
                } else {
                  closeMain();
                }
              }
            }}
          ></div>
        )}

        {/* Main Offcanvas */}
        {isMainVisible && (
          <div className={`offcanvas offcanvas-start  ${isMainOpen ? "show" : ""}`} tabIndex={-1}>
            <div className="offcanvas-header">
            </div>
            <div className="offcanvas-body p-0 m-0 d-xl-none">
              <ul className="navbar-nav flex-column align-items-start">
                {menus.main?.map((item) => (
                  <li
                    key={item.id}
                    className="nav-item w-100 border-bottom d-flex align-items-center justify-content-between px-4 py-2"
                  >
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => openSubmenu(item.submenu!)}
                          className="btn btn-link nav-link text-start w-100 p-0 menu-title"
                        >
                          {item.name}
                        </button>
                        <FaChevronRight className="nav-icon" />
                      </>
                    ) : (
                      <Link href={item.link || "#"} className="nav-link p-0 text-start w-100 menu-title">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
                {phoneNumbers?.map((phone) => (
                  <li key={phone.id} className="nav-item w-100 border-bottom px-4 d-flex align-items-center gap-3 py-2  ">
                    <Image className="circle-container circle-image" src={phone.icon} alt="Phone Icon" />
                    <a className="nav-link text-start w-100 menu-numbers" href="#">
                      {phone.number}
                    </a>
                  </li>
                ))}
                <li className="nav-item px-4 d-flex align-items-center gap-3 my-3">
                  {socialIcons.map((icon) => (
                    <Image key={icon.id} src={icon.img} alt={icon.alt} width={24} height={24} />
                  ))}
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Submenu Offcanvas */}
        {isSubmenuVisible && (
          <div className={`offcanvas  offcanvas-start ${isSubmenuOpen ? "show" : ""}`} tabIndex={-1}>
            <div className="offcanvas-header mt-4 border-bottom">
              <div className="d-flex align-items-center justify-content-between w-100" >
                <FaChevronLeft className="nav-icon" onClick={() => closeSubmenu()} />
                <a className="back-title" onClick={() => closeSubmenu()}>Back</a>
              </div>
            </div>
            <div className="offcanvas-body p-0 m-0">
              <ul className="navbar-nav flex-column d-flex text-start ">
                {activeSubMenu &&
                  menus[activeSubMenu]?.map((item) => (
                    <li key={item.id} className="nav-item w-100 border-bottom py-2 px-4"
                      onClick={() => console.log("Clicked item:", item.name)}
                    >
                      {item?.link ? (
                        <Link href={item.link} className="nav-item w-100 menu-title">
                          {item.name}
                        </Link>
                      ) : (
                        <span className="nav-item w-100 menu-title">{item.name}</span>
                      )}
                    </li>
                  ))}
                <li className="nav-item px-4 d-flex align-items-center gap-3 my-3">
                  {socialIcons.map((icon) => (
                    <Image key={icon.id} src={icon.img} alt={icon.alt} width={24} height={24} />
                  ))}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Navbar;
