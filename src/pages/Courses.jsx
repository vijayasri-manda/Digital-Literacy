// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FaLaptop, FaMobileAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./Courses.css";

// const Courses = () => {
//   const { t, i18n } = useTranslation();
//   const [selected, setSelected] = useState("");
//   const [isDark, setIsDark] = useState(false);

//   const handleChange = (e) => {
//     const lang = e.target.value;
//     i18n.changeLanguage(lang);
//     setSelected(lang);
//   };

//   const toggleDarkMode = () => {
//     document.body.classList.toggle("dark-mode");
//     setIsDark(!isDark);
//   };

//   const langRoutes = {
//     en: "english",
//     hi: "hindi",
//     te: "telugu",
//   };

//   return (
//     <div className="courses-container">
//       <button onClick={toggleDarkMode} className="theme-toggle-btn">
//         {isDark ? "Light Mode" : "Dark Mode"}
//       </button>

//       <h1>{t("select_language")}</h1>

//       <select
//         onChange={handleChange}
//         value={selected}
//         className="language-select"
//       >
//         <option value="">-- Choose Language --</option>
//         <option value="en">English</option>
//         <option value="hi">Hindi</option>
//         <option value="te">Telugu</option>
//       </select>

//       {selected && (
//         <div className="modules-section">
//           <h2>{t("modules")}</h2>
//           <div className="modules-grid">
//             <Link
//               to={`/courses/computer-${langRoutes[selected]}`}
//               className="module-card animated"
//             >
//               <FaLaptop className="module-icon" />
//               <h3>{t("computer_usage")}</h3>
//               <p>{t("learn_computer_basics")}</p>
//             </Link>

//             <Link
//               to={`/courses/mobile-${langRoutes[selected]}`}
//               className="module-card animated"
//             >
//               <FaMobileAlt className="module-icon" />
//               <h3>{t("mobile_usage")}</h3>
//               <p>{t("learn_mobile_basics")}</p>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLaptop, FaMobileAlt, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    setSelected(lang);
  };

  const langRoutes = {
    en: "english",
    hi: "hindi",
    te: "telugu",
  };

  return (
    <div className="courses-container">

      <h1>{t("select_language")}</h1>

      <select
        onChange={handleChange}
        value={selected}
        className="language-select"
      >
        <option value="">-- Choose Language --</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="te">Telugu</option>
      </select>

      {selected && (
        <div className="modules-section">
          <h2>{t("modules")}</h2>
          <div className="modules-grid">
            <Link
              to={`/courses/computer-${langRoutes[selected]}`}
              className="module-card animated"
            >
              <FaLaptop className="module-icon" />
              <h3>{t("computer_usage")}</h3>
              <p>{t("learn_computer_basics")}</p>
            </Link>

            <Link
              to={`/courses/mobile-${langRoutes[selected]}`}
              className="module-card animated"
            >
              <FaMobileAlt className="module-icon" />
              <h3>{t("mobile_usage")}</h3>
              <p>{t("learn_mobile_basics")}</p>
            </Link>

            <Link
              to={`/courses/security-${langRoutes[selected]}`}
              className="module-card animated"
            >
              <FaShieldAlt className="module-icon" />
              <h3>{t("security")}</h3>
              <p>{t("learn_digital_security")}</p>
            </Link>

            <Link
              to={`/courses/quiz-${langRoutes[selected]}`}
              className="module-card animated"
            >
              <FaQuestionCircle className="module-icon" />
              <h3>{t("quiz")}</h3>
              <p>{t("test_your_knowledge")}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
