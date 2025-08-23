"use client"

import { useEffect, useState } from "react";

const data = [
  {
    className: "slide-up-1",
    title: "LAN",
    description: "Innovative ideas drive successful projects. Our ideation process generates winning concepts, increases efficiency, and maximizes ROI.",
    backgroundImage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887831/plan_ctidwa.jpg"
  },
  {
    className: "slide-up-2",
    title: "ROCESS",
    description: "we engage in brainstorming and concept development to generate innovative ideas. We then refine and prioritize these ideas, selecting the most promising solutions. Finally, we develop a strategic plan and execute it to deliver tangible, measurable results.",
    backgroundImage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887829/Process_vbqi2i.jpg"
  },
  {
    className: "slide-up-3",
    title: "UBLISH",
    description: "Innovative ideas drive successful projects. Our ideation process generates winning concepts, increases efficiency, and maximizes ROI.",
    backgroundImage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887829/Progress_bmqzwh.jpg"
  },
];

export default function PublicPlanProcessComponent () {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change item every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const currentItem = data[currentIndex];

  return (
    <section className="p-section">
      <div className="p-section-content">
        <h3 >What sets us apart as a leading global IT development company isn&apos;t just our expertise, but our unwavering commitment to core values that drive excellence in every project we undertake.</h3>
      </div>
      <div className="d-flex p-section-container">
        <div className="w-25 p-section-card">
          <h1 className="text-white p-section-h1">P</h1>
        </div>
        <div className="w-75 background-container" style={ {
          backgroundImage: `url(${currentItem.backgroundImage})`,
          opacity: 0.85,
          backgroundSize: 'cover',
        } }>
          <div style={ { display: 'flex', height: '100%', paddingLeft: '30px' } }>
            <div className={ `${currentItem.className} p-text-container` } style={ { display: 'flex', flexDirection: 'column', color: 'white', alignSelf: 'center' } }>
              <h1 className="lan-title">{ currentItem.title }</h1>
              <h5 className="lan-description">{ currentItem.description }</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}