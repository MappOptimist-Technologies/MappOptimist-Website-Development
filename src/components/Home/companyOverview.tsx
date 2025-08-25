import Image from 'next/image';
import HumanAI from "../../../public/assets/images/human-ai.png";

export default function CompanyOverviewComponent () {
  return (
    <div className='company-overview'>
      <h1 className="top-title">We&apos;re committed to deliver only exceptional quality work</h1>
      <div className='d-flex company-content'>
        <div className='d-flex position-relative overview-img'>
          <Image src="/assets/images/companyOverviewGIF.gif" alt="company overview" />
          <Image className="shake shake-style" src={ HumanAI } alt="Human AI"
            style={ {
              width: 'clamp(150px, 20vw, 250px)',
              height: 'clamp(150px, 20vw, 250px)',
            } } />
        </div>
        <div className='d-flex overview-h4'>
          <h4 className="founded-text1 text-black">Top AI-Driven Project Development, Mobile App Development, Website Development, Custom Software Solutions, Blockchain Technology, and IT Consulting Company— Transforming Ideas into Innovative, Future-Ready Solutions.</h4>
          
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="experience-card">
          <div className="row">
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title">10+</h5>
                <p className="experience-text">Years of experience</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title">150+</h5>
                <p className="experience-text">Projects completed</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title">200%</h5>
                <p className="experience-text">Happy Clients</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title">100%</h5>
                <p className="experience-text">On Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}