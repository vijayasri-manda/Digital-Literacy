import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./CertificateEnglish.css";

const CertificateEnglish = () => {
  const location = useLocation();
  const name = location.state?.name || "Student";
  const certificateRef = useRef(null);

  const handleDownload = async () => {
    const input = certificateRef.current;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${name}_Certificate.pdf`);
  };

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://your-website.com/certificate?name=${encodeURIComponent(
    name
  )}`;

  return (
    <div className="certificate-container">
      <div className="certificate-box" ref={certificateRef}>
        <h1>Certificate of Completion</h1>
        <p>This certifies that</p>
        <h2>{name}</h2>
        <p>has successfully completed the</p>
        <h3>Computer & Mobile Basics Course</h3>
        <div className="course-details">
          <p>• Foundational Computer Skills</p>
          <p>• Essential Mobile Phone Operations</p>
          <p>• Digital Literacy Fundamentals</p>
        </div>
        <p>Presented by Digital Literacy Program</p>
        <div className="certificate-date">
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="certificate-actions">
        <button onClick={handleDownload}>Download Certificate (PDF)</button>

        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            style={{ marginRight: "8px" }}
          >
            <path
              fill="white"
              d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19M8.5 17V10H6V17H8.5M7.25 8.75A1.25 1.25 0 107.25 6.25A1.25 1.25 0 007.25 8.75M18 17V13.25C18 11.8 17.25 11 15.9 11C15 11 14.45 11.5 14.2 11.95V11H11.75V17H14.25V13.6C14.25 13 14.6 12.5 15.3 12.5C15.95 12.5 16.25 13 16.25 13.65V17H18Z"
            />
          </svg>
          Share on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default CertificateEnglish;
