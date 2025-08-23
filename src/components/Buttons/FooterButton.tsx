import React from 'react'
import Image from 'next/image'

interface CustomButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leftImage?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rightImage?: any;
  text?: string;
  className?: string;
  style?: React.CSSProperties
}
const FooterButton: React.FC<CustomButtonProps> = ({ leftImage, rightImage, text, className = "", style = {} }) => {
  return (
    <div>
      <button
        className={`btn d-flex justify-content-between border-white bg-transparent align-items-center gap-3 radius  ${className}`}
        style={{
          ...style,
          padding: "5px 10px 5px 20px",
          minWidth: "310px",
        }}>
        {/* Left Image */}
        <div className="d-flex justify-content-start align-items-center " style={{ width: "36px", height: "36px" }}>
          <Image
            src={leftImage}
            alt={text || "Left Icon"}
            className="img-fluid"
          />
        </div>
        {/* Center Text */}
        <div className="text-center fs-5 text-white text-md-start w-100">
          {text}
        </div>
        {/* Right Image */}
        <div className="p-3 bg-white rounded-circle d-flex justify-content-center align-items-center left-button-imafe"
          style={{ width: "50px", height: "46px" }}>
          <Image
            src={rightImage}
            alt="Right Arrow Icon"
            className="img-fluid"
          />
        </div>
      </button>
    </div>
  )
}
export default FooterButton;