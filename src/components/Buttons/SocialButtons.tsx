'use client';
import React from 'react';
import Image from "next/image";
import linkedIn from "../../../public/assets/images/linkedIn.png";
import youtube from "../../../public/assets/images/youtube.png";
import instagram from "../../../public/assets/images/instagram.png";

interface SocialButtonProps {
  width?: number;
  height?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const SocialButton: React.FC<SocialButtonProps> = ({ width, height, icon }) => {
  const icons = {
    linkedIn: linkedIn,
    youtube: youtube,
    instagram: instagram,
  };
  return (
    <div>
      <button
        onClick={() => console.log('Clicked on')}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          color: "white",
          border: "none",
          padding: "8px",
          cursor: "pointer",
          width: "48px",
          height: "48px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: "50%",
        }}
      >
        <Image src={icons[icon as keyof typeof icons]} alt="MappOptimist Technologies Social links" width={width ?? 16} height={height ?? 16} />
      </button>
    </div>
  );
};

export default SocialButton;