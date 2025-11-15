import React, { useState, useCallback, useEffect, useRef } from "react";
import "./ComputerEnglish.css";
import {
  FaLaptop,
  FaWifi,
  FaGlobe,
  FaKeyboard,
  FaEnvelope,
  FaCheckCircle,
  FaPlay,
  FaPowerOff,
  FaMouse,
  FaDesktop,
  FaFolderOpen,
  FaShieldAlt,
} from "react-icons/fa";

const videos = {
  power: {
    title: "కంప్యూటర్ ఆన్/ఆఫ్ చేయడం",
    src: "https://drive.google.com/file/d/1mmAf5emWCp6d7PLnKBBTZKnOmaKMTFlD/preview",
    icon: <FaPowerOff aria-hidden="true" />,
    thumb: "/assets/thumbs/startup.jpg",
  },
  mouse: {
    title: "మౌస్ మరియు కీబోర్డ్ వాడకం",
    src: "https://drive.google.com/file/d/1NqdN3ERi4V9EbbLvLmpWbSp_IKlTmdbF/preview",
    icon: <FaMouse aria-hidden="true" />,
    thumb: "/assets/thumbs/mouse.jpg",
  },
  desktop: {
    title: "డెస్క్టాప్ వాతావరణం అర్థం చేసుకోవడం",
    src: "https://drive.google.com/file/d/193IRIfv2QFcpHhE1wCB-63jr2rd7Pijf/preview",
    icon: <FaDesktop aria-hidden="true" />,
    thumb: "/assets/thumbs/desktop.jpg",
  },
  fileManagement: {
    title: "ప్రాథమిక ఫైల్ నిర్వహణ",
    src: "https://drive.google.com/file/d/1Dmsg17FsquXuy8k_SGF8o6dvTz5KOKsH/preview",
    icon: <FaFolderOpen aria-hidden="true" />,
    thumb: "/assets/thumbs/files.jpg",
  },
  internet: {
    title: "ఇంటర్నెట్ మరియు వెబ్ బ్రౌజింగ్ పరిచయం",
    src: "https://drive.google.com/file/d/1y-ElFiRXvNE5StQ38RAT8prDb74N0lBT/preview",
    icon: <FaGlobe aria-hidden="true" />,
    thumb: "/assets/thumbs/internet.jpg",
  },
  safety: {
    title: "ఆన్లైన్ భద్రత మరియు గోప్యత",
    src: "https://drive.google.com/file/d/1K3gcv0Pp7EQgF9yVaiHFhy7ahY1qC9ac/preview",
    icon: <FaShieldAlt aria-hidden="true" />,
    thumb: "/assets/thumbs/safety.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "RAM గురించి నేర్చుకోవడం",
    info: {
      title: "RAM (రాండమ్ యాక్సెస్ మెమరీ) అర్థం చేసుకోవడం",
      description: "RAM కంప్యూటర్ ఉపయోగిస్తున్న డేటాను తాత్కాలికంగా నిల్వ చేస్తుంది.",
      points: [
        "స్వల్పకాలిక యాక్సెస్ కోసం హార్డ్ డ్రైవ్ కంటే వేగంగా.",
        "అనేక ప్రోగ్రామ్లను అమలు చేయడానికి అవసరం.",
        "కంప్యూటర్ ఆఫ్ అయినప్పుడు డేటా పోతుంది.",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "CPU గురించి నేర్చుకోవడం",
    info: {
      title: "CPU (సెంట్రల్ ప్రాసెసింగ్ యూనిట్) అంటే ఏమిటి?",
      description: "CPU కంప్యూటర్లోని అన్ని సూచనలు మరియు పనులను ప్రాసెస్ చేస్తుంది.",
      points: [
        "కంప్యూటర్ యొక్క మెదడుగా పనిచేస్తుంది.",
        "ప్రాసెసింగ్ వేగాన్ని నిర్ణయిస్తుంది.",
        "RAM మరియు స్టోరేజ్తో కలిసి పనిచేస్తుంది.",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "స్టోరేజ్ పరికరాల అవలోకనం",
    info: {
      title: "హార్డ్ డ్రైవ్ vs. SSD",
      description: "మీ కంప్యూటర్లో దీర్ఘకాలిక డేటా నిల్వ.",
      points: [
        "HDD: సాంప్రదాయిక, సరసమైన, నెమ్మదిగా.",
        "SSD: వేగంగా, మన్నికైన, ఖరీదైన.",
        "సిస్టమ్ బూట్ సమయం మరియు అప్లికేషన్ వేగాన్ని ప్రభావితం చేస్తుంది.",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "ఆపరేటింగ్ సిస్టమ్లను అర్థం చేసుకోవడం",
    info: {
      title: "ఆపరేటింగ్ సిస్టమ్లను అర్థం చేసుకోవడం",
      description: "OS వినియోగదారు మరియు హార్డ్వేర్ మధ్య ఇంటర్ఫేస్.",
      points: [
        "సిస్టమ్ వనరులను నిర్వహిస్తుంది.",
        "అప్లికేషన్లు మరియు ఇంటర్ఫేస్లను అమలు చేస్తుంది.",
        "ఉదాహరణలు: Windows, macOS, Linux.",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "పెరిఫెరల్స్ గురించి నేర్చుకోవడం",
    info: {
      title: "పెరిఫెరల్స్ యొక్క ప్రాముఖ్యత",
      description: "వినియోగాన్ని మెరుగుపరచడానికి బాహ్యంగా కనెక్ట్ చేయబడిన పరికరాలు.",
      points: [
        "ఇన్పుట్: కీబోర్డ్, మౌస్, స్కానర్.",
        "అవుట్పుట్: ప్రింటర్, మానిటర్, స్పీకర్.",
        "ఐచ్ఛికం కాని కార్యాచరణను పెంచుతుంది.",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "నెట్వర్కింగ్ ప్రాథమికాలు",
    info: {
      title: "నెట్వర్కింగ్ ప్రాథమికాలు",
      description: "పరికరాల మధ్య డేటా భాగస్వామ్యాన్ని ప్రారంభిస్తుంది.",
      points: [
        "LAN: స్థానిక కనెక్షన్లు (ఇల్లు/పాఠశాల).",
        "WAN: ఇంటర్నెట్ ద్వారా గ్లోబల్ కనెక్షన్లు.",
        "పరికరాలు: రూటర్, మోడెమ్, స్విచ్.",
      ],
    },
  },
};

const ComputerTelugu = () => {
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
        <h1>ప్రాథమిక కంప్యూటర్ నైపుణ్యాలు</h1>
        <p>సరళమైన తెలుగులో అవసరమైన డిజిటల్ జ్ఞానంతో మిమ్మల్ని శక్తివంతం చేసుకోండి</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">మీరు అన్వేషించే ముఖ్య అంశాలు</h2>
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
        <h2 id="gallery-heading">దృశ్య భావనలను అన్వేషించండి</h2>
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
    </div>
  );
};
export default ComputerTelugu;


