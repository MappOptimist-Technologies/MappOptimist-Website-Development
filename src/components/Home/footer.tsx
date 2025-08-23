
"use client"
import React, { useState } from "react";
import ButtonWithIcon from "@/components/Buttons/ButtonWithIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import Youtube from "../../../public/assets/images/youtube.png";
import Linkedin from "../../../public/assets/images/linkedIn.png";
import Imstagram from "../../../public/assets/images/instagram.png";
import RightArrowIcon from "../../../public/assets/images/rightArrowIcon.png";
import FooterButton from "@/components/Buttons/FooterButton";

const Footer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [selectedCapsules, setSelectedCapsules] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState(""); // ✅ new state

  const data = [
    { id: 1, name: "AIaaS" },
    { id: 2, name: "Mobile/ Web application" },
    { id: 3, name: "AI/ ML Project Dev" },
    { id: 4, name: "Digital Marketing" },
    { id: 5, name: "Cybersecurity" },
    { id: 6, name: "DevOps " },
    { id: 7, name: "IOT" },
    { id: 8, name: "Game development" },
    { id: 9, name: "Staffing" },
    { id: 10, name: "Block chain development" }
  ];

  // ✅ Toggle capsule select/unselect
  const handleCapsuleClick = (capsule: string) => {
    setSelectedCapsules((prev) =>
      prev.includes(capsule)
        ? prev.filter((item) => item !== capsule)
        : [...prev, capsule]
    );
  };

  // ✅ Submit handler
  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      project,
      selectedCapsules,
      timestamp: new Date().toLocaleString(),
    };
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwIxHQdwIqg319iad0CdG8we9LCnaWU08W66P6VJGJ5CM-mEBV6uz4yupXlKnXmllC-/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // ✅ Show temporary success message
      setSuccessMessage("Business team of MappOptimist get back to you soon");
      setTimeout(() => setSuccessMessage(""), 2000); // hide after 2 sec

      // ✅ Clear form
      setName("");
      setEmail("");
      setProject("");
      setSelectedCapsules([]);

    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="footer-container">
      <div
        style={{ backgroundColor: "#212121", paddingTop: "6rem", paddingBottom: "5rem" }}
        className="row px-xl-5 px-3"
      >
        {/* Column 1 */}
        <div className="col-lg-5 col-12 d-flex flex-column align-items-center">
          <div className="row mb-5">
            <div className="col text-white heading-text text-center">
              Connect & share your ideas
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-white d-flex align-items-center justify-content-center flex-column gap-2">
              <FooterButton leftImage={Linkedin} rightImage={RightArrowIcon} text="LinkedIn" />
              <FooterButton leftImage={Youtube} text="Youtube" rightImage={RightArrowIcon} />
              <FooterButton leftImage={Imstagram} text="Instagram" rightImage={RightArrowIcon} />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-lg-7 col-12">
          {/* Inputs (Mobile) */}
          <div className="row d-md-none">
            <div className="col-12">
              <div className="row py-5">
                <div className="col-12 text-white p-3">
                  <input
                    type="text"
                    className="input-bottom-border"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-white p-3">
                  <input
                    type="text"
                    className="input-bottom-border"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile extra input */}
          <div className="row d-md-none my-3">
            <div className="col-12 text-white p-3">
              <input
                type="text"
                className="input-bottom-border"
                placeholder="Tell us more about your project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
          </div>

          {/* Desktop inputs */}
          <div className="row d-none d-md-flex">
            <div className="col-md-6 text-white p-3">
              <input
                type="text"
                className="input-bottom-border"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6 text-white p-3">
              <input
                type="text"
                className="input-bottom-border"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Capsules */}
          <div className="row my-3 px-0 px-md-5">
            <div className="col text-white p-3 fs-5">I want to discuss about...</div>
          </div>
          <div className="row d-md-flex justify-content-md-center align-items-md-center">
            <div className="col text-md-center text-lg-start text-dark">
              {data.map((i) => (
                <p
                  key={i.id}
                  className={`chip-border d-inline-block border rounded-pill px-3 py-1 m-1 ${
                    selectedCapsules.includes(i.name) ? "bg-white text-dark fw-bold" : ""
                  }`}
                  onClick={() => handleCapsuleClick(i.name)}
                  style={{ cursor: "pointer" }}
                >
                  {i.name}
                </p>
              ))}
            </div>
          </div>

          {/* Project input (Desktop) */}
          <div className="row d-none d-md-flex my-5">
            <div className="col text-white p-3">
              <input
                type="text"
                className="input-bottom-border"
                placeholder="Tell us more about your project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="row my-3">
            <div className="col text-white p-3 d-flex flex-column align-items-center justify-content-center">
              <div onClick={handleSubmit}>
                <ButtonWithIcon btnText="Submit your application" />
              </div>
              {successMessage && (
                <div className="text-success mt-3">{successMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;








