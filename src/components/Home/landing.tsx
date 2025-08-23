"use client"
import TextTransition, { presets } from 'react-text-transition';
import Navbar from "../header/navbar";
import SocialButton from "@/components/Buttons/SocialButtons";
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import { useEffect, useState } from 'react';
import scrollGIF from "../../../public/assets/images/scrollGIF.gif";
import Image from "next/image";

const TEXTS = ['Artificial Intelligence (AI)', 'Mobile Application', 'Website Development', 'Custom Software', 'Blockchain Solutions', 'Digital Marketing', 'IoT & Embedded Solutions'];

export default function LandingComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className='landing-container'>
      <div className='landing-overlay'></div>
      <Navbar />
      <div className='mx-2 w-100' style={{ marginTop: "auto", marginBottom: "auto", zIndex: 2 }}>
        <div className="d-flex text-center justify-content-center custom-text-animation">
          Transforming Businesses with Innovation and Technology
        </div>
        <div className='ai-container'>
          <div className='ai-content d-flex px-2'>
            <h1 className='me-2'>#1</h1>
            <div className='d-flex flex-column justify-content-center text-left'>
              <TextTransition
                className='text-transition-css'
                springConfig={presets.gentle}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
              <h3>Development Company</h3>
            </div>
          </div>
        </div>
        <h6 className="sub-text-css ms-2 me-2">Where Creativity and Advanced Technology Come Together to Propel Your Success Forward</h6>
        <div className='d-flex gap-2 justify-content-center'>
          <ButtonWithIcon btnText={`Let's work`} />
          <button className="custom-button">Explore more</button>
        </div>
      </div>
      <div className="container" style={{ zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "45px 0px",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <SocialButton icon={"linkedIn"} width={20} height={20} />
            <SocialButton icon={"youtube"} width={18} />
            <SocialButton icon={"instagram"} />
          </div>
          <div className="d-flex gap-3">
            <h5 className="">Scroll</h5>
            <Image src={scrollGIF}
              alt="scroll gif"
              width={24}
              height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}