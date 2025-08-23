import Image from "next/image";
import AboutDropImg from "../../../public/assets/images/aboutDropImg.jpeg";
import Link from "next/link";
import mail from "../../../public/assets/images/mail.png";
import skypeOnly from "../../../public/assets/images/skypeOnly.png";
import india from "../../../public/assets/images/india.png";
import usa from "../../../public/assets/images/usa.png";
import autrelia from "../../../public/assets/images/austrelia.png";

const AboutDropdown = () => {
  return (
    <div className="dropdown-menu shadow service-dropdown-container">
      <div className="mega-content">
        <div className="d-flex flex-row service-dropdown-content">
          <div className="service-dropdown-content-left">
            <div className="service-option-container">
              <div className="service-option">
                <Link className="service-option-title" href="/about-us">Who we are</Link>
                {/* <p className="service-option-text">Meet the trailblazers of tech</p> */}
              </div>
              <div className="service-option">
                <Link className="service-option-title" href="/services">Services we offer</Link>
                {/* <p className="service-option-text">Meet the trailblazers of tech</p> */}
              </div>
              <div className="service-option">
                <Link className="service-option-title" href="/industries-we-serve">Industries we serve</Link>
                {/* <p className="service-option-text">Meet the trailblazers of tech</p> */}
              </div>
              {/* <div className="service-option">
                <Link className="service-option-title" href="/career">Career</Link>
                <p className="service-option-text">Meet the trailblazers of tech</p>
              </div> */}
            </div>
          </div>
          <div className="service-dropdown-content-center">
            <div>
              <h1 className="service-dropdown-title">We are the Top #1 IT Company contributing towards a Smart World</h1>
              <p className="service-dropdown-text">From websites to apps, along with the latest software technologies, we can make up all kinds of successful solutions</p>
              <div className="d-flex w-100 pt-1">
                <div className="w-50">
                  <Image src={ mail } alt="" width={ 48 } height={ 48 } />
                  <h3 className="about-h3">Infohyperlink@gmail.com</h3>
                </div>
                <div className="w-50">
                  <Image src={ skypeOnly } width={ 48 } height={ 48 } alt="" />
                  <h3 className="about-h3">Hyperlink.infosystem</h3>
                </div>
              </div>
              <div className="d-flex gap-2 w-100 justify-content-between pt-4 pb-2">
                <div className="w-33">
                  <Image src={ india } alt="" width={ 48 } height={ 48 } />
                  <h3 className="about-h3">+XXXXXXXXXX</h3>
                </div>
                <div className="w-33">
                  <Image src={ usa } width={ 48 } height={ 48 } alt="" />
                  <h3 className="about-h3">+XXXXXXXXXX</h3>
                </div>
                <div className="w-33">
                  <Image src={ autrelia } width={ 48 } height={ 48 } alt="" />
                  <h3 className="about-h3">+XXXXXXXXXX</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="service-dropdown-content-right">
            <div>
              <Image className="about-img" src={ AboutDropImg } alt="About us" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default AboutDropdown;