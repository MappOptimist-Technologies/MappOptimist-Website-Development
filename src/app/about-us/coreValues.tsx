import Image from "next/image";

const CoreValues = () => {
  return (
    <div className="container wo-coreValue-main" data-aos="fade-up">
      {/* Left Image Section */}
      <div className="core-values-container">
        <div className="core-values-container-image"
          style={{ aspectRatio: '4 / 4', position: 'relative' }}
        >
          <Image
            src={"https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751964989/Core_Value_2_ftp1pw.jpg"}
            alt="Core Values"
            layout="fill"
            className="img-fluid coreValue-imageone object-content" fill unoptimized/>
        </div>
        <div className="core-values-container-content" >
          <div>
            <h2 className="fw-bold fs-2 text-dark wo-coreValue-Opacity">Our Core Values</h2>
          </div>
          <div>
            <h5 className="custom-text-navy fw-bold mt-3">Innovation</h5>
            <p className="text-dark wo-coreValue-Opacity fs-5">
              We embrace cutting-edge technologies to provide forward-thinking solutions.
            </p>
          </div>
          <div>
            <h5 className="custom-text-navy fw-bold mt-2">Integrity</h5>
            <p className="text-dark wo-coreValue-Opacity fs-5">
              We uphold honesty and transparency in all our interactions.
            </p>
          </div>
          <div>
            <h5 className="custom-text-navy fw-bold mt-2">Excellence</h5>
            <p className="text-dark wo-coreValue-Opacity fs-5">
              We strive for the highest quality in every project we undertake.
            </p>
          </div>
          <div>
            <h5 className="custom-text-navy fw-bold mt-2">Collaboration</h5>
            <p className="text-dark wo-coreValue-Opacity fs-5">
              We believe in building strong partnerships with our clients to achieve shared goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreValues;
