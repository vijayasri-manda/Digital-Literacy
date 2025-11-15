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
    title: "Turning On and Off a Computer",
    src: "https://drive.google.com/file/d/1DVqGDpoIsu4aVbXUGoaS1wSqzFCBwNLE/preview",
    icon: <FaPowerOff aria-hidden="true" />,
    thumb: "/assets/thumbs/startup.jpg",
  },
  mouse: {
    title: "Using a Mouse and Keyboard",
    src: "https://drive.google.com/file/d/1hrk65Gj8Eji2sBFvjI_8pTaNBL-ara8o/preview",
    icon: <FaMouse aria-hidden="true" />,
    thumb: "/assets/thumbs/mouse.jpg",
  },
  desktop: {
    title: "Understanding the Desktop Environment",
    src: "https://drive.google.com/file/d/1pXEC4ePTuW6j7G3GmlbG0y_bamjiZAqw/preview",
    icon: <FaDesktop aria-hidden="true" />,
    thumb: "/assets/thumbs/desktop.jpg",
  },
  fileManagement: {
    title: "Basic File Management",
    src: "https://drive.google.com/file/d/1PTxQikVm9KPX-KUZt854PGXc-L_KzCmy/preview",
    icon: <FaFolderOpen aria-hidden="true" />,
    thumb: "/assets/thumbs/files.jpg",
  },
  internet: {
    title: "Introduction to Internet and Web Browsing",
    src: "https://drive.google.com/file/d/1seKjTi9VcZamREYs29pXfX6BTzCGGNNw/preview",
    icon: <FaGlobe aria-hidden="true" />,
    thumb: "/assets/thumbs/internet.jpg",
  },
  safety: {
    title: "Understanding Online Safety and Privacy",
    src: "https://drive.google.com/file/d/10K5QVPDfBVajpFyBe7hDsPiXMsNiGJSd/preview",
    icon: <FaShieldAlt aria-hidden="true" />,
    thumb: "/assets/thumbs/safety.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "Learning about RAM",
    info: {
      title: "Understanding RAM (Random Access Memory)",
      description: "RAM temporarily stores data being used by the computer.",
      points: [
        "Faster than hard drive for short-term access.",
        "Essential for running multiple programs.",
        "Data is lost when the computer is turned off.",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "Learning about the CPU",
    info: {
      title: "What is a CPU (Central Processing Unit)?",
      description: "The CPU processes all instructions and tasks on the computer.",
      points: [
        "Acts as the brain of the computer.",
        "Determines processing speed.",
        "Works closely with RAM and storage.",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "Storage devices overview",
    info: {
      title: "Hard Drive vs. SSD",
      description: "Long-term data storage in your computer.",
      points: [
        "HDD: Traditional, affordable, slower.",
        "SSD: Fast, durable, expensive.",
        "Affects system boot time and application speed.",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "Understanding operating systems",
    info: {
      title: "Understanding Operating Systems",
      description: "OS is the interface between user and hardware.",
      points: [
        "Manages system resources.",
        "Runs applications and interfaces.",
        "Examples: Windows, macOS, Linux.",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "Learning about peripherals",
    info: {
      title: "Importance of Peripherals",
      description: "Devices connected externally to enhance usability.",
      points: [
        "Input: Keyboard, mouse, scanner.",
        "Output: Printer, monitor, speaker.",
        "Optional but boost functionality.",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "Networking basics",
    info: {
      title: "Networking Basics",
      description: "Enables data sharing between devices.",
      points: [
        "LAN: Local connections (home/school).",
        "WAN: Global connections via internet.",
        "Devices: Router, modem, switch.",
      ],
    },
  },
};

const ComputerEnglish = () => {
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
        <h1>Foundational Computer Skills</h1>
        <p>Empower yourself with essential digital knowledge — in simple English</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">Key Topics You'll Explore</h2>
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
        <h2 id="gallery-heading">Explore Visual Concepts</h2>
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

export default ComputerEnglish;
