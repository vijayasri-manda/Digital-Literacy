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
    title: "Turning On/Off a Mobile",
    src: "https://drive.google.com/file/d/1VhqLPSUVFkl3pQE6Y893_CyCdEaoNcmZ/preview",
    icon: <FaPowerOff aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-power.jpg",
  },
  calls: {
    title: "Making and Receiving Calls",
    src: "https://drive.google.com/file/d/1qUVebjOgxCf1SRFlWVBQ99BapaQxwDRO/preview",
    icon: <FaPhone aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-calls.jpg",
  },
  messages: {
    title: "Sending and Receiving Messages",
    src: "https://drive.google.com/file/d/11C7C3aw2wbxVMjAsY7zL2u35qs5selII/preview",
    icon: <FaSms aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-sms.jpg",
  },
  basicApps: {
    title: "Using Basic Apps",
    src: "https://drive.google.com/file/d/1hTwh0HrNgBGuR10oDwixs3oYR-GJX4Wc/preview",
    icon: <FaCamera aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-apps.jpg",
  },
  wifi: {
    title: "Connecting to Wi-Fi",
    src: "https://drive.google.com/file/d/1USaf0XYOEsz7uwrAY930mpfPFXL32NAx/preview",
    icon: <FaWifi aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-wifi.jpg",
  },
  whatsapp: {
    title: "Using WhatsApp",
    src: "https://drive.google.com/file/d/1bL4fjhhuo08tJ0CmC8EtrwBtaNVrWyiJ/preview",
    icon: <FaWhatsapp aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-whatsapp.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "Mobile Power Management",
    info: {
      title: "Mobile Power and Basic Operations",
      description: "Learn how to properly turn your mobile phone on and off.",
      points: [
        "Power button location and functions.",
        "Safe shutdown and restart procedures.",
        "Battery management and charging basics.",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "Making Phone Calls",
    info: {
      title: "Making and Receiving Phone Calls",
      description: "Master the essential skill of voice communication on mobile.",
      points: [
        "Dialing numbers and using the phone app.",
        "Answering and declining incoming calls.",
        "Managing call history and contacts.",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "Text Messaging",
    info: {
      title: "Sending and Receiving Text Messages",
      description: "Communicate through SMS and multimedia messages.",
      points: [
        "Composing and sending text messages.",
        "Reading and replying to received messages.",
        "Managing message conversations.",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "Basic Mobile Apps",
    info: {
      title: "Using Basic Apps: Camera, Gallery, Calculator",
      description: "Essential apps that every mobile user should know.",
      points: [
        "Taking photos and videos with camera app.",
        "Viewing and organizing photos in gallery.",
        "Using calculator for basic math operations.",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "Wi-Fi Connection",
    info: {
      title: "Connecting to Wi-Fi Networks",
      description: "Access internet through Wi-Fi connections.",
      points: [
        "Finding and connecting to Wi-Fi networks.",
        "Entering Wi-Fi passwords correctly.",
        "Managing saved Wi-Fi connections.",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "WhatsApp Communication",
    info: {
      title: "Using WhatsApp for Communication",
      description: "Modern messaging and calling through WhatsApp.",
      points: [
        "Setting up WhatsApp account.",
        "Sending messages, photos, and voice notes.",
        "Making voice and video calls.",
      ],
    },
  },
};

const MobileEnglish = () => {
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
        <h1>Essential Mobile Phone Skills</h1>
        <p>Master the 6 fundamental mobile skills — in simple English</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">6 Essential Mobile Skills You'll Learn</h2>
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
        <h2 id="video-lessons">Interactive Video Lessons</h2>
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
            <iframe 
              src={selectedVideo.src} 
              className="modal-video"
              frameBorder="0" 
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
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
        <h2 id="gallery-heading">Explore Mobile Concepts</h2>
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

export default MobileEnglish;