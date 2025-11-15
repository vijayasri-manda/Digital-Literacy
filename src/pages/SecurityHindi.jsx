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
    title: "मजबूत पासवर्ड और खाता सुरक्षा",
    src: "/assets/securityhindi/strong-passwords-hindi.mp4",
    icon: <FaLock aria-hidden="true" />,
    thumb: "/assets/thumbs/passwords.jpg",
  },
  phishing: {
    title: "फिशिंग और स्कैम संदेशों की पहचान",
    src: "/assets/securityhindi/phishing-awareness-hindi.mp4",
    icon: <FaExclamationTriangle aria-hidden="true" />,
    thumb: "/assets/thumbs/phishing.jpg",
  },
  upiSafety: {
    title: "सुरक्षित UPI लेनदेन और डिजिटल भुगतान",
    src: "/assets/securityhindi/upi-safety-hindi.mp4",
    icon: <FaCreditCard aria-hidden="true" />,
    thumb: "/assets/thumbs/upi-safety.jpg",
  },
  socialMedia: {
    title: "सोशल मीडिया गोपनीयता और सुरक्षित साझाकरण",
    src: "/assets/securityhindi/social-media-privacy-hindi.mp4",
    icon: <FaUserShield aria-hidden="true" />,
    thumb: "/assets/thumbs/social-privacy.jpg",
  },
  wifiSecurity: {
    title: "पब्लिक Wi-Fi सुरक्षा और सुरक्षित ब्राउज़िंग",
    src: "/assets/securityhindi/wifi-security-hindi.mp4",
    icon: <FaWifi aria-hidden="true" />,
    thumb: "/assets/thumbs/wifi-security.jpg",
  },
  mobileSecurity: {
    title: "मोबाइल ऐप अनुमतियां और डिवाइस सुरक्षा",
    src: "/assets/securityhindi/mobile-security-hindi.mp4",
    icon: <FaMobileAlt aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-security.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "पासवर्ड सुरक्षा",
    info: {
      title: "मजबूत पासवर्ड बनाना",
      description: "अपने सभी खातों के लिए सुरक्षित पासवर्ड बनाना और प्रबंधित करना सीखें।",
      points: [
        "अक्षरों, संख्याओं, प्रतीकों के मिश्रण के साथ कम से कम 12 वर्ण का उपयोग करें।",
        "कभी भी कई खातों में पासवर्ड का पुन: उपयोग न करें।",
        "सुरक्षा के लिए पासवर्ड मैनेजर का उपयोग करने पर विचार करें।",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "फिशिंग सुरक्षा",
    info: {
      title: "फिशिंग प्रयासों की पहचान",
      description: "धोखाधड़ी वाले संदेशों और वेबसाइटों को पहचानें और उनसे बचें।",
      points: [
        "भेजने वाले के ईमेल पते की वर्तनी की सावधानीपूर्वक जांच करें।",
        "कभी भी संदिग्ध लिंक पर क्लिक न करें या अज्ञात अटैचमेंट डाउनलोड न करें।",
        "जवाब देने से पहले आधिकारिक चैनलों के माध्यम से अनुरोधों की पुष्टि करें।",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "UPI लेनदेन सुरक्षा",
    info: {
      title: "UPI के साथ सुरक्षित डिजिटल भुगतान",
      description: "सुरक्षित ऑनलाइन लेनदेन और भुगतान के लिए सर्वोत्तम प्रथाएं।",
      points: [
        "पैसे भेजने से पहले हमेशा प्राप्तकर्ता के विवरण की पुष्टि करें।",
        "UPI PIN का उपयोग करें और इसे कभी किसी के साथ साझा न करें।",
        "अनधिकृत भुगतान के लिए नियमित रूप से लेनदेन इतिहास की जांच करें।",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "सोशल मीडिया गोपनीयता",
    info: {
      title: "अपनी सोशल मीडिया गोपनीयता की सुरक्षा",
      description: "नियंत्रित करें कि आप क्या साझा करते हैं और कौन आपकी व्यक्तिगत जानकारी देख सकता है।",
      points: [
        "नियमित रूप से गोपनीयता सेटिंग्स की समीक्षा और समायोजन करें।",
        "व्यक्तिगत जानकारी या स्थान पोस्ट करने से पहले सोचें।",
        "अजनबियों से मित्र अनुरोध स्वीकार करने में सावधान रहें।",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "Wi-Fi सुरक्षा",
    info: {
      title: "सुरक्षित पब्लिक Wi-Fi उपयोग",
      description: "पब्लिक इंटरनेट कनेक्शन का उपयोग करते समय सुरक्षित रहें।",
      points: [
        "पब्लिक Wi-Fi पर संवेदनशील खातों तक पहुंचने से बचें।",
        "सुरक्षित कनेक्शन के लिए वेबसाइट पतों में 'https://' देखें।",
        "Wi-Fi नेटवर्क के लिए ऑटो-कनेक्ट बंद करें।",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "मोबाइल ऐप सुरक्षा",
    info: {
      title: "मोबाइल ऐप अनुमतियां और सुरक्षा",
      description: "ऐप अनुमतियों का प्रबंधन करें और अपने डिवाइस को सुरक्षित रखें।",
      points: [
        "इंस्टॉलेशन से पहले ऐप अनुमतियों की समीक्षा करें।",
        "अपने डिवाइस और ऐप्स को नियमित रूप से अपडेट रखें।",
        "स्क्रीन लॉक का उपयोग करें और रिमोट वाइप सुविधाएं सक्षम करें।",
      ],
    },
  },
};

const SecurityHindi = () => {
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
        <h1>डिजिटल सुरक्षा और सुरक्षित लेनदेन</h1>
        <p>आवश्यक साइबर सुरक्षा ज्ञान के साथ ऑनलाइन अपनी सुरक्षा करें — सरल हिंदी में</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">आवश्यक सुरक्षा कौशल जो आप सीखेंगे</h2>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="progress-text">{completedVideos.size} में से {videoKeys.length} वीडियो पूरे किए गए</p>
        </div>
        <ul className="lesson-list">
          {Object.entries(videos).map(([key, { title, icon }]) => (
            <li
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`वीडियो चलाएं: ${title}`}
              className={completedVideos.has(key) ? 'completed' : ''}
            >
              {icon} <span>{title}</span>
              {completedVideos.has(key) && <FaCheckCircle className="check-icon" />}
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-section" aria-labelledby="video-lessons">
        <h2 id="video-lessons">इंटरैक्टिव सुरक्षा पाठ</h2>
        <div className="video-card-grid">
          {Object.entries(videos).map(([key, { title, icon, thumb }]) => (
            <div
              key={key}
              className="video-card"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`देखें: ${title}`}
            >
              <div className="thumbnail">
                <img src={thumb} alt={`${title} थंबनेल`} />
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
              आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता।
            </video>
            <div className="video-controls">
              <button 
                className="nav-btn prev-btn" 
                onClick={goToPreviousVideo}
                disabled={currentVideoIndex === 0}
              >
                ← पिछला
              </button>
              <button 
                className={`complete-btn ${completedVideos.has(selectedVideoKey) ? 'completed' : ''}`}
                onClick={markAsComplete}
                disabled={completedVideos.has(selectedVideoKey)}
              >
                {completedVideos.has(selectedVideoKey) ? '✓ पूर्ण' : 'पूर्ण चिह्नित करें'}
              </button>
              <button 
                className="nav-btn next-btn" 
                onClick={goToNextVideo}
                disabled={currentVideoIndex === videoKeys.length - 1}
              >
                अगला →
              </button>
            </div>
            <button className="close-btn" onClick={handleCloseVideo}>बंद करें</button>
          </div>
        </div>
      )}

      <section className="image-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">सुरक्षा अवधारणाओं का अन्वेषण करें</h2>
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
              aria-label={`और जानें: ${alt}`}
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
            <button className="close-btn" onClick={handleCloseImage}>बंद करें</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityHindi;