"use client"
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function AutoCompanySlideComponent () {
  const TEXTS = ['Software', 'Mobile', 'Web', 'Blockchain', 'AI'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="company-slide-container">
      <div className="d-flex w-100">
        <div className='custom-slide-animation d-flex'>
          The Best 
          <div className='animated-text'>
            <TextTransition
              springConfig={ presets.gentle }
            >
              { TEXTS[index % TEXTS.length] }
            </TextTransition>
          </div>
          Development Company
        </div>
      </div>
    </section>
  );
}