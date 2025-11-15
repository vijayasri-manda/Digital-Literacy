import React, { useState, useCallback, useEffect, useRef } from "react";
import "./ComputerEnglish.css";
import {
  FaShieldAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCreditCard,
  FaUserShield,
  FaCheckCircle,
  FaPlay,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaEnvelope,
  FaWifi,
  FaMobileAlt,
} from "react-icons/fa";

const videos = {
  passwords: {
    title: "బలమైన పాస్‌వర్డ్‌లు మరియు ఖాతా భద్రత",
    src: "/assets/securitytelugu/strong-passwords-telugu.mp4",
    icon: <FaLock aria-hidden="true" />,
    thumb: "/assets/thumbs/passwords.jpg",
  },
  phishing: {
    title: "ఫిషింగ్ మరియు స్కామ్ సందేశాలను గుర్తించడం",
    src: "/assets/securitytelugu/phishing-awareness-telugu.mp4",
    icon: <FaExclamationTriangle aria-hidden="true" />,
    thumb: "/assets/thumbs/phishing.jpg",
  },
  upiSafety: {
    title: "సురక్షిత UPI లావాదేవీలు మరియు డిజిటల్ చెల్లింపులు",
    src: "/assets/securitytelugu/upi-safety-telugu.mp4",
    icon: <FaCreditCard aria-hidden="true" />,
    thumb: "/assets/thumbs/upi-safety.jpg",
  },
  socialMedia: {
    title: "సోషల్ మీడియా గోప్యత మరియు సురక్షిత భాగస్వామ్యం",
    src: "/assets/securitytelugu/social-media-privacy-telugu.mp4",
    icon: <FaUserShield aria-hidden="true" />,
    thumb: "/assets/thumbs/social-privacy.jpg",
  },
  wifiSecurity: {
    title: "పబ్లిక్ Wi-Fi భద్రత మరియు సురక్షిత బ్రౌజింగ్",
    src: "/assets/securitytelugu/wifi-security-telugu.mp4",
    icon: <FaWifi aria-hidden="true" />,
    thumb: "/assets/thumbs/wifi-security.jpg",
  },
  mobileSecurity: {
    title: "మొబైల్ యాప్ అనుమతులు మరియు పరికర భద్రత",
    src: "/assets/securitytelugu/mobile-security-telugu.mp4",
    icon: <FaMobileAlt aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-security.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "పాస్‌వర్డ్ భద్రత",
    info: {
      title: "బలమైన పాస్‌వర్డ్‌లు సృష్టించడం",
      description: "మీ అన్ని ఖాతాలకు సురక్షిత పాస్‌వర్డ్‌లను ఎలా సృష్టించాలి మరియు నిర్వహించాలో నేర్చుకోండి.",
      points: [
        "అక్షరాలు, సంఖ్యలు, చిహ్నాల మిశ్రమంతో కనీసం 12 అక్షరాలను ఉపయోగించండి.",
        "అనేక ఖాతాలలో పాస్‌వర్డ్‌లను మళ్లీ ఉపయోగించవద్దు.",
        "భద్రత కోసం పాస్‌వర్డ్ మేనేజర్‌ను ఉపయోగించడాన్ని పరిగణించండి.",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "ఫిషింగ్ రక్షణ",
    info: {
      title: "ఫిషింగ్ ప్రయత్నాలను గుర్తించడం",
      description: "మోసపూరిత సందేశాలు మరియు వెబ్‌సైట్‌లను గుర్తించి వాటిని నివారించండి.",
      points: [
        "పంపినవారి ఇమెయిల్ చిరునామాను అక్షర దోషాల కోసం జాగ్రత్తగా తనిఖీ చేయండి.",
        "అనుమానాస్పద లింక్‌లపై క్లిక్ చేయవద్దు లేదా తెలియని అటాచ్‌మెంట్‌లను డౌన్‌లోడ్ చేయవద్దు.",
        "ప్రతిస్పందించే ముందు అధికారిక ఛానెల్‌ల ద్వారా అభ్యర్థనలను ధృవీకరించండి.",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "UPI లావాదేవీ భద్రత",
    info: {
      title: "UPIతో సురక్షిత డిజిటల్ చెల్లింపులు",
      description: "సురక్షిత ఆన్‌లైన్ లావాదేవీలు మరియు చెల్లింపుల కోసం ఉత్తమ పద్ధతులు.",
      points: [
        "డబ్బు పంపే ముందు ఎల్లప్పుడూ గ్రహీత వివరాలను ధృవీకరించండి.",
        "UPI PINను ఉపయోగించండి మరియు దానిని ఎవరితోనూ పంచుకోవద్దు.",
        "అనధికార చెల్లింపుల కోసం లావాదేవీ చరిత్రను క్రమం తప్పకుండా తనిఖీ చేయండి.",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "సోషల్ మీడియా గోప్యత",
    info: {
      title: "మీ సోషల్ మీడియా గోప్యతను రక్షించడం",
      description: "మీరు ఏమి పంచుకుంటారు మరియు మీ వ్యక్తిగత సమాచారాన్ని ఎవరు చూడగలరు అనేదాన్ని నియంత్రించండి.",
      points: [
        "గోప్యత సెట్టింగ్‌లను క్రమం తప్పకుండా సమీక్షించండి మరియు సర్దుబాటు చేయండి.",
        "వ్యక్తిగత సమాచారం లేదా స్థానాన్ని పోస్ట్ చేసే ముందు ఆలోచించండి.",
        "అపరిచితుల నుండి స్నేహ అభ్యర్థనలను అంగీకరించడంలో జాగ్రత్త వహించండి.",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "Wi-Fi భద్రత",
    info: {
      title: "సురక్షిత పబ్లిక్ Wi-Fi వినియోగం",
      description: "పబ్లిక్ ఇంటర్నెట్ కనెక్షన్‌లను ఉపయోగిస్తున్నప్పుడు సురక్షితంగా ఉండండి.",
      points: [
        "పబ్లిక్ Wi-Fiలో సున్నితమైన ఖాతాలను యాక్సెస్ చేయడం మానుకోండి.",
        "సురక్షిత కనెక్షన్‌ల కోసం వెబ్‌సైట్ చిరునామాలలో 'https://'ని చూడండి.",
        "Wi-Fi నెట్‌వర్క్‌లకు ఆటో-కనెక్ట్‌ను ఆఫ్ చేయండి.",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "మొబైల్ యాప్ భద్రత",
    info: {
      title: "మొబైల్ యాప్ అనుమతులు మరియు భద్రత",
      description: "యాప్ అనుమతులను నిర్వహించండి మరియు మీ పరికరాన్ని సురక్షితంగా ఉంచండి.",
      points: [
        "ఇన్‌స్టాలేషన్‌కు ముందు యాప్ అనుమతులను సమీక్షించండి.",
        "మీ పరికరం మరియు యాప్‌లను క్రమం తప్పకుండా అప్‌డేట్ చేయండి.",
        "స్క్రీన్ లాక్‌ను ఉపయోగించండి మరియు రిమోట్ వైప్ ఫీచర్‌లను ప్రారంభించండి.",
      ],
    },
  },
};

const SecurityTelugu = () => {
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);
  const [selectedImageKey, setSelectedImageKey] = useState(null);
  const [completedVideos, setCompletedVideos] = useState(new Set());
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videoKeys = Object.keys(videos);

  const videoModalRef = useRef(null);
  const imageModalRef = useRef(null);

  const handleCloseVideo = useCallback(() => setSelectedVideoKey(null), []);
  const handleCloseImage = useCallback(() => setSelectedImageKey(null), []);

  const handleOpenVideo = useCallback((key) => {
    setSelectedVideoKey(key);
    setCurrentVideoIndex(videoKeys.indexOf(key));
  }, [videoKeys]);
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
  
  const markAsComplete = () => {
    if (selectedVideoKey) {
      setCompletedVideos(prev => new Set([...prev, selectedVideoKey]));
    }
  };
  
  const goToNextVideo = () => {
    if (currentVideoIndex < videoKeys.length - 1) {
      const nextKey = videoKeys[currentVideoIndex + 1];
      setSelectedVideoKey(nextKey);
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };
  
  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      const prevKey = videoKeys[currentVideoIndex - 1];
      setSelectedVideoKey(prevKey);
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };
  
  const progressPercentage = (completedVideos.size / videoKeys.length) * 100;

  return (
    <div className="english-course-container">
      <header className="course-header">
        <h1>డిజిటల్ భద్రత మరియు సురక్షిత లావాదేవీలు</h1>
        <p>అవసరమైన సైబర్ భద్రత జ్ఞానంతో ఆన్‌లైన్‌లో మిమ్మల్ని రక్షించుకోండి — సరళమైన తెలుగులో</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">మీరు నేర్చుకునే అవసరమైన భద్రతా నైపుణ్యాలు</h2>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="progress-text">{completedVideos.size} లో {videoKeys.length} వీడియోలు పూర్తయ్యాయి</p>
        </div>
        <ul className="lesson-list">
          {Object.entries(videos).map(([key, { title, icon }]) => (
            <li
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`వీడియో ప్లే చేయండి: ${title}`}
              className={completedVideos.has(key) ? 'completed' : ''}
            >
              {icon} <span>{title}</span>
              {completedVideos.has(key) && <FaCheckCircle className="check-icon" />}
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-section" aria-labelledby="video-lessons">
        <h2 id="video-lessons">ఇంటరాక్టివ్ భద్రతా పాఠాలు</h2>
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
                <img src={thumb} alt={`${title} థంబ్‌నెయిల్`} />
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
            <video controls autoPlay className="modal-video">
              <source src={selectedVideo.src} type="video/mp4" />
              మీ బ్రౌజర్ వీడియో ట్యాగ్‌కు మద్దతు ఇవ్వదు.
            </video>
            <div className="video-controls">
              <button 
                className="nav-btn prev-btn" 
                onClick={goToPreviousVideo}
                disabled={currentVideoIndex === 0}
              >
                ← మునుపటిది
              </button>
              <button 
                className={`complete-btn ${completedVideos.has(selectedVideoKey) ? 'completed' : ''}`}
                onClick={markAsComplete}
                disabled={completedVideos.has(selectedVideoKey)}
              >
                {completedVideos.has(selectedVideoKey) ? '✓ పూర్తయింది' : 'పూర్తిగా గుర్తించు'}
              </button>
              <button 
                className="nav-btn next-btn" 
                onClick={goToNextVideo}
                disabled={currentVideoIndex === videoKeys.length - 1}
              >
                తదుపరి →
              </button>
            </div>
            <button className="close-btn" onClick={handleCloseVideo}>మూసివేయండి</button>
          </div>
        </div>
      )}

      <section className="image-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">భద్రతా భావనలను అన్వేషించండి</h2>
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
              aria-label={`మరింత తెలుసుకోండి: ${alt}`}
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
            <button className="close-btn" onClick={handleCloseImage}>మూసివేయండి</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityTelugu;