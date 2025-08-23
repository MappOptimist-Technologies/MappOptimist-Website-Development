"use client"

import React from 'react';
import Image from "next/image";
import { useFormik } from "formik";
import uploadIcon from "../../../public/assets/images/uploadIcon.png";
import { ContactFormSchema } from '@/utils/validations';

export default function IndustriesForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      whatsapp: "",
      requirement: "",
      location: "",
      budget: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: ContactFormSchema,
    onSubmit: async () => {
    }
  });

  return (
    <section className="industries-form-bg-contaner">
      <div className='industries-form-bg-image'>
        <div className='industries-form-center shadow-lg'>
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="FirstName" className={`form-label mb-0 label-text-style ${formik.values?.name ? "label-text-value" : ""}`}>Name</label>
                <input type="text" className={`form-control underline-input pt-0 ${formik.values?.name ? "underline-input-value" : ""}`} onChange={(e) => formik.setFieldValue("name", e.target.value)} id="FirstName"
                />
              </div>
              <div className="col">
                <label htmlFor="LastName" className={`form-label mb-0 label-text-style ${formik.values?.phone ? "label-text-value" : ""}`}>Phone Number</label>
                <input type="text" className={`form-control underline-input pt-0 ${formik.values?.phone ? "underline-input-value" : ""}`} onChange={(e) => formik.setFieldValue("phone", e.target.value)} id="LastName"
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <label htmlFor="email" className={`form-label mb-0 label-text-style ${formik.values?.email ? "label-text-value" : ""}`}>Email</label>
                <input type="email" className={`form-control underline-input pt-0 ${formik.values?.email ? "underline-input-value" : ""}`} onChange={(e) => formik.setFieldValue("email", e.target.value)} id="email" />
              </div>
              <div className="col">
                <label htmlFor="phone" className={`form-label mb-0 label-text-style ${formik.values?.whatsapp ? "label-text-value" : ""}`}>WhatsApp Contact</label>
                <input type="text" className={`form-control underline-input pt-0 ${formik.values?.whatsapp ? "underline-input-value" : ""}`} onChange={(e) => formik.setFieldValue("whatsapp", e.target.value)} id="phone" />
              </div>
            </div>
          </form>
          <p className="form-new-label" >Your Requirements?</p>
          <div className="mb-3">
            {["Hire Resources", "Project Enquiry"].map((i, v) => (
              <div className="form-check form-check-inline requirement-type" key={v} onClick={() => formik.setFieldValue("requirement", i)}>
                {formik.values?.requirement === i ? <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 7.3235C0 5.56766 0.684819 3.88375 1.90381 2.64219C3.12279 1.40063 4.77609 0.703125 6.5 0.703125C8.22391 0.703125 9.87721 1.40063 11.0962 2.64219C12.3152 3.88375 13 5.56766 13 7.3235C13 9.07933 12.3152 10.7632 11.0962 12.0048C9.87721 13.2464 8.22391 13.9439 6.5 13.9439C4.77609 13.9439 3.12279 13.2464 1.90381 12.0048C0.684819 10.7632 0 9.07933 0 7.3235H0ZM6.12907 10.157L9.87133 5.39211L9.19533 4.8413L6.00427 8.90267L3.744 6.98453L3.18933 7.66246L6.12907 10.1579V10.157Z" fill="#41479B" />
                </svg> : <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2912_2414)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7.3235C0 5.56766 0.684819 3.88375 1.90381 2.64219C3.12279 1.40063 4.77609 0.703125 6.5 0.703125C8.22391 0.703125 9.87721 1.40063 11.0962 2.64219C12.3152 3.88375 13 5.56766 13 7.3235C13 9.07933 12.3152 10.7632 11.0962 12.0048C9.87721 13.2464 8.22391 13.9439 6.5 13.9439C4.77609 13.9439 3.12279 13.2464 1.90381 12.0048C0.684819 10.7632 0 9.07933 0 7.3235Z" fill="#E0E0E0" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2912_2414">
                      <rect width="13" height="13.2407" fill="white" transform="translate(0 0.703125)" />
                    </clipPath>
                  </defs>
                </svg>}
                <label className=" contactus-form-check-label ms-2" htmlFor={`inlineRadio${v + 1}`}>
                  {i}
                </label>
              </div>
            ))}
          </div>
          <p className="form-new-label">Additional information:</p>
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="email" className={`form-label mb-0 label-text-style ${formik.values?.location ? "label-text-value" : ""}`}>Location</label>
              <input type="email" className={`form-control underline-input pt-0 ${formik.values?.location ? "underline-input-value" : ""}`} id="location" onChange={(e) => formik.setFieldValue("location", e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="phone" className={`form-label mb-0 label-text-style ${formik.values?.budget ? "label-text-value" : ""}`}>Estimated Budget</label>
              <input type="text" className={`form-control underline-input pt-0 ${formik.values?.budget ? "underline-input-value" : ""}`} id="budget" onChange={(e) => formik.setFieldValue("budget", e.target.value)} />
            </div>
          </div>
          <div className='d-flex align-items-start justify-content-start' >
            <div className="contact-us-form-upload-button shadow-sm">
              Upload Documents
              <Image src={uploadIcon} alt="Upload Documents" width={16} height={16} className="ms-2" />
            </div>
          </div>
          <div className="form-row my-4">
            <div className="col">
              <label className={`label-text-style ${formik.values?.message ? "label-text-value" : ""}`} htmlFor="Messgae">Tell Us More About Your Needs:</label>
              <input type="email" placeholder='Write your message..' className={`form-control underline-input pt-0 ${formik.values?.message ? "underline-input-value" : ""}`} id="message" onChange={(e) => formik.setFieldValue("message", e.target.value)} />
            </div>
          </div>
          <div className='d-flex align-items-end justify-content-end' >
            <div className="contact-us-form-send-button shadow-sm">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
