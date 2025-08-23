import Image from 'next/image';
import HumanAI from "../../../public/assets/images/human-ai.png";
import QuoteComponent from './getQuote';

interface WhyMappoptimistProps {
  readonly whyPoints: ReadonlyArray<string>;
  whyTitle: string;
  quoteTitle?: string
  quoteDescription?: string
  quoteBtnText?: string
  hideQuote?: boolean;
}

export default function WhyMappoptimistComponent({ whyPoints, whyTitle, quoteTitle, quoteDescription, quoteBtnText, hideQuote = true }: WhyMappoptimistProps) {

  return (
    <div className='company-overview why-container'>
      <h1 className="top-title text-white">{whyTitle}</h1>
      <div className='d-flex company-content'>
        <div className='d-flex position-relative overview-img'>
          <img src="/assets/images/companyOverviewGIF.gif" alt="MappOptimist Technologies overview" />
          <Image className="shake shake-style" src={HumanAI} alt={whyTitle}
            style={{
              width: 'clamp(150px, 20vw, 250px)',
              height: 'clamp(150px, 20vw, 250px)',
            }} />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="experience-card why-card">
          <div className="row">
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title text-white">10+</h5>
                <p className="experience-text">Years of experience</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title text-white">150+</h5>
                <p className="experience-text">Projects completed</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title text-white">200%</h5>
                <p className="experience-text">Happy Clients</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <h5 className="card-title text-white">97%</h5>
                <p className="experience-text">Success Ratio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='why-points pb-3'>
        <ul className="service-specifc-card-points why-points-gap">
          {whyPoints?.map((point: string) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      {hideQuote ? <QuoteComponent
        className='w-100 mt-5'
        title={quoteTitle}
        description={quoteDescription}
        btnText={quoteBtnText} /> : null}
    </div>
  );
}