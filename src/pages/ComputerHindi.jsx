import React, { useState, useCallback, useEffect, useRef } from "react";
import "./ComputerEnglish.css";
import {
  FaPowerOff,
  FaMouse,
  FaKeyboard,
  FaDesktop,
  FaFolderOpen,
  FaGlobe,
  FaShieldAlt,
  FaPlay,
  FaImage
} from "react-icons/fa";

const videos = {
  power: {
    title: "कंप्यूटर चालू/बंद करना",
    src: "https://drive.google.com/file/d/1QtF5qq__QDfL3YIroBiqMjR5-tsYWBre/preview",
    icon: <FaPowerOff aria-hidden="true" />,
    thumb: "/assets/thumbs/startup.jpg",
  },
  mouse: {
    title: "माउस और कीबोर्ड का उपयोग",
    src: "https://drive.google.com/file/d/1Y5OKNQ8Jx8vHAE8LJqidPugPpY9JF0Hs/preview",
    icon: <FaMouse aria-hidden="true" />,
    thumb: "/assets/thumbs/mouse.jpg",
  },
  desktop: {
    title: "डेस्कटॉप वातावरण को समझना",
    src: "https://drive.google.com/file/d/1F71eRngkEC2b92sg4qqOmSTWW46fxQ8H/preview",
    icon: <FaDesktop aria-hidden="true" />,
    thumb: "/assets/thumbs/desktop.jpg",
  },
  fileManagement: {
    title: "मूल फ़ाइल प्रबंधन",
    src: "https://drive.google.com/file/d/1dwdrQepYSuQy2xvVSAFKEzRq7ZadQZGW/preview",
    icon: <FaFolderOpen aria-hidden="true" />,
    thumb: "/assets/thumbs/files.jpg",
  },
  internet: {
    title: "इंटरनेट और वेब ब्राउज़िंग का परिचय",
    src: "https://drive.google.com/file/d/17tjynv6W4HBw2Dou9IMujUqBC_wxG3NT/preview",
    icon: <FaGlobe aria-hidden="true" />,
    thumb: "/assets/thumbs/internet.jpg",
  },
  safety: {
    title: "ऑनलाइन सुरक्षा और गोपनीयता",
    src: "https://drive.google.com/file/d/15_TzIL7YeAYl8Ly0rGKEAyfm7NixRHFU/preview",
    icon: <FaShieldAlt aria-hidden="true" />,
    thumb: "/assets/thumbs/safety.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "RAM के बारे में सीखना",
    info: {
      title: "RAM (रैंडम एक्सेस मेमोरी) को समझना",
      description: "RAM कंप्यूटर द्वारा उपयोग किए जा रहे डेटा को अस्थायी रूप से संग्रहीत करती है।",
      points: [
        "अल्पकालिक पहुंच के लिए हार्ड ड्राइव से तेज़।",
        "कई प्रोग्राम चलाने के लिए आवश्यक।",
        "कंप्यूटर बंद होने पर डेटा खो जाता है।",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "CPU के बारे में सीखना",
    info: {
      title: "CPU (केंद्रीय प्रसंस्करण इकाई) क्या है?",
      description: "CPU कंप्यूटर पर सभी निर्देशों और कार्यों को संसाधित करता है।",
      points: [
        "कंप्यूटर के मस्तिष्क के रूप में कार्य करता है।",
        "प्रसंस्करण गति निर्धारित करता है।",
        "RAM और स्टोरेज के साथ मिलकर काम करता है।",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "स्टोरेज डिवाइस अवलोकन",
    info: {
      title: "हार्ड ड्राइव बनाम SSD",
      description: "आपके कंप्यूटर में दीर्घकालिक डेटा भंडारण।",
      points: [
        "HDD: पारंपरिक, किफायती, धीमी।",
        "SSD: तेज़, टिकाऊ, महंगी।",
        "सिस्टम बूट समय और एप्लिकेशन गति को प्रभावित करती है।",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "ऑपरेटिंग सिस्टम को समझना",
    info: {
      title: "ऑपरेटिंग सिस्टम को समझना",
      description: "OS उपयोगकर्ता और हार्डवेयर के बीच इंटरफेस है।",
      points: [
        "सिस्टम संसाधनों का प्रबंधन करता है।",
        "एप्लिकेशन और इंटरफेस चलाता है।",
        "उदाहरण: Windows, macOS, Linux।",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "परिधीय उपकरणों के बारे में सीखना",
    info: {
      title: "परिधीय उपकरणों का महत्व",
      description: "उपयोगिता बढ़ाने के लिए बाहरी रूप से जुड़े उपकरण।",
      points: [
        "इनपुट: कीबोर्ड, माउस, स्कैनर।",
        "आउटपुट: प्रिंटर, मॉनिटर, स्पीकर।",
        "वैकल्पिक लेकिन कार्यक्षमता बढ़ाते हैं।",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "नेटवर्किंग मूल बातें",
    info: {
      title: "नेटवर्किंग मूल बातें",
      description: "उपकरणों के बीच डेटा साझाकरण सक्षम करता है।",
      points: [
        "LAN: स्थानीय कनेक्शन (घर/स्कूल)।",
        "WAN: इंटरनेट के माध्यम से वैश्विक कनेक्शन।",
        "उपकरण: राउटर, मॉडेम, स्विच।",
      ],
    },
  },
};

const ComputerHindi = () => {
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
        <h1>मूल कंप्यूटर कौशल</h1>
        <p>सरल हिंदी में आवश्यक डिजिटल ज्ञान प्राप्त करें</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">आप क्या सीखेंगे</h2>
        <ul className="lesson-list">
          {Object.entries(videos).map(([key, { title, icon }]) => (
            <li
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`वीडियो देखें: ${title}`}
            >
              {icon} <span>{title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-section" aria-labelledby="video-lessons">
        <h2 id="video-lessons">इंटरएक्टिव वीडियो पाठ</h2>
        <div className="video-card-grid">
          {Object.entries(videos).map(([key, { title, icon, thumb }]) => (
            <div
              key={key}
              className="video-card"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`वीडियो देखें: ${title}`}
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

      <section className="image-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">दृश्य अवधारणाओं का अन्वेषण करें</h2>
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
              aria-label={`इसके बारे में और जानें: ${alt}`}
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
            <button className="close-btn" onClick={handleCloseVideo}>बंद करें</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComputerHindi;
