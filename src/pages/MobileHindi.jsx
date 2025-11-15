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
    title: "मोबाइल चालू/बंद करना",
    src: "https://drive.google.com/file/d/1bSuLi_9Ew1mTbTn-aUptQVhoD7uccjy1/preview",
    icon: <FaPowerOff aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-power.jpg",
  },
  calls: {
    title: "कॉल करना और प्राप्त करना",
    src: "https://drive.google.com/file/d/1j3fAeA-B0VywjXTedxj_-X5ReCGbwhYV/preview",
    icon: <FaPhone aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-calls.jpg",
  },
  messages: {
    title: "संदेश भेजना और प्राप्त करना",
    src: "https://drive.google.com/file/d/1PuK4zFSGF1sMwm5V2awbGE9VKepGf1_z/preview",
    icon: <FaSms aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-sms.jpg",
  },
  basicApps: {
    title: "मूल ऐप्स का उपयोग",
    src: "https://drive.google.com/file/d/17npEwRWbeYgYnesMCi07Kz7CTL4A51gq/preview",
    icon: <FaCamera aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-apps.jpg",
  },
  wifi: {
    title: "वाई-फाई से कनेक्ट करना",
    src: "https://drive.google.com/file/d/1tvTs51djoRP_Ip3oGWu1fHIbNJ7UCyu6/preview",
    icon: <FaWifi aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-wifi.jpg",
  },
  whatsapp: {
    title: "व्हाट्सएप का उपयोग",
    src: "https://drive.google.com/file/d/1E0IIOaboJ6tuOgFJqkQRFkZXc91k_RRd/preview",
    icon: <FaWhatsapp aria-hidden="true" />,
    thumb: "/assets/thumbs/mobile-whatsapp.jpg",
  },
};

const imagesData = {
  gallery1: {
    src: "/assets/gallery1.jpeg",
    alt: "मोबाइल पावर मैनेजमेंट",
    info: {
      title: "मोबाइल पावर और बेसिक ऑपरेशन्स",
      description: "अपने मोबाइल फोन को सही तरीके से ऑन और ऑफ करना सीखें।",
      points: [
        "पावर बटन की लोकेशन और फंक्शन्स।",
        "सेफ शटडाउन और रीस्टार्ट प्रक्रियाएं।",
        "बैटरी मैनेजमेंट और चार्जिंग बेसिक्स।",
      ],
    },
  },
  gallery2: {
    src: "/assets/gallery2.jpeg",
    alt: "फोन कॉल करना",
    info: {
      title: "फोन कॉल करना और रिसीव करना",
      description: "मोबाइल पर वॉयस कम्युनिकेशन की मुख्य स्किल सीखें।",
      points: [
        "नंबर डायल करना और फोन ऐप का उपयोग।",
        "इनकमिंग कॉल्स को अंसर और डिक्लाइन करना।",
        "कॉल हिस्ट्री और कॉन्टैक्ट्स को मैनेज करना।",
      ],
    },
  },
  gallery3: {
    src: "/assets/gallery3.jpeg",
    alt: "टेक्स्ट मैसेजिंग",
    info: {
      title: "टेक्स्ट मैसेज भेजना और रिसीव करना",
      description: "SMS और मल्टीमीडिया मैसेज के द्वारा कम्युनिकेट करें।",
      points: [
        "टेक्स्ट मैसेज कंपोज़ करना और भेजना।",
        "रिसीव किए गए मैसेज पढ़ना और रिप्लाई करना।",
        "मैसेज कन्वर्सेशन्स को मैनेज करना।",
      ],
    },
  },
  gallery4: {
    src: "/assets/gallery4.jpeg",
    alt: "बेसिक मोबाइल ऐप्स",
    info: {
      title: "बेसिक ऐप्स का उपयोग: कैमरा, गैलरी, कैलकुलेटर",
      description: "हर मोबाइल यूजर को जानने वाले मुख्य ऐप्स।",
      points: [
        "कैमरा ऐप से फोटो और वीडियो लेना।",
        "गैलरी में फोटो देखना और ऑर्गनाइज़ करना।",
        "बेसिक मैथ ऑपरेशन्स के लिए कैलकुलेटर का उपयोग।",
      ],
    },
  },
  gallery5: {
    src: "/assets/gallery5.jpeg",
    alt: "वाई-फाई कनेक्शन",
    info: {
      title: "वाई-फाई नेटवर्क से कनेक्ट करना",
      description: "वाई-फाई कनेक्शन के द्वारा इंटरनेट एक्सेस करें।",
      points: [
        "वाई-फाई नेटवर्क ढूंढना और कनेक्ट करना।",
        "वाई-फाई पासवर्ड सही तरीके से एंटर करना।",
        "सेव किए गए वाई-फाई कनेक्शन्स को मैनेज करना।",
      ],
    },
  },
  gallery6: {
    src: "/assets/gallery6.jpeg",
    alt: "व्हाट्सएप कम्युनिकेशन",
    info: {
      title: "कम्युनिकेशन के लिए व्हाट्सएप का उपयोग",
      description: "व्हाट्सएप के द्वारा आधुनिक मैसेजिंग और कॉलिंग।",
      points: [
        "व्हाट्सएप अकाउंट सेटअप करना।",
        "मैसेज, फोटो और वॉयस नोट्स भेजना।",
        "वॉयस और वीडियो कॉल्स करना।",
      ],
    },
  },
};

const MobileHindi = () => {
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
        <h1>मुख्य मोबाइल फोन स्किल्स</h1>
        <p>6 बुनियादी मोबाइल स्किल्स सीखें — सरल हिंदी में</p>
      </header>

      <section className="lesson-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">आप सीखने वाली 6 मुख्य मोबाइल स्किल्स</h2>
        <ul className="lesson-list">
          {Object.entries(videos).map(([key, { title, icon }]) => (
            <li
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenVideo(key)}
              onKeyDown={(e) => handleKeyDown(e, handleOpenVideo, key)}
              aria-label={`वीडियो प्ले करें: ${title}`}
            >
              {icon} <span>{title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-section" aria-labelledby="video-lessons">
        <h2 id="video-lessons">इंटरैक्टिव वीडियो पाठ</h2>
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

      <section className="image-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">मोबाइल कॉन्सेप्ट्स एक्सप्लोर करें</h2>
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
    </div>
  );
};

export default MobileHindi;