import React, { useState, useCallback, useEffect, useRef } from "react";
import "./ComputerEnglish.css";
import {
  FaMobileAlt,
  FaCamera,
  FaCog,
  FaLock,
  FaWhatsapp,
  FaRupeeSign,
  FaCheckCircle,
  FaPlay,
  FaPowerOff,
  FaPhone,
  FaSms,
  FaWifi,
  FaShieldAlt,
} from "react-icons/fa";

const videos = {
  power: {
    title: "మొబైల్ ఆన్/ఆఫ్ చేయడం",
    src: "https://drive.google.com/file/d/10Qj7oM72HuI0Ku9sXeyitIdZkUrNFDuw/preview",
    icon: <FaPowerOff aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-power.jpg",
  },
  calls: {
    title: "కాల్ చేయడం మరియు స్వీకరించడం",
    src: "https://drive.google.com/file/d/14Ri4cGe2MYIGwmhNBkPPYlcG54hX-Md0/preview",
    icon: <FaPhone aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-calls.jpg",
  },
  messages: {
    title: "సందేశాలు పంపడం మరియు స్వీకరించడం",
    src: "https://drive.google.com/file/d/1m26Deu4cXIG65Pal3hbKRZhhNlDeUoHN/preview",
    icon: <FaSms aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-sms.jpg",
  },
  basicApps: {
    title: "ప్రాథమిక యాప్స్ వాడకం",
    src: "https://drive.google.com/file/d/13xXMT-yMDxiKtiMtN9pf8E397-2J-512/preview",
    icon: <FaCamera aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-apps.jpg",
  },
  wifi: {
    title: "వై-ఫైకి కనెక్ట్ అవ్వడం",
    src: "https://drive.google.com/file/d/1ubmwP7lT3S27sGoicyHYtHD7KGQFs-Gy/preview",
    icon: <FaWifi aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-wifi.jpg",
  },
  whatsapp: {
    title: "వాట్సాప్ వాడకం",
    src: "https://drive.google.com/file/d/1gyXp3FCc2R5IpAZgyONCKw3_a3nDOr7s/preview",
    icon: <FaWhatsapp aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-whatsapp.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "మొబైల్ పవర్ మేనేజ్మెంట్",
    info: {
      title: "మొబైల్ పవర్ మరియు బేసిక్ ఆపరేషన్స్",
      description: "మీ మొబైల్ ఫోన్ను సరిగ్గా ఆన్ మరియు ఆఫ్ చేయడం నేర్చుకోండి.",
      points: [
        "పవర్ బటన్ లొకేషన్ మరియు ఫంక్షన్స్.",
        "సేఫ్ షట్డౌన్ మరియు రీస్టార్ట్ ప్రక్రియలు.",
        "బ్యాటరీ మేనేజ్మెంట్ మరియు చార్జింగ్ బేసిక్స్.",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "ఫోన్ కాల్స్ చేయడం",
    info: {
      title: "ఫోన్ కాల్స్ చేయడం మరియు రిసీవ్ చేయడం",
      description: "మొబైల్లో వాయిస్ కమ్యూనికేషన్ యొక్క ముఖ్య నైపుణ్యాన్ని నేర్చుకోండి.",
      points: [
        "నంబర్లు డయల్ చేయడం మరియు ఫోన్ యాప్ వాడకం.",
        "ఇన్కమింగ్ కాల్స్ అన్స్వర్ చేయడం మరియు డిక్లైన్ చేయడం.",
        "కాల్ హిస్టరీ మరియు కాంటాక్ట్స్ మేనేజ్ చేయడం.",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "టెక్స్ట్ మెసేజింగ్",
    info: {
      title: "టెక్స్ట్ మెసేజ్లు పంపడం మరియు రిసీవ్ చేయడం",
      description: "SMS మరియు మల్టీమీడియా మెసేజ్ల ద్వారా కమ్యూనికేట్ చేయండి.",
      points: [
        "టెక్స్ట్ మెసేజ్లు కంపోజ్ చేయడం మరియు పంపడం.",
        "రిసీవ్ చేసిన మెసేజ్లు చదవడం మరియు రిప్లై చేయడం.",
        "మెసేజ్ కన్వర్సేషన్స్ మేనేజ్ చేయడం.",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "బేసిక్ మొబైల్ యాప్స్",
    info: {
      title: "బేసిక్ యాప్స్ వాడకం: కెమెరా, గ్యాలరీ, కాలిక్యులేటర్",
      description: "ప్రతి మొబైల్ యూజర్ తెలుసుకోవాల్సిన ముఖ్య యాప్స్.",
      points: [
        "కెమెరా యాప్తో ఫోటోలు మరియు వీడియోలు తీయడం.",
        "గ్యాలరీలో ఫోటోలు చూడడం మరియు ఆర్గనైజ్ చేయడం.",
        "బేసిక్ మ్యాథ్ ఆపరేషన్స్ కోసం కాలిక్యులేటర్ వాడకం.",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "వై-ఫై కనెక్షన్",
    info: {
      title: "వై-ఫై నెట్వర్క్లకు కనెక్ట్ చేయడం",
      description: "వై-ఫై కనెక్షన్ల ద్వారా ఇంటర్నెట్ యాక్సెస్ చేయండి.",
      points: [
        "వై-ఫై నెట్వర్క్లను కనుగొనడం మరియు కనెక్ట్ చేయడం.",
        "వై-ఫై పాస్వర్డ్లను సరిగ్గా ఎంటర్ చేయడం.",
        "సేవ్ చేసిన వై-ఫై కనెక్షన్లను మేనేజ్ చేయడం.",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "వాట్సాప్ కమ్యూనికేషన్",
    info: {
      title: "కమ్యూనికేషన్ కోసం వాట్సాప్ వాడకం",
      description: "వాట్సాప్ ద్వారా ఆధునిక మెసేజింగ్ మరియు కాలింగ్.",
      points: [
        "వాట్సాప్ అకౌంట్ సెటప్ చేయడం.",
        "మెసేజ్లు, ఫోటోలు మరియు వాయిస్ నోట్స్ పంపడం.",
        "వాయిస్ మరియు వీడియో కాల్స్ చేయడం.",
      ],
    },
  },
};

const MobileTelugu = () => {
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);
  const [selectedImageKey, setSelectedImageKey] = useState(null);

  const videoModalRef = useRef(null);
  const imageModalRef = useRef(null);

  const handleCloseVideo = useCallback(() => setSelectedVideoKey(null), []);
  const handleCloseImage = useCallback(() => setSelectedImageKey(null), []);

  const handleOpenVideo = useCallback((key) => setSelectedVideoKey(key), []);
  const handleOpenImage = useCallback((key) => setSelectedImageKey(key), []);

  const handleKeyDown = useCallback((e, action, key) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action(key);
    }
  }, []);

  useEffect(() => {
    if (selectedVideoKey) videoModalRef.current?.focus();
  }, [selectedVideoKey]);

  useEffect(() => {
    if (selectedImageKey) imageModalRef.current?.focus();
  }, [selectedImageKey]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleCloseVideo();
        handleCloseImage();
      }
    };
    if (selectedVideoKey || selectedImageKey) {
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedVideoKey, selectedImageKey, handleCloseVideo, handleCloseImage]);

  const selectedVideo = selectedVideoKey ? videos[selectedVideoKey] : null;
  const selectedImage = selectedImageKey ? imagesData[selectedImageKey] : null;

  return (
    <div className="english-course-container">
      <header className="course-header">
        <h1>ముఖ్య మొబైల్ ఫోన్ నైపుణ్యాలు</h1>
        <p>6 ప్రాథమిక మొబైల్ నైపుణ్యాలను నేర్చుకోండి — సరళమైన తెలుగులో</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">మీరు నేర్చుకునే 6 ముఖ్య మొబైల్ నైపుణ్యాలు</h2>
        <ul className="lesson-list">
          {Object.entries(videos).map(([key, { title, icon }]) => (
            <li
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`వీడియో ప్లే చేయండి: ${title}`}
            >
              {icon} <span>{title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-section" aria-labelledby="video-lessons">
        <h2 id="video-lessons">ఇంటరాక్టివ్ వీడియో పాఠాలు</h2>
        <div className="video-card-grid">
          {Object.entries(videos).map(([key, { title, icon, thumb }]) => (
            <div
              key={key}
              className="video-card"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`చూడండి: ${title}`}
            >
              <div className="thumbnail">
                <img src={thumb} alt={`${title} థంబ్నెయిల్`} />
                <div className="play-overlay">
                  <FaPlay className="play-icon" aria-hidden="true" />
                </div>
              </div>
              <div className="video-info">
                {icon} <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedVideo && (
        <div
          className="video-modal-overlay"
          onClick={handleCloseVideo}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={videoModalRef}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="video-modal-title">{selectedVideo.title}</h2>
            <iframe 
              src={selectedVideo.src} 
              className="modal-video"
              frameBorder="0" 
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
            <button className="close-btn" onClick={handleCloseVideo}>మూసివేయి</button>
          </div>
        </div>
      )}

      <section className="image-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">మొబైల్ భావనలను అన్వేషించండి</h2>
        <div className="images">
          {Object.entries(imagesData).map(([key, { src, alt }]) => (
            <img
              key={key}
              src={src}
              alt={alt}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenImage(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenImage, key)}
              aria-label={`దీని గురించి మరింత తెలుసుకోండి: ${alt}`}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="image-info-modal-overlay"
          onClick={handleCloseImage}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={imageModalRef}
        >
          <div
            className="image-info-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="image-info-modal-title">{selectedImage.info.title}</h2>
            <p>{selectedImage.info.description}</p>
            <ul className="image-info-points">
              {selectedImage.info.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={handleCloseImage}>మూసివేయి</button>
          </div>
        </div>
      )}

      <footer className="course-footer">
        <p>© {new Date().getFullYear()} డిజిటల్ లిటరసీ ప్లాట్ఫాం — నేర్చుకోండి. అన్వేషించండి. విజయం సాధించండి.</p>
      </footer>
    </div>
  );
};

export default MobileTelugu;