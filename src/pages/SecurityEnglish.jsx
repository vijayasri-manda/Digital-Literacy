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
    title: "Creating Strong Passwords & Account Security",
    src: "/assets/securityenglish/strong-passwords.mp4",
    icon: <FaLock aria-hidden="true" />,
    thumb: "/assets/thumbs/passwords.jpg",
  },
  phishing: {
    title: "Recognizing Phishing & Scam Messages",
    src: "/assets/securityenglish/phishing-awareness.mp4",
    icon: <FaExclamationTriangle aria-hidden="true" />,
    thumb: "/assets/thumbs/phishing.jpg",
  },
  upiSafety: {
    title: "Safe UPI Transactions & Digital Payments",
    src: "/assets/securityenglish/upi-safety.mp4",
    icon: <FaCreditCard aria-hidden="true" />,
    thumb: "/assets/thumbs/upi-safety.jpg",
  },
  socialMedia: {
    title: "Social Media Privacy & Safe Sharing",
    src: "/assets/securityenglish/social-media-privacy.mp4",
    icon: <FaUserShield aria-hidden="true" />,
    thumb: "/assets/thumbs/social-privacy.jpg",
  },
  wifiSecurity: {
    title: "Public Wi-Fi Safety & Secure Browsing",
    src: "/assets/securityenglish/wifi-security.mp4",
    icon: <FaWifi aria-hidden="true" />,
    thumb: "/assets/thumbs/wifi-security.jpg",
  },
  mobileSecurity: {
    title: "Mobile App Permissions & Device Security",
    src: "/assets/securityenglish/mobile-security.mp4",
    icon: <FaMobileAlt aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-security.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "Password Security",
    info: {
      title: "Creating Strong Passwords",
      description: "Learn how to create and manage secure passwords for all your accounts.",
      points: [
        "Use at least 12 characters with mix of letters, numbers, symbols.",
        "Never reuse passwords across multiple accounts.",
        "Consider using a password manager for security.",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "Phishing Protection",
    info: {
      title: "Identifying Phishing Attempts",
      description: "Recognize and avoid fraudulent messages and websites.",
      points: [
        "Check sender's email address carefully for misspellings.",
        "Never click suspicious links or download unknown attachments.",
        "Verify requests through official channels before responding.",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "UPI Transaction Safety",
    info: {
      title: "Safe Digital Payments with UPI",
      description: "Best practices for secure online transactions and payments.",
      points: [
        "Always verify recipient details before sending money.",
        "Use UPI PIN and never share it with anyone.",
        "Check transaction history regularly for unauthorized payments.",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "Social Media Privacy",
    info: {
      title: "Protecting Your Social Media Privacy",
      description: "Control what you share and who can see your personal information.",
      points: [
        "Review and adjust privacy settings regularly.",
        "Think before posting personal information or location.",
        "Be cautious about accepting friend requests from strangers.",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "Wi-Fi Security",
    info: {
      title: "Safe Public Wi-Fi Usage",
      description: "Stay secure when using public internet connections.",
      points: [
        "Avoid accessing sensitive accounts on public Wi-Fi.",
        "Look for 'https://' in website addresses for secure connections.",
        "Turn off auto-connect to Wi-Fi networks.",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "Mobile App Security",
    info: {
      title: "Mobile App Permissions & Security",
      description: "Manage app permissions and keep your device secure.",
      points: [
        "Review app permissions before installation.",
        "Keep your device and apps updated regularly.",
        "Use screen lock and enable remote wipe features.",
      ],
    },
  },
};

const SecurityEnglish = () => {
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
        <h1>Digital Security & Safe Transactions</h1>
        <p>Protect yourself online with essential cybersecurity knowledge — in simple English</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">Essential Security Skills You'll Master</h2>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="progress-text">{completedVideos.size} of {videoKeys.length} videos completed</p>
        </div>
        <ul className="lesson-list">
          {Object.entries(videos).map(([key, { title, icon }]) => (
            <li
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`Play video on: ${title}`}
              className={completedVideos.has(key) ? 'completed' : ''}
            >
              {icon} <span>{title}</span>
              {completedVideos.has(key) && <FaCheckCircle className="check-icon" />}
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-section" aria-labelledby="video-lessons">
        <h2 id="video-lessons">Interactive Security Lessons</h2>
        <div className="video-card-grid">
          {Object.entries(videos).map(([key, { title, icon, thumb }]) => (
            <div
              key={key}
              className="video-card"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`Watch: ${title}`}
            >
              <div className="thumbnail">
                <img src={thumb} alt={`${title} thumbnail`} />
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
              Your browser does not support the video tag.
            </video>
            <div className="video-controls">
              <button 
                className="nav-btn prev-btn" 
                onClick={goToPreviousVideo}
                disabled={currentVideoIndex === 0}
              >
                ← Previous
              </button>
              <button 
                className={`complete-btn ${completedVideos.has(selectedVideoKey) ? 'completed' : ''}`}
                onClick={markAsComplete}
                disabled={completedVideos.has(selectedVideoKey)}
              >
                {completedVideos.has(selectedVideoKey) ? '✓ Completed' : 'Mark Complete'}
              </button>
              <button 
                className="nav-btn next-btn" 
                onClick={goToNextVideo}
                disabled={currentVideoIndex === videoKeys.length - 1}
              >
                Next →
              </button>
            </div>
            <button className="close-btn" onClick={handleCloseVideo}>Close</button>
          </div>
        </div>
      )}

      <section className="image-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">Explore Security Concepts</h2>
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
              aria-label={`Learn more about: ${alt}`}
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
            <button className="close-btn" onClick={handleCloseImage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityEnglish;