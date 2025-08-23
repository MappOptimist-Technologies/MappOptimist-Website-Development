'use client';
import React from 'react';
interface ButtonWithIconProps {
  btnText: string;
  onClick?: () => void;
}
const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ btnText = "", onClick = () => { } }) => {
  const circleRef = React.useRef<HTMLDivElement>(null);
  const handleMouseLeave = () => {
    const circle = circleRef.current;
    if (circle) {
      circle.classList.remove('jello-horizontal');
      void circle.offsetWidth;
      circle.classList.add('jello-horizontal');
    }
  };
  return (
    <div>
      <button className="animated-button"
        onClick={ () => onClick?.() }
        onMouseLeave={ handleMouseLeave }
      >
        <span className="button-text">{ btnText }</span>
        <div className="circle " ref={ circleRef }>
          <svg className="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.73774 3.13543L1.70394 11.1692C1.55345 11.3197 1.37667 11.3949 1.17361 11.3948C0.970554 11.3949 0.793777 11.3197 0.643281 11.1692C0.492785 11.0187 0.417596 10.8419 0.417714 10.6389C0.417596 10.4358 0.492785 10.2591 0.643281 10.1086L8.67708 2.07477L4.02113 2.07477C3.81077 2.07465 3.63576 2.00347 3.4961 1.86122C3.35657 1.71886 3.28315 1.54161 3.27584 1.32948C3.27596 1.11016 3.34531 0.927545 3.48391 0.781645C3.62262 0.635627 3.80169 0.56262 4.02113 0.56262L10.355 0.562619C10.4875 0.56262 10.604 0.585778 10.7045 0.632094C10.8052 0.678291 10.8981 0.743992 10.9833 0.829199C11.0685 0.914405 11.1342 1.00733 11.1804 1.10798C11.2267 1.2085 11.2499 1.325 11.2499 1.45746L11.2499 7.79137C11.2498 8.00174 11.1768 8.17851 11.031 8.3217C10.885 8.46489 10.7023 8.53654 10.483 8.53666C10.2709 8.52936 10.0936 8.45817 9.95128 8.32312C9.80892 8.18806 9.73774 8.01081 9.73774 7.79137L9.73774 3.13543Z" fill="#41479B" />
          </svg>
        </div>
        <div className="circle-expand"></div>
      </button>
    </div>
  );
};
export default ButtonWithIcon;